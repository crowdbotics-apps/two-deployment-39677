import axios from "axios"
const weatherconnector = axios.create({
  baseURL: "http://api.weatherapi.com/v1",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function weatherconnector_get_currentjson_read(payload) {
  return weatherconnector.get(`/current.json`)
}
export const apiService = { weatherconnector_get_currentjson_read }
