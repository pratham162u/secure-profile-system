import { useEffect, useState } from "react";
import API from "../services/api";
import Lottie from "lottie-react";
import animation from "../animations/profile.json";

export default function Profile() {
  const [user, setUser] = useState({});

  useEffect(() => {
    API.get("/profile").then(res => setUser(res.data));
  }, []);

  return (
    <div className="container">
      <div className="lottie">
        <Lottie animationData={animation} loop />
      </div>
      <div className="card">
        <h2>User Profile</h2>
        <p><b>Name:</b> {user.name}</p>
        <p><b>Email:</b> {user.email}</p>
        <p><b>Aadhaar:</b> {user.aadhaar}</p>
      </div>
    </div>
  );
}
