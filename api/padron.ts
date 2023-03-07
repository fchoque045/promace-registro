import axios from "axios";

const PadronApi = axios.create({
    baseURL: 'https://padron.promace.jujuy.edu.ar/api'
});

export default PadronApi;