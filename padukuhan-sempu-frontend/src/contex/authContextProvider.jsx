import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
// Create the AuthContext
const AuthContext = createContext();

// Create the AuthContextProvider component
const AuthContextProvider = ({ children }) => {
  // Define the state variables for authentication
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  // Define the login function
  const login = async (inputs) => {
    // Perform login logic
    const res = await axios.post("http://localhost:5000/login", inputs, {
      withCredentials: true,
    });

    setToken(res.data);
  };

  // Define the logout function
  const logout = () => {
    // Perform logout logic
    // Reset the user data and isLoggedIn state
    setUser(null);
  };

  // Create the context value object
  const authContextValue = {
    token,
    login,
    logout,
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(token));
  }, [token]);

  // Provide the context value to the child components
  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
