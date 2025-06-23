import axios from 'axios';

// Cria a função `api` para facilitar chamadas HTTP à API no endereço local
// Não precisa repetir o endereço toda vez que fizer uma requisição
const api = axios.create({
    baseURL: 'http://localhost:8001' // URL do backend local
});

export { api };
