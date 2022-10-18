// import "./first/public/style.css";
module.exports = {
    getPageMethod : (req , res , next ) =>{
        res.render('node')
    },
    getPageMethod1 : (req,res) =>{
        console.log("Registartion Result>>>>>>",req.query)

        res.render('nodelogin')
    },
    getDashboard : (req,res)=>{
        console.log("entered inside getDashboard>>>>>>",req.query)
        res.render('dashboard')
    }
    
}