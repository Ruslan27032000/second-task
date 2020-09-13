require('dotenv').config();

const withCSS = require('@zeit/next-css')
module.exports = withCSS()



module.exports = {
    env:{
        API_GET:process.env.API_GET,
        API_GET_BY_ID:process.env.API_GET_BY_ID,
        API_CREATE:process.env.API_CREATE,
        API_UPDATE:process.env.API_UPDATE,
        API_DELETE:process.env.API_DELETE
    }
}