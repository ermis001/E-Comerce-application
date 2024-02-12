let API_URL: string = "";

if (import.meta.env.MODE === "production") {
  API_URL = `http://someDomainAddress`;
} else {
  API_URL = `http://localhost:8000`;
}

export default API_URL;
