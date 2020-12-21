import axios from "axios";

const instance = axios.create({
    baseURL: "https://whatsappp88.herokuapp.com",
});

export default instance;