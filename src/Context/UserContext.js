const { createContext, useState } = require('react');



const UserContext = createContext();

const UserProvider = ({ children }) => {
  const currentUser = getUser();
}