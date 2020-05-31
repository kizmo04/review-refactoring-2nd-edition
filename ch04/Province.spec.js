const Province = require("./Province");
const sampleProvinceData = require("./sampleProvinceData");

describe("Province", () => {
  it("shortfall", () => {
    const asia = new Province(sampleProvinceData());
    expect(asia.shortfall).toEqual(5);
  });
});
