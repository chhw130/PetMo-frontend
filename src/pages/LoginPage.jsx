import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { Navigate } from "react-router-dom";
import { PageHeader } from "../components";
import { Wrapper } from "../styled";
import { authenticated } from "../store";
import LoginForm from "../components/login/LoginForm";

function LoginPage() {
  const [isAuthenticated, setIsAuthenticated] = useRecoilState(authenticated);
  if (isAuthenticated) {
    return <Navigate to={"../"} />;
  }

  return (
    <Wrapper>
      <PageHeader pageTitle="로그인" />
      <LoginForm setIsAuthenticated={setIsAuthenticated} />
      <Link to="../join">회원가입</Link>
    </Wrapper>
  );
}

export default LoginPage;
