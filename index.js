const express = require('express');
const path = require('path')

const app = express();

const port = parseInt(process.env.PORT) || process.argv[3] || 8080;



 let data = {

cliente:{
    nombre:"Ramon",
    tipo:"Minorista",
  },
  productos:  
[
  {nombre:"Sahumerio tibetano black citronella",cantidad:12,precio:233},
  {nombre:"Sahumerio",cantidad:12,precio:233},
  {nombre:"Sahumerio",cantidad:12,precio:233},
  {nombre:"Sahumerio",cantidad:12,precio:233},
  {nombre:"Sahumerio",cantidad:12,precio:233},
  {nombre:"Sahumerio",cantidad:12,precio:233},
  {nombre:"Sahumerio",cantidad:12,precio:233},
  {nombre:"Sahumerio",cantidad:12,precio:233}
]
}



app.use(express.static('public'))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.render('index',{data:data});
});


app.get('/biller', (req, res) => {

  res.render('./biller/index',{data:data});
  res.sendFile(__dirname + '/js\appBiller.js')
  console.log(__dirname + '/js\appBiller.js')
});


app.get('/api', (req, res) => {
  res.json({"msg": "Hello world"});
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
})