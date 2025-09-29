import { useState, useEffect, useRef } from "react";
import { supabase } from "../lib/supabaseClient";

export default function Comments() {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [newCommentsCount, setNewCommentsCount] = useState(0);
  const commentsEndRef = useRef(null);
  const isInitialLoad = useRef(true);

  useEffect(() => {
    fetchComments();

    const subscription = supabase
      .channel("public:comments")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "comments" },
        (payload) => {
          setComments((current) => [payload.new, ...current]);
          if (!isInitialLoad.current) setNewCommentsCount((prev) => prev + 1);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(subscription);
    };
  }, []);

  useEffect(() => {
    isInitialLoad.current = false;

    if (commentsEndRef.current) {
      commentsEndRef.current.scrollIntoView({ behavior: "smooth" });
      setNewCommentsCount(0);
    }
  }, [comments]);

  async function fetchComments() {
    const { data, error } = await supabase
      .from("comments")
      .select("*")
      .order("created_at", { ascending: true });

    if (error) console.error(error);
    else setComments(data);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!name || !message) return;

    const { error } = await supabase.from("comments").insert([{ name, message }]);
    if (error) console.error(error);

    setName("");
    setMessage("");
  }

  const handleScrollToEnd = () => {
    commentsEndRef.current.scrollIntoView({ behavior: "smooth" });
    setNewCommentsCount(0);
  };

  return (
    <div className="comments-section max-w-xl mx-auto p-4 flex flex-col">
      <div className="mb-2 font-bold text-lg">
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
          className="border p-2 rounded-md"
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Escribe tu comentario..."
          className="border p-2 rounded-md"
        />
        <button
          type="submit"
          className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition"
        >
          Enviar
        </button>
      </form>

      <div className="comments-list flex flex-col gap-4 overflow-y-auto max-h-[400px]">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="border p-4 rounded-lg shadow-sm hover:shadow-md transition bg-white dark:bg-gray-700 flex items-start gap-3"
          >
            {/* Avatar con iniciales */}
            <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-lg">
              {comment.name[0].toUpperCase()}
            </div>

            <div className="flex-1">
              <strong className="text-green-700 dark:text-green-300">{comment.name}</strong>
              <p className="mt-1 text-gray-800 dark:text-gray-200">{comment.message}</p>
              <small className="text-gray-500 dark:text-gray-400 mt-2 block">
                {new Date(comment.created_at).toLocaleString()}
              </small>
            </div>
          </div>
        ))}
        <div ref={commentsEndRef} />
      </div>
    </div>
  );
}
