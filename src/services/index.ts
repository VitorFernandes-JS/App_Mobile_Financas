import axios from "axios";

const { IS_PRODUCTION, IP_CASA_RAFA, IP_CASA_VITOR } = process.env;
// const production = false
const ip_casa_rafa = "http://192.168.0.30:3335"
const ip_casa_vitor = "http://192.168.0.208:3335"
const ip_casa_rafa_pc = "http://192.168.0.11:3335"
const ip_ifsp = "https://612a-2804-14c-bf26-4441-b92e-240e-b736-921d.sa.ngrok.io"

// const url = IS_PRODUCTION === "true" ? "https://bestfinance.herokuapp.com" : ip_casa_rafa;

const url = ip_ifsp

const apiFinances = axios.create({
    baseURL: url,
    headers: { "Content-Type": "application/json" },
});

export { apiFinances };