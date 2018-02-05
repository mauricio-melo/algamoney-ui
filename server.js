const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist'));

app.get('/*', function(req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

// tento ler a variavel de ambiente port do heroku, caso nao tenha nada eu escolho a porta
app.listen(process.env.PORT || 4200);
