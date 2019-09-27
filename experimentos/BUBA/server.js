require('newrelic');

var express = require('express'),
    captchapng = require('captchapng'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    expressValidator = require('express-validator'),
    ejs = require('ejs'),
    http = require('http'),
    https = require('https'),
    path = require('path'),
    fs = require('fs'),
    morgan = require('morgan'),
    //cookieSession = require('cookie-session'),
    responseTime = require('response-time'),
    favicon = require('serve-favicon'),
    session = require('express-session'),
    cookieParser = require('cookie-parser'),
    //csrf = require('csurf'),
    compress = require('compression'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    url = 'mongodb://localhost:27017/simulador-bu',
    equipos = require('./equipos'),
    port = process.env.PORT || 3000,
    validate = require('./validacion');


app = express();

var arr = mongoose.model('votos', new Schema({
    array: [Object]
}));

mongoose.connect(url);
var encuesta = mongoose.model('encuesta', {
    user: String,
    texto: [],
    infor: String,
    date: String,
    validacion: Boolean,
    done: Boolean,
    ip: String,
});

var concurso = mongoose.model('concurso', {
    nombre: String,
    apellido: String,
    nacimiento: String,
    domicilio: String,
    Localidad: String,
    Provincia: String,
    telefono: String,
    email: String,
    date: String,
    ip: String,
    user: String,
});

var log = mongoose.model('log', {
    nombre: String,
    log: String,
    ip: String,
    session: String,
    date: String,
});

//
var id_build = function() {
    var d = new Date();
    return d.valueOf()
}

// Configuracion
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(express.static(__dirname + '/public'));
app.use(responseTime(10));
app.use(morgan('dev'));
app.use(cookieParser('secret'));
//
app.use(session({
    captcha: '',
    user: '',
    cookie: {
        maxAge: 900000
    }
}));
//
session.user = id_build();
//app.use(csrf());
app.use(compress());
app.use(bodyParser());
app.use(expressValidator());
app.use(methodOverride());
//
app.use(compress({
    threshold: 512
}));
//
app.use(function(req, res, next) {
    //res.locals.csrftoken = req.session._csrf;
    //res.locals.token = req.csrfToken();
    //res.cookie('XSRF-TOKEN', res.locals.token);
    next();
});
//Configuramos rutas
app.get("/", function(req, res) {
    //console.log(session.user);
    res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    res.render("index");
})
//

app.get("/captcha.png", function(req, res) {
    //var capt = session.user.toString().substr(8, session.user.length)
    var captcha = Math.random() * 9000 + 1000
    var captchaString = captcha.toString().substr(0, 4)
    var p = new captchapng(80, 30, parseInt(captchaString)); // width,height,numeric captcha
    p.color(115, 95, 197, 100); // First color: background (red, green, blue, alpha)
    p.color(30, 104, 21, 255); // Second color: paint (red, green, blue, alpha)
    var img = p.getBase64();
    var imgbase64 = new Buffer(img, 'base64');
    res.header('Content-Type', 'image/png');
    session.captcha = captchaString
    //console.log(captchaString)
    res.send(imgbase64);
});
//
app.get("/participaste", function(req, res) {
    res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    res.render("participar");
});
//
app.get('/equipos', function(req, res) {
    //console.log(session.user);
    res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    req.accepts('application/json');
    res.type('application/json');
    res.json(equipos)
});
//// create todo and send back all todos after creation
var votacion = mongoose.model('votacion', new Schema({
    array: Array
}));
//
app.post('/enviar/log', function(req, res) {
    //console.log(req.body)
    //console.log(req.body[0].evento, req.body[0].msg);
    log.create({
        nombre: req.body.evento, //faltaria agarrar el log que recibe el post
        log: req.body.msg,
        ip: req.ip,
        session: session.user,
        date: new Date,
    }, function(err) {
        if (err) {
            res.send(err)
        }
    });
});
//var idTwo = new mongoose.Types.ObjectId;
app.post('/enviar', function(req, res, err) {
    //console.log(session.name);
    var resultado = validate.validar(req.body)
    var vots = new votacion({
        array: req.body
    })
    encuesta.create({
        user: session.user,
        infor: resultado.msg,
        texto: vots,
        date: new Date,
        done: false,
        validacion: resultado.vali,
        ip: req.ip,
    }, function(err) {
        if (err) {
            res.send(err);
        } else {
            res.redirect("/#/resultado")
        }
    })
});


app.post("/participar", function(req, res, err) {
    var count = 1
    //console.log(session.captcha)
    //console.log(req.body.captcha)
    if (req.body.captcha === session.captcha) {
        console.log("paso el captcha")
        req.assert('nombre', 'Nombre es requerido').notEmpty();
        req.assert('apellido', 'Apellido es requerido').notEmpty();
        req.assert('dni', 'Telefono es requerido').len(6, 20);
        req.assert('nacimiento', 'Nacimiento es requerido').notEmpty();
        req.assert('localidad', 'Localidad es requerido').notEmpty();
        req.assert('provincia', 'Provincia es requerido').notEmpty();
        req.assert('domicilio', 'Domicilio es requerido').notEmpty();
        req.assert('telefono', 'Telefono es requerido').len(6, 20);
        req.assert('email', 'Email es requerido').isEmail();
        var errors = req.validationErrors();
        // session.user == numero de usuario enviado en el captcha???
        if (!errors) {
            console.log(req.body)
            concurso.create({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                dni: req.body.dni,
                nacimiento: req.body.nacimiento,
                localidad: req.body.localidad,
                provincia: req.body.provincia,
                domicilio: req.body.domicilio,
                telefono: req.body.telefono,
                email: req.body.email,
                date: new Date,
                ip: req.ip,
                user: session.user
            }, function(err) {
                if (err) {
                    res.send(err);
                } else {
                    res.redirect("/#/participaste")
                }
            })
        } else {
            res.redirect("/#/resultado", {
                title: 'Validacion de formulario con error',
                message: 'No se han rellenado los campos requeridos',
                errors: errors
            });
        }
    }

});

app.get('/vots', function(req, res) {
    res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    req.accepts('application/json');
    encuesta.findOne({
        ip: req.ip,
        user: session.user
    }, {}, {
        sort: {
            date: -1
        }
    }, function(err, data) {
        if (err) {
            res.send(err)
        } else {
            res.json(data);
        }
    });
});

//http://stackoverflow.com/questions/12871565/how-to-create-pem-files-for-https-web-server

// CERTIFICADOS ?? run with root

// var privateKey = fs.readFileSync('sslcert/key.pem', 'utf8');
// var certificate = fs.readFileSync('sslcert/cert.pem', 'utf8');

// credentials = {
//     key: privateKey,
//     cert: certificate
// };

http.createServer(app).listen(port);
// https.createServer(credentials, app).listen(443);
