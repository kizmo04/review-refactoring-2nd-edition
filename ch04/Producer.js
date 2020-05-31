class Producer {
  constructor(aProvince, data) {
    const { cost, name, production } = data;

    this._province = aProvince;
    this._cost = cost;
    this._name = name;
    this._production = production || 0;
  }

  get name() {
    return this._name;
  }

  get cost() {
    return this._cost;
  }
  set cost(arg) {
    this._cost = parseInt(arg);
  }

  get production() {
    return this._production;
  }
  set production(amountStr) {
    const amount = parseInt(amountStr);
    const newProduction = Number.isNaN(amount) ? 0 : amount;

    this._province.totalProduction += newProduction - this._province;
    this._production = newProduction;
  }
}

module.exports = Producer;
