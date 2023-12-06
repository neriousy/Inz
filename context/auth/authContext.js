import React, { createContext, useReducer } from "react";
import { authReducer } from "./reducer";
import { useContext } from "react";
import { API_URL } from "../../constants/api";
import { useEffect } from "react";
import { getCharacteristics, getUserInfo } from "./utils";
import { useState } from "react";

const initialState = {
  user: null,
  error: null,
  isLoading: false,
};

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email, password) => {
    try {
      const response = await fetch(API_URL + "auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        dispatch({ type: "LOGIN_SUCCESS", payload: data });
        return "OK";
      } else {
        dispatch({ type: "LOGIN_ERROR", payload: data.message });
        return "ERROR";
      }
    } catch (error) {
      dispatch({ type: "LOGIN_ERROR", payload: error.message });
      return "ERROR";
    }
  };

  useEffect(() => {
    if (state.user) {
      setIsLoading(true);
      getUserInfo(state.user).then((data) => {
        if (data) {
          console.log("userinfo", data);
          dispatch({ type: "USER_INFO", payload: data });
          getCharacteristics(data.userId, state.user).then(
            (characteristics) => {
              console.log("characteristics", characteristics);
              dispatch({
                type: "USER_CHARACTERISTICS",
                payload: characteristics,
              });
            }
          );
        } else {
          dispatch({ type: "LOGOUT" });
        }
      });
    }
  }, [state.user]);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  console.log(state);

  return (
    <AuthContext.Provider value={{ state, login, logout, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error("useAuthContext must be inside an AuthContextProvider");
  }

  return context;
};
