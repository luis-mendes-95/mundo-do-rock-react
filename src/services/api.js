import axios from "axios";

const api = axios.create({
    baseUrl: "https://kenziehub.herokuapp.com",
    timeout: 5000
})

export default api