require('dotenv').config();

const withCSS = require('@zeit/next-css')
module.exports = withCSS()



module.exports = {
    env:{
        GET_ALL:process.env.API_GET,
        GET_BY_ID:process.env.API_GET_BY_ID,
        CREATE:process.env.API_CREATE,
        UPDATE:process.env.API_UPDATE,
        DELETE:process.env.API_DELETE
    }
}