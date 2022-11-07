const {client} = require("../db.js");



module.exports = class Model{
 
    static getAllData() {
        return  client.query('select * from crud_Table');
    }  

    static insertAddUser(crud_Table){
        return client.query('insert into crud_Table (id,name,age,city) values ($1,$2,$3,$4)',[Model.id,Model.name,Model.arguments,Model.city]);
    } 

    static updateUser(crud_Table){
        return client.query('UPDATE crud_Table SET name=$2,age=$3,city=$4'),[Model.id,Model.name,Model.age,Model.city]
    }

    static deleteUser(id){
        return client.query('DELETE FROM crud_Table WHERE id=$1',[id])
    }
    
}