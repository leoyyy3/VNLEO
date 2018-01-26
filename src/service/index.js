import axios from "../config/afetch"

export const sendMes = (params) => axios.post("/api/restapi/eus/login/mobile_send_code",params)
