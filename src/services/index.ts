import { API_KEY, endpoint, country } from '../../config';
import axios from "axios";

export async function services(category = 'general') {
    let articles = await fetch(`${endpoint}?country=${country}&category=${category}`, {
        headers: {
            'X-API-KEY': API_KEY
        }
    });

    let result = await articles.json();
    // articles = null;

    return result.articles;
}

const { IS_PRODUCTION, IP_CASA_RAFA, IP_CASA_VITOR } = process.env;
// const production = false

const ips = {
    ip_casa_rafa: "http://192.168.0.30:3335",
    ip_casa_vitor: "http://192.168.0.208:3335",
    ip_casa_rafa_pc: "http://192.168.0.11:3335",
    ip_ifsp: "https://edc3-200-133-203-105.sa.ngrok.io",
    ip_isa: "http://192.168.0.23:3335"
}

// const url = IS_PRODUCTION === "true" ? "https://bestfinance.herokuapp.com" : ip_casa_rafa;

const url = ips.ip_isa;

const apiFinances = axios.create({
    baseURL: url,
    headers: { "Content-Type": "application/json" },
});

export { apiFinances };