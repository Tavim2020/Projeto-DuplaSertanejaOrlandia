var express = require('express');
var server = express();
var nodeMailder = require('nodemailer');
var smtp = require('./config/smtp');
var config = require('./config/config');
var bodyParser = require('body-parser');


server.use(express.static('public'));

var urlencodedParser = bodyParser.urlencoded({ extended: false });

server.get('/', (req, res) =>{
    res.sendFile(__dirname + '/views/index.html');
})

server.get('/historia', (req, res) =>{
    res.sendFile(__dirname +'/views/historia.html');
})

server.get('/contato', (req,res) =>{
    res.sendFile(__dirname + '/views/contato.html');
})

server.get('/galeria',  (req,res) =>{
    res.sendFile(__dirname + '/views/galeria.html');
})

server.post('/sendMail', urlencodedParser, (req,res) =>{
    var name = req.body.name;
    var cidade = req.body.city;
    var estado = req.body.estado;
    var email = req.body.email;
    var telefone = req.body.telefone;
    var descricao = req.body.textArea;


    // configurando o nodemailer
    // transport 
    const transporter = nodeMailder.createTransport({
        host: smtp.host,
        port: smtp.port,
        secure: false,
        auth: {
            user: smtp.user,
            pass: smtp.pass
        },
        tls: { rejectUnauthorized: true }
    });

    transporter.sendMail({
        from: config.from,
        to: config.to,
        subject: 'E-mail com sucesso!',
        text: `Contato do Cliente = 
                nome = ${name}
                email = ${email}
                telefone = ${telefone}
                cidade = ${cidade}
                estado = ${estado}
                descrição = ${descricao}`
    
}).then(message => {
    console.log(message);
}).catch(err=>{
    console.log(err);
})


transporter.sendMail({
    from: config.from, 
    to: `${email}`,
    subject: 'E-mail com sucesso!',
    text: `Muito obrigado ${name}, por entrar em contato conosco.\n O mais rápido possível retornaremos!`

}).then(message => {
console.log(message);
}).catch(err=>{
console.log(err);
})


    res.redirect('/')
})

server.listen(3200);