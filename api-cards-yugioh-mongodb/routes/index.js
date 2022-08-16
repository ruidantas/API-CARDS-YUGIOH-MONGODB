const link =
  'mongodb+srv://azzuy:35251920@cluster0.jlrumsv.mongodb.net/?retryWrites=true&w=majority';

const mongoose = require('mongoose');

mongoose
  .connect(link, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(console.log('Test'));

const allCards = require('../services/getall');
const searchCards = require('../services/search');
const addCards = require('../services/add');
const deleteCards = require('../services/delete');
const update = require('../services/update');

const express = require('express');
const port = 666;
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.get('/', async function (req, res) {
  res.send(await allCards());
});

app.get('/carta/:id', async function (req, res) {
  const id = Number(req.params.id);
  res.send(await searchCards(id));
});

app.delete('/delete/:id', async function (req, res) {
  const deleteId = Number(req.params.id);
  res.send(deleteCards(deleteId));
});

app.post('/add', async function (req, res) {
  res.send(
    addCards({
      id: req.body.id,
      category: req.body.category,
      atributte: req.body.atributte,
      effect: req.body.effect,
      image: req.body.image,
      atk: req.body.atk,
      def: req.body.def,
    }),
  );
});

app.put('/update/:id', async function (req, res) {
  const updadeId = Number(req.params.id);
  res.send(
    update(updadeId, {
      category: req.body.category,
      atributte: req.body.atributte,
      effect: req.body.effect,
      image: req.body.image,
      atk: req.body.atk,
      def: req.body.def,
    }),
  );
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
