// import "./first/public/style.css";
// const users = [{username: 'arun',pass: 'arun'}]
const model = require("../model/Model.js");
const users = [{username: 'arun',pass: 'arun'}]

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
    },

    getLogin : (req , res, next)=>
    {
        res.render('nodelogin');
    },

    // getDashboard : (req , res , next) => {
    //     Promise.all([model.getDashboard()]).then(result => {
    //         res.render('dashboard');
    //     })
    // }
    getDashboard : (req , res , next) => {    
             console.log(req.body.username)
        console.log(req.body.pass)
        const username = req.body.username
        const pass = req.body.pass
        const user = users.find((u) => {
            return u.username === username && u.pass === pass;
          });
        if(user) {
           return res.render('dashboard',{data: username})
        } else {
            return res.render('nodelogin')
        }
    },
    getAddUser : (req,res)=>{
        res.render('addUser');
    },

    saveAddUser : (req,res)=>{
        Promise.all([model.insertAddUser()]).then(result => {
            res.render('addUser', {
                data: result[0].rows,
            })
        })
        // res.render("crud");
    }
        
    
    
}