const allCards = require('../model/model');

async function getall() {
  return await allCards.find();
}

module.exports = getall;
