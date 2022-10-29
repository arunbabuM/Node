// import "./first/public/style.css";
// const users = [{username: 'arun',pass: 'arun'}]
const model = require("../model/Model.js");

module.exports = {
    getPageMethod : (req , res , next ) =>{
        Promise.all([model.getAllData()]).then(result => {
            res.render('crud', {
                data: result[0].rows,
            })
        })
    },

    getRegister :(req , res ,next ) => {
        res.render('node');
    }

    // getRegister : (req , res , next) => {
    //     Promise.all([model.getRegister()]).then(result => {
    //         res.render('/first')
    //     })
    // }

        
    
    
}