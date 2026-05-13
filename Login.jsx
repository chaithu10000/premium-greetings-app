
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../store/useUserStore";

export default function Login() {
  const navigate = useNavigate();
  const setUser = useUserStore((s) => s.setUser);

  const handleGoogle = async () => {
    const result = await signInWithPopup(auth, googleProvider);

    const userData = {
      name: result.user.displayName,
      photo: result.user.photoURL
    };

    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));

    navigate("/dashboard");
  };

  const handleGuest = () => {
    const guest = {
      name: "Guest User",
      photo: "https://i.pravatar.cc/150?img=12"
    };

    setUser(guest);
    localStorage.setItem("user", JSON.stringify(guest));

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-[400px]">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Greetings App
        </h1>

        <button
          onClick={handleGoogle}
          className="w-full bg-blue-600 text-white py-3 rounded-xl mb-4"
        >
          Continue with Google
        </button>

        <button
          onClick={handleGuest}
          className="w-full border py-3 rounded-xl"
        >
          Continue as Guest
        </button>
      </div>
    </div>
  );
}
