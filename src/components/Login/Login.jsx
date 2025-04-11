import React from "react";
import "./Login.css";
import zalo_icon from "../Assets/zalo.png";
import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
const Login = () => {
  return (
    <div className=" container">
      <div className="header">
        <div className="text">Đăng nhập</div>
        <div className="underline"></div>
      </div>
      {/*  */}
      <div className="inputs">
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="text" placeholder="Email" />
        </div>
        <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder="So Dien thoai" />
        </div>
        {/* //password */}
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Mat khau" />
        </div>
        <div className="click-Login">
          <button className="onclick">Dang nhap</button>
        </div>
        <div className="forgot">
          <div className="signup">
            Chưa có tài khoản?
            <a href="">Đăng ký</a>
          </div>
          <div className="forgot-password">
            <a href="#">Quen mat khau</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
