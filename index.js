const express = require("express")
const axios = require("axios")

const app = express()
const apiKey = "a732c8130ff6dbcbea2256937d902cb3"

app.use(express.static("public"))
app.use(express.json())

app.get("/",async(req,res)=>{
    const city = req.query.city
    try{const response = await axios.get("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&lang=tr&appid="+apiKey)
    const result = response.data
    console.log(result)
    res.render("index.ejs",{data:result})}
    catch(error){
        console.log(error.message)
        res.render("index.ejs", { data: { error: "Failed to fetch weather data" } });
    }
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})