const dotenv = require ("dotenv");
dotenv.config();
// const porta = 3003;
// const servico = "logs";
// a porta do postman precisa ser http://localhost:3003/v1/logs já que fizemos as alterações
// variavel de ambiente
const {SERVICO, PORTA} = process.env;

console.log(`[Carregando] servico ${SERVICO}:${PORTA}`);

const express = require('express');
// sempre precisa ter o express para rodar o arquivo
app = express();
app.use(express.json());
// cada vez que for receber uma requisição no meio do serviço, ela precisa passar por esse texto => middleware
// request/ response/ next para executar a próxima instrução
app.use((req,res,next)=> {
    const logar = async()=>{
        const{data} = await axios.post("http://localhost:3000/v1/carros",{
            servico:req.method,
            evento:req.url,
            data:req.body
        });
        return data
    };
    let data = logar();
    data.then(log=> {
        console.log(log)
    });
    next();
}) 
const axios = require('axios');
// linkar arquivos de rotas
require("./rotas");

// ativando o código por causa da biblioteca
// copiar objeto no post do postman e colocar aspas nas propriedades pq é um json

// essa parte foi transferida para rotas
// const moment = require('moment');
// const{v4:uuidv4} = require("uuid");
// const logs = [
    // não vai precisar mais disso no serviço pois é um moc para ver se tá funcionando
    // {
    //     id:uuidv4(),
    //     servico: "logs",
    //     evento:"GET",
    //     data:{
    //         carro: "Phantom",
    //         marca:"Tesla",
    //         ano:2020
    //     }
    // }
// ];


// app.get('/v1/logs', function (req, res) {
//     // oq vc deseja que retorne do conteúdo tipo o 404
//     return res.status(200).json(logs);
// });

// app.post('/v1/logs', function(req, res) {
//     // no express sempre vai existir dois parâmetros app.<verbo>("<<endpoint>>". (request, response))
// isso vai para o arquivo rotas.js
//     console.log(req.body);
//     const evento = {
//         id: uuidv4(),
//         ...req.body,
//         timestamp:moment().toISOString()
//     };
//     logs.push(evento);
//     return res.status (201).json(evento);
// })

app.listen(PORTA, () => {
    console.log(`[Carregou isso] ${SERVICO}:${PORTA}`);
    });