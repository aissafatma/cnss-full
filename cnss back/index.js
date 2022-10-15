import express from "express"
import mysql from "mysql";
import cors from "cors";


const app=express();
app.use(cors());
app.use(express.json());

const db= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"cnss"
})

app.get("/", (req,res)=>{
res.json("hiiiiiiii")
})

app.get("/ds",(req,res)=>{
    const q="SELECT * from ds"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})
app.get("/Numerised",(req,res)=>{
    const q="SELECT count(*) AS Numérisés  from ds WHERE Status='Partially Indexing' OR Status='For Indexing ';"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
})
})
app.get("/Indexed",(req,res)=>{
    const q="SELECT count(*) AS Indéxés from ds WHERE Status='For Approval' OR Status='Partially Validated';"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
})
})
app.get("/Validated",(req,res)=>{
    const q="SELECT count(*) AS Validés from ds WHERE Status='Validated' ;"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
})
})

app.listen(8800,()=>{
    console.log("connected to backend")

})