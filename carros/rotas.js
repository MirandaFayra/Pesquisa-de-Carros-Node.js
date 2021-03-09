const moment = require('moment');
const{v4:uuidv4} = require("uuid");
const carros =[];

// Quando quiser buscar um valor para uma url, preciso referenciar :nome_do_parametro
// se quiser buscar pelo body, "filtrar os dados da rquisição por req.body
app.get('/v1/carros/:id', function (req, res) {
    // oq vc deseja que retorne do conteúdo tipo o 404
    // buscar o carro por id, usar array filter => se o código que for salvar, for igual o que você têm ele retorna o carro desejado
    const carro = carros.filter(item => item.id == id)

    const{id} = req.params;
    // destruir (desestruturar o array) o objeto carros ...
    return res.status(200).json(...carros);

});

app.post('/v1/carros', function(req, res) {
    // no express sempre vai existir dois parâmetros app.<verbo>("<<endpoint>>". (request, response))
    console.log(req.body);
    const{nome,marca,tipo,placa,cor} = req.body;
    if(!nome.length){
        res.status(422).json(
            {
                mensagem: "Opa, faltou o nome do carro"
            }
        )
    }else if(!marca.length){
        res.status(422).json(
            {
                mensagem: "Opa, faltou a marca do carro"
            }
        )
    }else if(!tipo.length){
        res.status(422).json(
            {
                mensagem: "Opa, faltou o tipo do carro"
            }
        )
    }else if(!placa.length){
        res.status(422).json(
            {
                mensagem: "Opa, faltou a placa do carro"
            }
        )
    }else if(!cor.length){
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

    carros.push(evento);
    return res.status (201).json(evento);
})


