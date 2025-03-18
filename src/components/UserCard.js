import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  margin-bottom: 16px;
`;

const UserCard = ({ user, onClick }) => {
  return (
    <Card onClick={onClick}>
      <Avatar src={user.avatar} alt={user.first_name} />
      <h3>
        {user.first_name} {user.last_name}
      </h3>
      <p>{user.email}</p>
    </Card>
  );
};

export default UserCard;
