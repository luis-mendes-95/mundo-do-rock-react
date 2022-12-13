import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [loading, setLoading] = useState()


  useEffect(()=>{
    const loggedInUser = localStorage.getItem("@MundoDoRockUser")

    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser))
      navigate("/dashboard")
    }
  }, [])

  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [database, setDatabase] = useState(null);

  const login = async (data) => {
    return data
    /*try {
      const response = await api.post("sessions", data);
      setUser(response.data.user)
      localStorage.setItem("@MundoDoRockUser", JSON.stringify(response.data.user))

      return response;
    } catch (error) {
      return error;
    }*/
  };

  const logout = (data) => {
    //setUser(null)
    //localStorage.removeItem("@MundoDoRockUser")
    //navigate("/")
  }

  const register_user = (data) => {
    setDatabase(data)
    return "I am the fuckin register"
  }

  const edit_item = (data) => {
    setDatabase(data)
    return "I am the fuckin edit"
  }

  const delete_item = (data) => {
    setDatabase(data)
    return "I am the fuckin delete"
  }



  return (
    <AuthContext.Provider
      value={{
        authenticated: !!user,
        user,
        loading,
        login,
        logout,
        register_user,
        edit_item,
        delete_item
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
