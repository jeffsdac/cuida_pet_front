import axios from "axios";

const BASE_URL = "http://localhost:8080"

export async function getLogin(email) {
  const resp = await axios.post(`${BASE_URL}/api/usuario/login`, {email})
  return {
    email: resp.data.email,
    status: resp.status
  }
}