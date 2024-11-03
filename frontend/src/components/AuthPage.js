import React, { useState } from 'react';
import UserLogin from './UserLogin';
import UserRegistration from './UserRegistration';

const AuthPage = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegistrationSuccess = () => {
    setIsRegistered(true);
  };

  return (
    <div>
      {isRegistered ? (
        <UserLogin />
      ) : (
        <UserRegistration onRegisterSuccess={handleRegistrationSuccess} />
      )}
    </div>
  );
};

export default AuthPage;
