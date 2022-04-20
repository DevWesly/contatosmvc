var express = require('express');
const ContatosContrellers = require('../../Controllers/ContatosControllers');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/contato',ContatosContrellers.index);
router.get('/estudantes', ContatosContrellers.estudante);

module.exports = router;
