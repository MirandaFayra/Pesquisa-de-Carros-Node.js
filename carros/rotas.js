const moment = require('moment');
const{v4:uuidv4} = require("uuid");
const logs =[];
app.get('/v1/logs', function (req, res) {
    // oq vc deseja que retorne do conteúdo tipo o 404
    return res.status(200).json(logs);
});

app.post('/v1/carros', function(req, res) {
    // no express sempre vai existir dois parâmetros app.<verbo>("<<endpoint>>". (request, response))
    console.log(req.body);
    const{nome,marca,tipo,placa,cor} = req.body;
    if(!nome.lenght){
        res.status(422).json(
            {
                mensagem: "Opa, faltou o nome do carro"
            }
        )
    }
    if(!marca.lenght){
        res.status(422).json(
            {
                mensagem: "Opa, faltou a marca do carro"
            }
        )
    }if(!tipo.lenght){
        res.status(422).json(
            {
                mensagem: "Opa, faltou o tipo do carro"
            }
        )
    }if(!placa.lenght){
        res.status(422).json(
            {
                mensagem: "Opa, faltou a placa do carro"
            }
        )
    }if(!cor.lenght){
        res.status(422).json(
            {
                mensagem: "Opa, faltou a cor do carro"
            }
        )
    }
    const evento = {
        id: uuidv4(),
        ...req.body,
        timestamp:moment().toISOString()
    };
    logs.push(evento);
    return res.status (201).json(evento);
})


