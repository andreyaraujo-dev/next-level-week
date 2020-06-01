import express from 'express';

const app = express();

app.get('/', (request, response) => {
  console.log('Listando usuários');
  response.json({ "nome": "Jacksson", "sobrenome": "Andrey" });
});

app.listen(3333);