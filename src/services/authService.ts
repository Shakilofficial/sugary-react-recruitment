import Cookies from "js-cookie";
import { axiosInstance } from "./axiosInstance";

export const loginUser = async (UserName: string, Password: string) => {
  const res = await axiosInstance.post("/AdminAccount/Login", {
    UserName,
    Password,
  });
  return res.data;
};

export const refreshTokenAPI = async () => {
  const accessToken = Cookies.get("accessToken");
  const refreshToken = Cookies.get("refreshToken");

  const res = await axiosInstance.post("/Account/RefreshToken", {
    AccessToken: accessToken,
    RefreshToken: refreshToken,
  });

  return res.data;
};
