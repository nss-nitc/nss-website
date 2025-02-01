"use client";
import { useState } from "react";

export default function AdminLogin() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (!userId.trim() || !password.trim()) {
      setError("User ID and password are required.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    setError(""); 
    console.log("User ID:", userId, "Password:", password);

  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#FEF4F4]">
      <div className="bg-[#C67979] p-8 rounded-md shadow-md w-80">
        <h2 className="text-white text-center text-lg font-bold mb-4 bg-[#8D5555] py-2 rounded font-poppins">
          ADMIN LOGIN
        </h2>
        {error && <p className="text-white bg-red-500 text-center p-2 rounded mb-3">{error}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="text"
            placeholder="user id"
            className="p-2 mb-4 bg-white rounded focus:outline-none"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            className="p-2 mb-4 bg-white rounded focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-28 h-12 bg-[#8D5555] text-white font-poppins p-2 rounded mx-auto text-center hover:bg-[#5A3A35] transition"
          >
            login
          </button>
        </form>
      </div>
    </div>
  );
}