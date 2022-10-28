import axios from "axios";

const api = axios.create({
    // baseURL: process.env.REACT_APP_API
    baseURL: 'http://localhost:8080/api'
});

// Ela vai retornar um objeto contendo funções para serem utilizadas em outros locais.
    // Esse costumHook vai ser responsável por fazer requisições para a API.
export const useApi = () => ({
    validateToken: async(token) => {
        const response = await api.post('/validate', {token});
        return response.data;
    },
    signup: async(name, email, senha) => {
        const response = await api.post('/usuarios',{name, email, senha})
        return response.data;
    },
    signin: async(email, senha) => {
        const response = await api.post('/auth', {email, senha})
        return response.data;
    },
    logout: async() => {
        const response = await api.post('/logout');
        return response.data;
    }
});