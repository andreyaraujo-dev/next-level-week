import express from 'express';

const app = express();

app.get('/', (request, response) => {
  console.log('Listando usuários');
  response.json([
    'Jacksson',
    'Andrey',
    'Araujo'
  ]);
});

app.listen(3333);