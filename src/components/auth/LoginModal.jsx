// src/components/auth/LoginModal.jsx
import Login from './Login'; // Importa el formulario

export default function LoginModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        // 1. Fondo oscuro con z-index alto
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            
            {/* 2. VENTANA del Modal (debe tener un fondo) */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl relative w-full max-w-md">
                
                {/* Botón para cerrar */}
                <button 
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 hover:text-gray-900 text-2xl"
                >
                    &times;
                </button>
                
                {/* 3. Renderiza el formulario de Login */}
                <Login /> 
            </div>
        </div>
    );
}