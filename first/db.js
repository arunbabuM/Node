const {Client} = require('pg');

const client = new Client({
    host :"localhost",
    user:"postgres",
    port: 5433,
    password : "ROOT",
    database : "crud"

})

module.exports = {client}