import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., authenticate the user)
    alert(`Logged in as ${email}`);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-lg font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg text-black"
              required
            />
          </div>
          <div>
            <label
              className="block text-lg font-medium mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg text-black"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-600"
          >
            Login
          </button>
        </form>
        {/* <p className="mt-4 text-center text-sm">
          Don't have an account?{" "}
          <a href="/register" className="text-indigo-500 hover:underline">
            Sign up
          </a>
        </p> */}
      </div>
    </div>
  );
};

export default Login;
