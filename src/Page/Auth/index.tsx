import { Col, Image, Row } from "antd";
import React from "react";
import { Routes, Route } from "react-router-dom";
import logo from "../../Assets/logo.svg";
import LoginForm from "./LoginForm";
import ChangePass from "./ChangePass";
import ForgotPass from "./ForgotPass";
import illustrationLogin from "../../Assets/illustrationLogin.svg";
import styles from "../Auth/Login.module.scss";

const Login = () => {
  return (
    <Row style={{ height: "100vh" }}>
      <Col span={10} style={{ background: "#F6F6F6" }}>
        <div className={styles.logo}>
          <img src={logo} alt="Alta" />
        </div>
        <div className={styles.formContainer}>
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/change-password" element={<ChangePass />} />
            <Route path="/forgot-password" element={<ForgotPass />} />
          </Routes>
        </div>
      </Col>
      <Col span={14}>
        <div className={styles.image}>
          <img src={illustrationLogin} />
        </div>
      </Col>
    </Row>
  );
};

export default Login;
