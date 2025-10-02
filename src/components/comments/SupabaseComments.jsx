// src/components/comments/SupabaseComments.jsx
import { useState, useEffect, useRef } from "react";
import { supabase } from "../../../lib/supabaseClient"; 
import { v4 as uuidv4 } from 'uuid'; 

export default function SupabaseComments() {
    // ------------------- ESTADOS -------------------
    const [comments, setComments] = useState([]);
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [newCommentsCount, setNewCommentsCount] = useState(0); // Mantenemos el contador
    const [editingId, setEditingId] = useState(null);
    const [editMessage, setEditMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    // ------------------- REFERENCIAS -------------------
    const commentsEndRef = useRef(null);
    const commentsListRef = useRef(null); // Ref para el contenedor de la lista
    const isInitialLoad = useRef(true); // Usamos la bandera original para el contador
    const [hasLoaded, setHasLoaded] = useState(false); // Para control de scroll inicial

    // ---------------------------------------------
    // --- EFECTO 1: REALTIME Y CARGA INICIAL (CRUD COMPLETO) ---
    // ---------------------------------------------
    useEffect(() => {
        fetchComments();

        const commentsChannel = supabase
            .channel("public:comments-changes")
            .on(
                "postgres_changes",
                { event: "*", schema: "public", table: "comments" },
                (payload) => {
                    switch (payload.eventType) {
                        case "INSERT":
                            setComments((prev) => {
                                // Anti-duplicación: Solo añade si no existe ya
                                if (!prev.some(c => c.id === payload.new.id)) {
                                    if (!isInitialLoad.current) {
                                        setNewCommentsCount(c => c + 1);
                                    }
                                    return [...prev, payload.new];
                                }
                                return prev;
                            });
                            break;
                        case "UPDATE":
                            setComments((prev) =>
                                prev.map((c) => (c.id === payload.new.id ? payload.new : c))
                            );
                            break;
                        case "DELETE":
                            setComments((prev) => prev.filter((c) => c.id !== payload.old.id));
                            break;
                    }
                }
            );
        
        commentsChannel.subscribe(); 

        return () => {
            // Limpieza robusta del canal
            supabase.removeChannel(commentsChannel);
        };
    }, []);

    // ---------------------------------------------
    // --- EFECTO 2: SCROLL Y CONTROL DE CARGA ---
    // ---------------------------------------------
    useEffect(() => {
        isInitialLoad.current = false;

        // Evitar scroll en la primera carga
        if (!hasLoaded) {
            setHasLoaded(true);
            return; 
        }
        
        // Desplazarse al nuevo comentario si es necesario (el usuario hizo clic en "Ver nuevos")
        // Opcional: Se podría hacer scroll automático aquí, pero lo mantendremos manual para respetar tu diseño original.
    }, [comments]); 

    // ------------------- FUNCIONES ASÍNCRONAS -------------------

    async function fetchComments() {
        const { data, error } = await supabase
            .from("comments")
            .select("*")
            .order("created_at", { ascending: true }); 

        if (error) console.error(error);
        else setComments(data);
    }

    // --- AGREGAR COMENTARIO (Optimistic Update) ---
    async function handleSubmit(e) {
        e.preventDefault();
        const trimmedName = name.trim();
        const trimmedMessage = message.trim();

        if (!trimmedName || !trimmedMessage || isSubmitting) return;

        setIsSubmitting(true);
        
        // 1. Crear temporal para la UI
        const tempId = uuidv4();
        const tempComment = { 
            id: tempId, 
            name: trimmedName, 
            message: trimmedMessage, 
            created_at: new Date().toISOString(),
            is_temp: true 
        };

        // 2. Actualización Optimista
        setComments((prev) => [...prev, tempComment]);

        try {
            // 3. Insertar en DB
            const { data: insertedData, error } = await supabase
                .from("comments")
                .insert([{ name: trimmedName, message: trimmedMessage }])
                .select()
                .single();

            if (error) {
                console.error("Error al insertar comentario:", error);
                setComments(prev => prev.filter(c => c.id !== tempId)); // Revertir
            } else if (insertedData) {
                // 4. Reemplazar temporal con el dato real de la DB
                setComments(prev => 
                    prev.map(c => c.id === tempId ? insertedData : c)
                );
            }
            
            setName("");
            setMessage("");
        } finally {
             setIsSubmitting(false);
        }
    }

    // --- ELIMINAR COMENTARIO (Optimistic Update) ---
    async function handleDelete(id) {
        if (!confirm("¿Seguro que deseas eliminar este comentario?")) return;
        
        const commentToDelete = comments.find(c => c.id === id);
        if (!commentToDelete) return;
        
        // Actualización Optimista: Eliminar de la UI
        setComments(prev => prev.filter(c => c.id !== id));

        const { error } = await supabase
            .from("comments")
            .delete()
            .eq("id", id);
            
        if (error) {
             console.error(error);
             // Revertir si hay error
             setComments(prev => [...prev, commentToDelete].sort((a, b) => new Date(a.created_at) - new Date(b.created_at)));
        }
    }

    // --- EDITAR COMENTARIO ---
    function startEditing(comment) {
        setEditingId(comment.id);
        setEditMessage(comment.message);
    }

    async function saveEdit(id) {
        if (!editMessage.trim()) return;
        
        const originalComment = comments.find(c => c.id === id);
        if (!originalComment) return;

        const originalMessage = originalComment.message;
        
        // Actualización Optimista: Actualizar mensaje en la UI
        setComments(prev => 
            prev.map(c => c.id === id ? { ...c, message: editMessage } : c)
        );

        const { error } = await supabase
            .from("comments")
            .update({ message: editMessage })
            .eq("id", id);
            
        if (error) {
            console.error(error);
            // Revertir si hay error
            setComments(prev => 
                prev.map(c => c.id === id ? { ...c, message: originalMessage } : c)
            );
        }

        setEditingId(null);
        setEditMessage("");
    }

    const handleScrollToEnd = () => {
        if (commentsEndRef.current) {
            commentsEndRef.current.scrollIntoView({ behavior: "smooth" });
            setNewCommentsCount(0);
        }
    };


    // ------------------- RENDERIZADO -------------------
    return (
        <div className="flex-1 p-4 rounded-lg bg-blue-50 dark:bg-gray-800 shadow-md">
            <div className="mb-2 font-bold text-lg text-gray-900 dark:text-gray-100">
                Comentarios ({comments.length})
            </div>

            {newCommentsCount > 0 && (
                <div
                    className="bg-green-100 text-green-800 p-2 rounded-md mb-2 cursor-pointer hover:bg-green-200 transition"
                    onClick={handleScrollToEnd}
                >
                    {newCommentsCount} nuevo(s) comentario(s). Haz click para ver.
                </div>
            )}

            <form onSubmit={handleSubmit} className="mb-4 flex flex-col gap-2">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tu nombre"
                    className="border p-2 rounded-md dark:bg-gray-700 dark:text-gray-100"
                />
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Escribe tu comentario..."
                    className="border p-2 rounded-md dark:bg-gray-700 dark:text-gray-100"
                />
                <button
                    type="submit"
                    disabled={isSubmitting || !name.trim() || !message.trim()}
                    className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition disabled:opacity-50"
                >
                    {isSubmitting ? 'Enviando...' : 'Enviar'}
                </button>
            </form>

            <div 
                ref={commentsListRef} 
                className="comments-list flex flex-col gap-4 overflow-y-auto max-h-[400px]"
            >
                {comments.map((comment) => (
                    <div
                        key={comment.id}
                        className={`border p-4 rounded-lg shadow-sm hover:shadow-md transition bg-white dark:bg-gray-700 ${comment.is_temp ? 'opacity-50' : ''}`}
                    >
                        <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-lg">
                                {comment.name[0]?.toUpperCase() || 'U'}
                            </div>
                            <div className="flex-1">
                                <strong className={`text-green-700 dark:text-green-300 ${comment.is_temp ? 'italic' : ''}`}>
                                    {comment.name} {comment.is_temp ? '(Enviando...)' : ''}
                                </strong>

                                {/* Lógica de Edición */}
                                {editingId === comment.id ? (
                                    <div className="mt-2">
                                        <textarea
                                            value={editMessage}
                                            onChange={(e) => setEditMessage(e.target.value)}
                                            className="border p-2 rounded-md w-full dark:bg-gray-600 dark:text-white"
                                        />
                                        <div className="flex gap-2 mt-2">
                                            <button
                                                type="button"
                                                onClick={() => saveEdit(comment.id)}
                                                className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
                                            >
                                                Guardar
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setEditingId(null)}
                                                className="bg-gray-400 text-white px-3 py-1 rounded-md hover:bg-gray-500"
                                            >
                                                Cancelar
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <p className="mt-1 text-gray-800 dark:text-gray-200">{comment.message}</p>
                                )}

                                <small className="text-gray-500 dark:text-gray-400 mt-2 block">
                                    {new Date(comment.created_at).toLocaleString()}
                                </small>
                            </div>
                        </div>

                        {/* Botones de Editar/Eliminar (ocultos si es un comentario temporal) */}
                        {editingId !== comment.id && !comment.is_temp && (
                            <div className="flex gap-3 mt-3 justify-end">
                                <button
                                    type="button"
                                    onClick={() => startEditing(comment)}
                                    className="text-blue-500 hover:underline"
                                >
                                    Editar
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleDelete(comment.id)}
                                    className="text-red-500 hover:underline"
                                >
                                    Eliminar
                                </button>
                            </div>
                        )}
                    </div>
                ))}
                <div ref={commentsEndRef} />
            </div>
        </div>
    );
}