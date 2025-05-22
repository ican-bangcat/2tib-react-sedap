import PageHeader from "../components/PageHeader";
import { BsArrowReturnLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col justify-between items-center min-h-screen bg-cover bg-center text-center px-4"
      style={{
        backgroundImage: "url('/img/404.png')",
      }}
    >
      {/* HEADER */}
      <div className="pt-10">
        <h1 className="text-5xl font-extrabold text-black">404</h1>
        <p className="text-2xl font-semibold text-black">Oops!</p>
      </div>

      {/* BUTTON */}
      <div className="pb-15">
        <button
          onClick={() => navigate("/")}
          className="border px-6 py-2 rounded-full bg-green-100 text-black hover:bg-green-200 transition flex items-center gap-2"
        >
          <BsArrowReturnLeft />
          Go Home
        </button>
      </div>
    </div>
  );
}
