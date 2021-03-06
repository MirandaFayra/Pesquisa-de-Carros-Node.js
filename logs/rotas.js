const moment = require('moment');
const{v4:uuidv4} = require("uuid");
const logs =[];
app.get('/v1/logs', function (req, res) {
    // oq vc deseja que retorne do conteúdo tipo o 404
    return res.status(200).json(logs);
});

app.post('/v1/logs', function(req, res) {
    // no express sempre vai existir dois parâmetros app.<verbo>("<<endpoint>>". (request, response))
    console.log(req.body);
    const{servico,event} = req.body;
    if(!servico.lenght){
        res.status(422).json(
            {
                mensagem: "Opa, faltou o nome do serviço"
            }
        )
    }
    if(!evento.lenght){
        res.status(422).json(
            {
                mensagem: "Opa, faltou o nome do serviço"
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


