async function deleteCards(idCards) {
  const allCards = require('../model/model');
  try {
    return await allCards.findOneAndDelete({ id: idCards });
  } catch (error) {
    return await error;
  }
}

module.exports = deleteCards;
