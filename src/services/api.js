import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:2656",
    timeout: 2000
});

apiClient.interceptors.request.use((config) => {
        const token = localStorage.getItem("token");
        if (token) config.headers.Authorization = token
        return config;
    },
    err => Promise.reject(err)
);

export const loginRequest = async (params) => {
    try {
        return await apiClient.post("/user/login", params)
    } catch (error) {
        console.error(error);
        return { error: true, error }
    }
}