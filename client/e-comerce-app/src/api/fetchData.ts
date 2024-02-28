import axios from "axios";
import API_URL from "./config";

type fetchProps = {
  tableName: string;
  filterKey?: string;
  filterValue?: any;
}

/**
 * Makes a call to fetch data from a specific table and if needed with a filter value
 * 
 * @param tableName Table name of data to fetch 
 * @param filterKey Key to filter data 
 * @param filterValue Value to filter data 
 * @returns 
 */
async function fetchData({ tableName, filterKey, filterValue }: fetchProps) {
  if (filterValue && filterKey) {
    return await axios.get(`${API_URL}/${tableName}`, {
      headers: {
        "Authorization": `Bearer${localStorage.getItem("authToken")}`
      },
      params: {
        filterKey,
        filterValue
      }
    })
  }
  return await axios.get(`${API_URL}/${tableName}`, {
    headers: {
      "Authorization": `Bearer${localStorage.getItem("authToken")}`
    },
  })
}

export default fetchData;