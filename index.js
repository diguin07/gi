//Express lib
const express = require('express');
//Função do express
const app = express();
//Caminho relativo
const path = require('path');
//Criando rotas
const router = express.Router();

//Criando função da rota
router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'))//__dirname(caminho alternativo)
    console.log(__dirname)
    console.log("index")
});

//Criando outra rota
router.get('/echodot', function(req,res) {
    console.log("echodot");
    res.sendFile(path.join(__dirname+'/echodot.html'))
})

router.get('/echoshow', function(req,res) {
    console.log("echoshow");
    res.sendFile(path.join(__dirname+'/echoshow.html'))
})

app.use('/',router);
app.listen(process.env.port || 3000);

console.log("Server rodando!")