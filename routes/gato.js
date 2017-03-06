var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  res.render('gato',
    { title: 'Acerca del proyecto',
    saludo: 'hola a todos',
    numero: 1,
    gato: 'https://www.mundogato.net/wp-content/uploads/normas-de-higiene-en-los-gatos-1-485x300.jpg'
    footer: 'Este proyecto se plantea en el marco de la Maestría en Humanidades Digitales de la Universidad de los Andes por Luis Antonio Silva'

  }
  );
});

module.exports = router;
