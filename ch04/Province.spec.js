const Province = require("./Province");
const sampleProvinceData = require("./sampleProvinceData");

describe("Province", () => {
  let noProducers;
  beforeEach(() => {
    // given
    asia = new Province(sampleProvinceData());
  });

  it("shortfall", () => {
    expect(asia.shortfall).toEqual(5);
  });

  it("profit", () => {
    expect(asia.profit).toEqual(230);
  });

  it("change production", () => {
    // when
    asia.producers[0].production = 20;

    // then
    expect(asia.shortfall).toEqual(-6);
    expect(asia.profit).toEqual(292);
  });

  it("zero demand", () => {
    // when
    asia.demand = 0;

    // then
    expect(asia.shortfall).toEqual(-25);
    expect(asia.profit).toEqual(0);
  });

  it("negative demand", () => {
    // when
    asia.demand = -1;

    // then
    expect(asia.shortfall).toEqual(-26);
    expect(asia.profit).toEqual(-10);
  });

  it("empty string demand", () => {
    // when
    asia.demand = "";

    // then
    expect(asia.shortfall).toEqual(NaN);
    expect(asia.profit).toEqual(NaN);
  });
});

describe("no producers", () => {
  let noProducers;
  beforeEach(() => {
    const data = {
      name: "No producers",
      producers: [],
      demand: 30,
      price: 20,
    };
    noProducers = new Province(data);
  });

  it("shortfall", () => {
    expect(noProducers.shortfall).toEqual(30);
  });

  it("profit", () => {
    expect(noProducers.profit).toEqual(0);
  });
});

describe("string for producers", () => {
  it("", () => {
    const data = {
      name: "String producers",
      producers: "",
      demand: 30,
      price: 20,
    };
    const prov = new Province(data);
    expect(prov.shortfall).toEqual(0);
  });
});
