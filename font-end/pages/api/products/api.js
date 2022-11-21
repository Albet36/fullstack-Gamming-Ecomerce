import axios from "axios";
const URL = "http://localhost:2001";

export const listProduct = async (data) => {
  try {
    return await axios.get(`${URL}/product`, data);
  } catch (error) {
    console.log("call api loi roi", error);
  }
};
export const addProductApi = async (data) => {
  try {
    return await axios.post(`${URL}/product`, data);
  } catch (error) {
    console.log("call api loi roi", error);
  }
};
export const getProductApi = async (id) => {
  try {
    return await axios.get(`${URL}/product/${id}`);
  } catch (error) {
    console.log("call api loi roi", error);
  }
};
export const updateProduct = async (id, data) => {
  try {
    return await axios.post(`${URL}/product/${id}`, data);
  } catch (error) {
    console.log("call api loi roi", error);
  }
};
export const deleteProduct = async (id,data) => {
  try {
    console.log(id);
    return await axios.delete(`${URL}/product/${id}`, data);
  } catch (error) {
    console.log("call api loi roi", error);
  }
};
