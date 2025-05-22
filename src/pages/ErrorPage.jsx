import { BsArrowReturnLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
export default function ErrorPage({
  errorCode,
  errorDescription,
  errorImage,
  errorColor,
}) {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col justify-between items-center min-h-screen bg-cover bg-center text-center px-4"
      style={{
        backgroundImage: `url(${errorImage})`,
      }}
    >
      <div className="pt-10">
        <h1 className="text-6xl font-bold mb-2" style={{ color: errorColor }}>
          {errorCode}
        </h1>
        <p className="text-lg mb-6" style={{ color: errorColor }}>
          {errorDescription}
        </p>
      </div>
      <div className="pb-30">
        <button
          onClick={() => navigate("/")}
          style={{
            backgroundColor: errorColor,
            color: "#ffffff", // atur warna teks putih agar kontras
          }}
          className="border px-6 py-2 rounded-full hover:opacity-80 transition flex items-center gap-2"
        >
          <BsArrowReturnLeft />
          Go Home
        </button>
      </div>
    </div>
  );
}
