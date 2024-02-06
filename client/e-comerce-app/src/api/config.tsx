let API_URL: string = "";

if (import.meta.env.MODE === "production") {
  API_URL = `http://someDomainAddress/api`;
} else {
  API_URL = `http://localhost:8000/api`;
}

export default API_URL;
