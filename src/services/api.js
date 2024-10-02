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

/* CRUD DE USUARIOS */
export const addUserRequest = async (params) => {
    try {
        return await apiClient.post("/user/addUser", params)
    } catch (error) {
        console.error(error);
        return { error: true, error }
    }
}

export const getUsersRequest = async () => {
    try {
        return await apiClient.get("/user/getUsers")
    } catch (error) {
        console.error(error);
        return { error: true, error }
    }
}

export const updateUserRequest = async (params, id) => {
    try {
        return await apiClient.put(`/user/updateUser/${id}`, params)
    } catch (error) {
        console.error(error);
        return { error: true, error }
    }
}

export const deleteUserRequest = async (id) => {
    try {
        return await apiClient.delete(`/user/deleteUser/${id}`)
    } catch (error) {
        console.error(error);
        return { error: true, error }
    }
}

// CRUD DE GERENCIAS

export const getManagementsRequest = async () => {
    try {
        return await apiClient.get("/managements/getManagements")
    } catch (error) {
        console.error(error);
        return { error: true, error }
    }
}

export const addManagementRequest = async (params) => {
    try {
        return await apiClient.post("/managements/addManagements", params)
    } catch (error) {
        console.error(error);
        return { error: true, error }   
    }
}

export const updateManagementRequest = async (params, id) => {
    try {
        return await apiClient.put(`/managements/updateManagements/${id}`, params)
    } catch (error) {
        console.error(error);
        return { error: true, error }
    }
}

export const deleteManagementRequest = async (id) => {
    try {
        return await apiClient.delete(`/managements/deleteManagements/${id}`)
    } catch (error) {
        console.error(error);
        return { error: true, error }
    }
}