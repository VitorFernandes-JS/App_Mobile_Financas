import axios from "axios";

const { IS_PRODUCTION, IP_CASA_RAFA, IP_CASA_VITOR } = process.env;
// const production = false


const ips = {
    ip_casa_rafa: "http://192.168.0.30:3335",
    ip_casa_vitor: "http://192.168.0.208:3335",
    ip_casa_rafa_pc: "http://192.168.0.11:3335",
    ip_ifsp: "https://edc3-200-133-203-105.sa.ngrok.io"
}

// const url = IS_PRODUCTION === "true" ? "https://bestfinance.herokuapp.com" : ip_casa_rafa;

const url = ips.ip_casa_vitor

const apiFinances = axios.create({
    baseURL: url,
    headers: { "Content-Type": "application/json" },
});

export { apiFinances };