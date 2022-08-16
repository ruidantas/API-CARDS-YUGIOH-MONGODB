class card {
  constructor(obj) {
    (this.id = obj.id),
      (this.category = obj.category),
      (this.atributte = obj.atributte),
      (this.effect = obj.effect),
      (this.image = obj.image),
      (this.atk = obj.atk),
      (this.def = obj.def);
  }
}

module.exports = card;

