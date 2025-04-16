import React, { useState } from "react";
import "./Login.css";
import user_icon from "../Assets/person.png";
import password_icon from "../Assets/password.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //kt dang nhap
    if (email === "user@example.com" && password === "password123") {
      alert("Đăng nhập thành công!");
    } else {
      alert("Sai thông tin đăng nhập!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Đăng nhập</h2>
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="input-group">
            <img src={user_icon} alt="user" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* Password*/}
          <div className="input-group">
            <img src={password_icon} alt="password" />
            <input
              type="password"
              placeholder="Mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="login-button">
            Đăng nhập
          </button>
        </form>
        <div className="signup-link">
          <span>Chưa có tài khoản? </span>
          <a href="./signup">Đăng ký</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
