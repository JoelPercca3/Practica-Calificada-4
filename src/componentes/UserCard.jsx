import React from 'react';

const UserCard = ({ name, username, email, imageUrl }) => (
  <div className="user-card">
    <img src={imageUrl} alt={name} />
    <div className="user-info">
      <h2>{name}</h2>
      <p>@{username}</p>
      <p>{email}</p>
    </div>
  </div>
);

export default UserCard;
