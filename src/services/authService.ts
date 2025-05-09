import axios from "axios";
import Cookies from "js-cookie";

const baseApi = "https://sugarytestapi.azurewebsites.net"; //import.meta.env.VITE_BASE_API_URL;

export const loginUser = async (UserName: string, Password: string) => {
  const res = await axios.post(`${baseApi}/AdminAccount/Login`, {
    UserName,
    Password,
  });
  return res.data;
};

export const refreshTokenAPI = async () => {
  const accessToken = Cookies.get("accessToken");
  const refreshToken = Cookies.get("refreshToken");
  const res = await axios.post(`${baseApi}/Account/RefreshToken`, {
    AccessToken: accessToken,
    RefreshToken: refreshToken,
  });
  return res.data;
};
