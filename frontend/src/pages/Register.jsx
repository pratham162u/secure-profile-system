import { useState } from "react";
import API from "../services/api";
import Lottie from "lottie-react";
import animation from "../animations/register.json";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const submit = async () => {
    try {
      await API.post("/auth/register", form);
      navigate("/");
    } catch {
      alert("Registration failed");
    }
  };

  return (
    <div className="container">
      <div className="lottie">
        <Lottie animationData={animation} loop />
      </div>
      <div className="card">
        <h2>Create Account</h2>
        <input placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
        <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
        <input placeholder="Aadhaar" onChange={e => setForm({ ...form, aadhaar: e.target.value })} />
        <input type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
        <button onClick={submit}>Register</button>
      </div>
    </div>
  );
}
