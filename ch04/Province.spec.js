const Province = require("./Province");
const sampleProvinceData = require("./sampleProvinceData");

describe("Province", () => {
  let asia;
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
});
