import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/auth";

export default function Login() {
  const nav = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    try {
      const res = await login({ username, password });

      if (res.success) {
        localStorage.setItem("token", res.token);
        localStorage.setItem("role", res.role);
        nav("/dashboard");
      } else {
        alert("Invalid credentials");
      }
    } catch (e) {
      alert("Login error");
    }
  }

  return (
    <div className="login-container">
      <h2>Login</h2>

      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
