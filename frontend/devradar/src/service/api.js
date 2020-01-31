import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:2300"
})

export default api;