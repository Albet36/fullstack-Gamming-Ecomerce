import axios from 'axios';
const HOST = 'http://localhost:2001'
export const signIn = async (formData) =>{
    return axios.post(`${HOST}/auth`,formData)
} 
export const signUp = async (formData) =>{
    return axios.post(`${HOST}/auth/register`,formData)
} 