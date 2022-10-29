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
//     getPageMethod1 : (req,res) =>{
//         console.log("Registartion Result>>>>>>",req.query)

//         res.render('nodelogin')
//     },
//     getDashboard : (req,res)=>{
//         console.log(req.body.username)
//         console.log(req.body.pass)
//         const username = req.body.username
//         const pass = req.body.pass
//         // const user = users.find((u) => {
//         //     return u.username === username && u.pass === pass;
//         //   });
        
//            return res.render('dashboard',{data: username})
      

//     },



    
//     getCrud : (req,res)=>{
//         // if(error){
//         //     console.error(error)
//         //     return res.status(500).send(error)
//         // }
//         // res.render('crud',{rows});
//         res.render("rows",{
//             final: Object.values(result)
//         })
//     }
    
}