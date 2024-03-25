import API_URL from "../config";
import axios from "axios";

type props = {
  email: string;
  password: string;
}

async function loginUser({ email, password }: props) {
  // return axios.post(`${API_URL}/users/login`, { email, password })
  return axios.post(`${API_URL}/auth/login`, { email, password })
}

export default loginUser;