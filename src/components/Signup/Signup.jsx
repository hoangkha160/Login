import React, { useState } from "react";
import "./Signup.scss";
import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Mật khẩu xác nhận không khớp!");
    } else {
      alert("Đăng ký thành công!");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Đăng Ký</h2>
        <form onSubmit={handleSubmit}>
          {/* T */}
          <div className="input-group">
            <img src={user_icon} alt="user" />
            <input
              type="text"
              placeholder="Ten dang nhap"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Email */}
          <div className="input-group">
            <img src={email_icon} alt="email" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/*Mat khau*/}
          <div className="input-group">
            <img src={password_icon} alt="password" />
            <input
              type="password"
              placeholder="Mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Mat khau lan 2 */}
          <div className="input-group">
            <img src={password_icon} alt="password" />
            <input
              type="password"
              placeholder="Xac nhan lai mat khau"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="signup-button">
            Đăng ký
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
