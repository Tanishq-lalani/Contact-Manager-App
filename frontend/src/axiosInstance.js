import axios from "axios";
import { useNavigate } from "react-router-dom";

const token = localStorage.getItem("token")


const axiosInstance = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        Authorization: token ? `Bearer ${token}`: "",
    }
})



axiosInstance.interceptors.response.use(
    (response) => response,
    (error) =>{
        if(error.response?.status === 401 ) {
            localStorage.removeItem("token");
            window.location.href = "/login";

        }
        return Promise.reject(error)
    }
)

export default axiosInstance;