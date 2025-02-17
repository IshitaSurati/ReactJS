const { default: axios } = require("axios");

const API=()=>axios.create({
    baseURL='http://localhost:5000/'
})


export default API;