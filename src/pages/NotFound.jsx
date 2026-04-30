import { useNavigate } from "react-router";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center px-4 text-center">
      <h1 className="font-display text-8xl font-bold mb-4 text-[#1e3a2f]">404</h1>
      <p className="text-xl font-semibold text-base-content mb-2">Page Not Found</p>
      <p className="text-base-content/50 mb-8 max-w-sm">
        Looks like this page doesn't exist. Maybe a friend hid it?
      </p>
      <button
        onClick={() => navigate("/")}
        className="btn bg-[#1e3a2f] text-white border-[#1e3a2f] hover:bg-[#2d5a43] hover:border-[#2d5a43]"
      >
        Go Home
      </button>
    </div>
  );
}