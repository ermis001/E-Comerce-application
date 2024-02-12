import axios from "axios";
import API_URL from "./config";

type props = {
  tableName: string;
}

async function fetchData({ tableName }: props) {
  return await axios.get(`${API_URL}/${tableName}`)
}

export default fetchData;