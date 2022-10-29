const {client} = require("../db.js");



module.exports = class Model{
 
    static getAllData() {
        return  client.query('select * from crud_Table');
    }  

    
}