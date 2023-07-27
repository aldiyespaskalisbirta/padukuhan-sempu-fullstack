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
    try {
      const res = await axios.post("http://localhost:5000/login", inputs, {
        withCredentials: true,
      });
      console.log(res.data);
      setToken(res.data.accessToken);
      return { status: 200 };
    } catch (err) {
      return {
        status: err.response.status,
        message: err.response.data.message,
      };
    }
  };

  // Define the logout function
  const logout = async () => {
    // Perform logout logic
    await axios.post("http://localhost:5000/logout");
    // Reset the user data and isLoggedIn state
    setToken(null);
    localStorage.removeItem("user");
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
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
