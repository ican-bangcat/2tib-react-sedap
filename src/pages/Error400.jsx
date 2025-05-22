import { BsArrowReturnLeft } from "react-icons/bs"; 
// src/pages/Error404.jsx
import { useNavigate } from "react-router-dom";

export default function Error400() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center">
            <h1 className="text-6xl font-bold text-red-600 mb-2">400</h1>
            <p className="text-lg text-gray-600 mb-6">Unauthorized. What are you doing here?!</p>
            <div
                className="w-[200px] h-[200px] bg-no-repeat bg-contain bg-center mb-6"
                style={{
                    backgroundImage: "url('./public/img/400.png')"
                }}
            ></div>
            <button
                onClick={() => navigate("/")}
                className="border px-4 py-2 rounded-full hover:bg-gray-100 transition"
            >
              <div className="flex items-center gap-2">
                    <BsArrowReturnLeft />
                    Go Home
                </div>
            </button>
        </div>
    );
}
