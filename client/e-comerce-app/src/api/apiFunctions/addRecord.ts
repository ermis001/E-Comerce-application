import axios from "axios";
import API_URL from "../config";

type props = {
  tableName: string;
  data: object;
};

async function addRecords({ tableName, data }: props) {
  return axios.post(`${API_URL}/${tableName}/register`, data)
}

export default addRecords;