import axios from "axios";
import Cookies from "js-cookie";

const API = import.meta.env.VITE_BASE_API_URL;

export const getMaterials = async (skip = 0, limit = 20) => {
  const token = Cookies.get("accessToken");
  const filter = {
    Skip: skip,
    Limit: limit,
    Types: [1],
  };
  const base64 = btoa(JSON.stringify(filter));
  const res = await axios.get(`${API}/Materials/GetAll/?q=${base64}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
