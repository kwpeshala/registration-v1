import axios from 'axios';

const BASE_URL="http://localhost:8080/api";

export const createUser = (content) => axios.post(BASE_URL+"/add/user", content);
export const getBankNames = () => axios.get(BASE_URL+"/bank");
export const getGender = () => axios.get(BASE_URL+"/gender");
export const getUsers = () => axios.get(BASE_URL+"/users");