import axios, {AxiosInstance} from 'axios';

const apiUrl: string | undefined = process.env.NEXT_PUBLIC_API_URL;

const api: AxiosInstance = axios.create({
    baseURL: apiUrl
    });

export default api