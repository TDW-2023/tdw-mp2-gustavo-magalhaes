import React from "react";
import Navbar from './NavBar';
import styled from 'styled-components';

const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #333;
  text-align: center;
`;

const NotFoundTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const NotFoundText = styled.p`
  font-size: 1.2rem;
`;

function NotFound() {
  return (
    <div
      style={{
        backgroundColor: "#C8C8A9",
        minHeight: "100vh",
        paddingTop: "13.5vh",
      }}
    >
      <Navbar />
      <NotFoundWrapper>
        <NotFoundTitle>Page Not Found</NotFoundTitle>
        <h1><h1>404</h1></h1>
        <NotFoundText>Sorry, but the page you are looking for does not exist.</NotFoundText>
      </NotFoundWrapper>
    </div>
  );
}

export default NotFound;