/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps */

import { loginUser, refreshTokenAPI } from "@/services/authService";
import { User } from "@/types";
import Cookies from "js-cookie";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const tryRefreshToken = async () => {
    try {
      const data = await refreshTokenAPI();
      Cookies.set("accessToken", data.Token, {
        secure: true,
        sameSite: "Strict",
      });
      Cookies.set("refreshToken", data.RefreshToken, {
        expires: 7,
        secure: true,
        sameSite: "Strict",
      });
      Cookies.set("user", JSON.stringify(data.User));
      setUser(data.User);
      return true;
    } catch (err) {
      console.error("Token refresh failed:", err);
      logout();
      return false;
    }
  };

  useEffect(() => {
    const initAuth = async () => {
      setIsLoading(true);
      const token = Cookies.get("accessToken");
      const userData = Cookies.get("user");

      if (token && userData) {
        try {
          setUser(JSON.parse(userData));
        } catch (e) {
          console.error("Error parsing user data:", e);
          await tryRefreshToken();
        }
      } else if (Cookies.get("refreshToken")) {
        await tryRefreshToken();
      }

      setIsLoading(false);
    };

    initAuth();
  }, []);

  const login = async (username: string, password: string) => {
    setIsLoading(true);
    try {
      const response = await loginUser(username, password);

      Cookies.set("accessToken", response.Token, {
        expires: 1,
        secure: true,
        sameSite: "Strict",
      });

      Cookies.set("refreshToken", response.RefreshToken, {
        expires: 7,
        secure: true,
        sameSite: "Strict",
      });

      Cookies.set("user", JSON.stringify(response.User));

      setUser(response.User);

      return response;
    } catch (error) {
      console.error("Login error in context:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
    Cookies.remove("user");

    setUser(null);

    navigate("/login", { replace: true });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated: !!user,
        isLoading,
      }}
    >
      {!isLoading ? children : <div>Loading authentication...</div>}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
