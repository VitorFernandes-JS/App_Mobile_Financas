import axios from "axios";

const { IS_PRODUCTION } = process.env;

const url = IS_PRODUCTION === "true" ? "https://bestfinance.herokuapp.com" : "http://192.168.0.30:3335";

const apiFinances = axios.create({
    baseURL: url,
    headers: {"Content-Type": "application/json"},
});

export { apiFinances };