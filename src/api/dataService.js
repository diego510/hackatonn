import axios from 'axios';

// Definición de la URL base para las solicitudes al servidor.
const BASE_URL = 'http://localhost:8080';

// Función asincrónica para recuperar grupos desde el servidor.
export const fetchGroups = async () => {
    // Utiliza Axios para hacer una solicitud GET a la URL de grupos.
    return axios.get(`${BASE_URL}/groups?_embed=True`)
}
export const fetchPersons = async () => {
    return axios.get(`${BASE_URL}/persons?_embed=True`)

}
export const fetchTipogrupos = async () => {
    return axios.get(`${BASE_URL}/tipogrupos?_embed=True`)

}