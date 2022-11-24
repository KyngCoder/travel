

import React from 'react';
import { Navigate } from 'react-router-dom';


const Admin = ({ children }) => {
  const password = prompt('enter password')

  if (!password) {
    alert('wrong password')
    return <Navigate to='/' />;
  }
  return children;
};

export default Admin;