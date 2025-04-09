import axios from "axios";
const local = 'https://backend-api-ecommerce-bzq5.onrender.com'
const production = 'https://backend-api-ecommerce-bzq5.onrender.com'

let api_url = ''
let mode = 'pro'

if (mode === 'pro') {
    api_url = production
} else {
    api_url = local
}


const api = axios.create({
    baseURL : `${api_url}/api`
})

export default api