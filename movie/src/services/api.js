import axios from "axios";
const token ="eyJhbGci0i31UzI1N139.eyJhdwQio1JmNzkxZTQ1NGNINjgzZTQ5NTIzM2RIZTgWYJM20DVKOCIsInNiYiI6IjY2I2MmQxV211Vzh1NjQ2ZTIxZGU1MyIsInNjb381cyI6wyJhc61fcmVhZCJdi,C32ZXJzaW9uIjoxfQ.FwsMq_5831MVZgU35a0MbwnYQKEHb33_1tQpPVP514";
export default axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        Authorization: `Bearer ${token}`
    }
})