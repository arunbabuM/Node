// import "./first/public/style.css";
const users = [{username: 'arun',pass: 'arun'}]

module.exports = {
    getPageMethod : (req , res , next ) =>{
        res.render('node')
    },
    getPageMethod1 : (req,res) =>{
        console.log("Registartion Result>>>>>>",req.query)

        res.render('nodelogin')
    },
    getDashboard : (req,res)=>{
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

    }
    
}