import axios from 'axios';

const baseApiService = axios.create({
    baseURL: "https://localhost:44314/",
    headers: {'Content-Type': 'application/json;charset=UTF-8',
             "Access-Control-Allow-Origin": "*"
    },
})

baseApiService.interceptors.request.use((config)=>{
    config.params= config.params || {}; 
    if(sessionStorage.getItem("token") != ""){
        config.headers["Authorization"]= `Bearer ${sessionStorage.getItem("token")}`
    }
    return config;
})

export default baseApiService;

    

