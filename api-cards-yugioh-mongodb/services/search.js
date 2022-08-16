async function searchCards(idCards) {
  const allCards = require('../model/model');
  try {
  return await allCards.find({id: idCards})
}
catch(error){
return await error

}
}


module.exports = searchCards;
