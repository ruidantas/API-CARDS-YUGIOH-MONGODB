async function update(idCards, obj) {
  const allCards = require('../model/model');
  const cards = require('../controllers/cardscontrollers');
  const armCard = { ...(await allCards.find({ id: idCards })) };
  armCard.category =
    obj.category == undefined ? armCard.category : obj.category;

  armCard.atributte =
    obj.atributte == undefined ? armCard.atributte : obj.atributte;

  armCard.effect = obj.effect == undefined ? armCard.effect : obj.effect;

  armCard.image = obj.image == undefined ? armCard.image : obj.image;

  armCard.atk = obj.atk == undefined ? armCard.atk : obj.atk;

  armCard.def = obj.def == undefined ? armCard.def : obj.def;

  return await allCards.findOneAndUpdate({ id: idCards }, armCard);
}

module.exports = update;
