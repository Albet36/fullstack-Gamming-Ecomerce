import axios from 'axios';
const URL = 'http://localhost:2001';

export const listProduct = async(data) => {
try {
    return await axios.get(`${URL}/product`,data);
} catch (error) {
    console.log('call api loi roi',error);
}
}