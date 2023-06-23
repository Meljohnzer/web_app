import axios from "axios";
export const axiosRequest = axios.create({
  baseURL : "https://hanapp.pythonanywhere.com/"
});

export const server = "http://192.168.43.58:80/api/"


//change the ipv4 address of your own ip address
