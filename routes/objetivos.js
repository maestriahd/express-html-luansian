var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  res.render('objetivos',
    { title: 'Acerca del proyecto',
    proyecto: 'Recorridos virtuales de la Semana Santa en Ciénaga de Oro, Córdoba',
    final: 'Luis Antonio Silva - Maestría en Humanidades Digitales - Universidad de los Andes - 2017',
  }
  );
});

module.exports = router;
