import React from "react";
import styled from "styled-components";

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8d7da;
  color: #721c24;
  font-family: Arial, sans-serif;
`;

const ErrorTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const ErrorMessage = styled.p`
  font-size: 1.2rem;
`;

const Error = () => {
  return (
    <ErrorContainer>
      <ErrorTitle>Page Not Found - 404</ErrorTitle>
      <ErrorMessage>
        The page you are looking for might have been removed or doesn't exist.
      </ErrorMessage>
    </ErrorContainer>
  );
};

export default Error;
