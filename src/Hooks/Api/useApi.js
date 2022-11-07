import axios from "axios";

const api = axios.create({
    // baseURL: process.env.REACT_APP_API
    baseURL: 'http://localhost:8080/api'
});

export const useApi = () => ({
    signup: async(nome, email, senha) => {
        const response = await api.post('/usuarios', {nome, email, senha})
        return response;
    },
    signin: async(email, password) => {
        const response = await api.post('/auth', {email, password})
        return response.data;
    },
});