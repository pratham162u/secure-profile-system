import { useState } from "react";
import API from "../services/api";
import Lottie from "lottie-react";
import animation from "../animations/login.json";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = async () => {
    try {
      const res = await API.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      navigate("/profile");
    } catch {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="container">
      <div className="lottie">
        <Lottie animationData={animation} loop />
      </div>
      <div className="card">
        <h2>Secure Login</h2>
        <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
        <button onClick={submit}>Login</button>
        <p onClick={() => navigate("/register")}>Create Account</p>
      </div>
    </div>
  );
}
