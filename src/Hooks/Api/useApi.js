import axios from "axios";
import { json } from "react-router-dom";

const api = axios.create({
    // baseURL: process.env.REACT_APP_API
    baseURL: 'http://localhost:8080/api'
});

// Ela vai retornar um objeto contendo funções para serem utilizadas em outros locais.
// Esse hook vai ser responsável por fazer requisições para a API
export const useApi = () => ({
    validateToken: async (token) => {
        const response = await api.post('/validate', {token});
        return response.data;
    },
    signup: async(name, email, password) => {
        const response = await api.post('/usuarios',{name, email, password});
        return response.data;
    },
    signin: async(email, password) => {
        const response = await api.post('/auth', JSON.stringify({email, password}));
        console.log(JSON.stringify(response.data.token))
  
        return response.data.token;

    },
    logout: async () => {
        const response = await api.post('/logout');
        return response.data;
    }
});