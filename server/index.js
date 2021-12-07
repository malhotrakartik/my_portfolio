const express = require('express');
const app = express();
const path = require('path');
const PORT = 4000;
const mongoose = require('mongoose');
const {MONGOURI} = require('./config/dev')
const router = express.Router();
const cors = require('cors');
let DetailsModel = require('./models/details')
let ProjectModel = require('./models/projects')

// const Details = mongoose.model("my_details");

// O8darp9Xscwka6O8



mongoose.connect(MONGOURI);             
mongoose.connection.on('connected',()=>{
    console.log("connected to data base");
})

mongoose.connection.on('error',(err)=>{
    console.log("error connecting to data base",err);
})

router.get('/',function(req,res){
    res.sendFile('C:/Users/karti/OneDrive/Desktop-DESKTOP-QIVU95S/web d projects/my_portfolio/public/index.html');    //__dirname : It will resolve to your project folder.
});



//getting data from collection
router.get('/userDetails',function(req,res){
    DetailsModel.findOne({name : "Kartik Malhotra"})
    .then(myDetails => {
        // console.log(myDetails);
        res.json({myDetails})
    }).catch(err => {
        console.log(err);
    })
})

router.get('/projectDetails',function(req,res){
    ProjectModel.findOne({name : req.name})
    .then(project => {
        res.json({project});
    }).catch(err => 
        console.log(err));
})




let details = new DetailsModel({
    name : "Kartik Malhotra",
    cgpa : "8.51",
    desc : "hello there my name is kartik student of usict",
    proImage : "https://res.cloudinary.com/kartik2403/image/upload/v1629461680/t61y9r6x3luugytrzglg.jpg",
    skills : [{skill : "java" , precentage : "60"},{skill : "java" , precentage : "60"},
    {skill : "java" , precentage : "60"},{skill : "java" , precentage : "60"}]

})

// details.save().then((doc)=>{
//     console.log(doc)
// }).catch(err=>{
//     console.log(err)

// })






app.use(cors());          //using this for handling cors instead of proxy
app.use('/', router);
app.use('/userDetails',router);



app.listen(PORT,()=>{
    console.log("app is running on port",PORT)
})





