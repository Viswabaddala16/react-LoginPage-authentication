import React, { useEffect, useState } from 'react';
import '../profile.css';

function Profile({ user, handleLogout }) {
  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    async function fetchProfile() {
      const response = await fetch(`https://dummyjson.com/users/${user.id}`);
      const userData = await response.json();
      setProfileData(userData);
    }

    fetchProfile();
  }, [user]);

  return (
    <div className='profile-image' style={{backgroundImage : `url(${profileData.image})`,
    backgroundSize: "300px 350px",
    backgroundPosition: 'top right'}}>
      <h1>Profile Page</h1>
      <div className='resize details-container'>
        <p>Username: {profileData.username}</p>
        <p>First Name: {profileData.firstName}</p>
        <p>Last Name: {profileData.lastName}</p>
        <p>Email: {profileData.email}</p>
       
      </div>
      <button onClick={handleLogout}
      className='btn'>Log Out</button>
    </div>
  );
}

export default Profile;
