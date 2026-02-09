import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import LoginMain from "../Component/LoginMain";
import "../style/login.css"
const LoginPage = () => {
  return (
    <div className="Register login-page-container d-flex ">
            {/* <Login /> */}
            <LoginMain />
    </div>
  );
};

export default LoginPage;
