import React from 'react';
import { useSelector } from 'react-redux';

const UserAvatar = () => {
  const user = useSelector((state) => state.auth.user); 

  if (!user) {
    return null; 
  }

  return (
    <div className="user-avatar">
      <img src={user.profilePicture} alt={user.name} className="navbar-avatar" />
      <span>{user.name}</span>
    </div>
  );
};

export default UserAvatar;