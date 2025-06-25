import Background from "@/assets/background.jpeg";
import axios from "axios";
import { useState, type ChangeEvent } from "react";
import { FaGoogle } from "react-icons/fa";
import useStore from "../store";

interface IUser {
  name: string;
  email: string;
  password: string;
}

export default function Register() {
  const [user, setUser] = useState<IUser>({
    name: "",
    email: "",
    password: "",
  });

  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const { setUserId, setLoading, setError, loading } = useStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = async () => {
    if (!user.name || !user.email || !user.password) {
      alert("Please fill in all fields");
      return;
    }

    if (user.password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        user
      );

      if (response.data) {
        setUserId(response.data._id);
        window.location.replace("/dashboard")
      }
    } catch (error) {
      setError("Registratsiyadan o'tishda muammo chiqdi");
    }
  };

  return (
    <div
      className="flex items-center text-white justify-center h-screen w-screen"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}
        className="flex flex-col gap-2 p-5 border border-gray-300 rounded w-[400px]"
      >
        <input
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Name"
          className="p-2 border border-gray-300 w-full rounded"
        />
        <input
          type="text"
          name="email"
          onChange={handleChange}
          placeholder="Email"
          className="p-2 border border-gray-300 w-full rounded"
        />
        <input
          type="text"
          name="password"
          onChange={handleChange}
          placeholder="Password"
          className="p-2 border border-gray-300 w-full rounded"
        />
        <input
          type="text"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setConfirmPassword(e.target.value)
          }
          placeholder="Confirm Password"
          className="p-2 border border-gray-300 w-full rounded"
        />
        <div className="flex justify-between items-center flex-col w-full gap-2">
          <button
            onClick={handleRegister}
            className={`p-2 bg-red-400 rounded-[10px] cursor-pointer text-white w-full ${loading && "cursor-not-allowed" }`}
          >
            {loading ? <span className="loader"></span> : "Register"}
          </button>
          <button
            onClick={() =>
              window.location.replace("http://localhost:5000/auth/google")
            }
            className="p-2 bg-blue-500 rounded-[10px] cursor-pointer text-white w-full flex items-center justify-center gap-2"
          >
            <FaGoogle className="text-2xl text-white" />
            <span>With Google</span>
          </button>
        </div>
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
}
