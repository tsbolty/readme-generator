// npm i axios
// read axios documentation
// use this to do an ajax call
// look at github api (documentation)
// 

const axios = require("axios")
require('dotenv').config()

const api = {
    getUser(username){
        return axios.get(
            `https://api.github.com/users/${username}?client_id=${
                process.env.CLIENT_ID
                }&client_secret=${process.env.CLIENT_SECRET}`
        ).catch(err =>{
            console.log("user not found")
            process.exit(1)
        })
    }
}

module.exports = api