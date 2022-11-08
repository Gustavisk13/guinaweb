import axios from "axios";

const api = axios.create({
    // baseURL: process.env.REACT_APP_API
    baseURL: 'http://localhost:8080/api'
});

export const useApi = () => ({
    signin: async(email:string, password:string) => {
        const response = await api.post('/auth', {email, password})
        return response.data;
    },
    signup: async(nome: string, email: string, senha: string) => {
        const response = await api.post('/usuarios', {nome, email, senha})
        return response;
    },
});