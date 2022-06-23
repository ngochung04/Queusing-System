import React, { useEffect } from "react";
import "./loginpage.scss";
import Banner from "../../Components/Banner/Banner";
import { Outlet, useNavigate } from "react-router";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/login");
  }, []);

  return (
    <div className="app__login-page">
      <Outlet />
      <Banner />
    </div>
  );
};

export default LoginPage;
