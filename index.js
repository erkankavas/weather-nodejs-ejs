import express from "express";
import dotenv from "dotenv";

const app = express();
const port = 3000;
dotenv.config();

app.use(express.static('public'));
app.get("/", (req, res) => {


let title = "nWeather";
let apiKey = process.env.API_KEY;

if (req.query.city == undefined) {
  var city = "Antalya"
} else {
  var city = req.query.city
}


let api = "https://api.openweathermap.org/data/2.5/weather?appid="+apiKey+"&q="+city+"&units=metric";

  fetch(api)
      .then((response) => response.json())
      .then((data) => {
  
     res.render("index.ejs", {
       title: title,
    data: data,
  });

       });

  });



app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
