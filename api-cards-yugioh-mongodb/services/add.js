async function addCards(a) {
  const allCards = require('../model/model');
  const newCards = require('../controllers/cardscontrollers');
  const card = new allCards({
    ...a,
  });
  
  await card.save();
  return await allCards.findOne({
    id: card.id,
  });
}

module.exports = addCards;
