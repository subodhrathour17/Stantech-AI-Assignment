import React from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 90%;
  max-width: 400px;
`;

const CloseButton = styled.button`
  background-color: #d9534f;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #c9302c;
  }
`;

const UserModal = ({ user, onClose }) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <h2>
          {user.first_name} {user.last_name}
        </h2>
        <p>Email: {user.email}</p>
        <img
          src={user.avatar}
          alt={user.first_name}
          style={{ borderRadius: "50%", width: "100px" }}
        />
        <br />
        <br />
        <CloseButton onClick={onClose}>Close</CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default UserModal;
