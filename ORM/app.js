const express = require('express')
const app = express()

const mysql = require('mysql')

// const db  = mysql.createConnection({
//     user:"root",
//     host:"localhost",
//     password:"password",
//     database:"fakeDatabase"
// })

const db = require("./models")
const {User} = require("./models")

app.get('/select' ,(req,res) => {
    User.findAll({where: {firstName : "John"}}).then((users)=>{
        res.send(users)
    }).catch((err)=>{
        console.log(err);
    });

});

app.get("/insert" , (req, res) => {

    User.create({
        firstName: "John",
        age: 19,
    }).catch((err) => {
        if(err){
            console.log(err);
        }
    });

    res.send("insert")
});

app.get("/delete", (req,res) =>{
    User.distroy({where :{id: 10}})
    res.send("delete");
});

db.sequelize.sync().then((req) =>{
    app.listen(3000, ()=>{
        console.log("Server is Running")
    });
});