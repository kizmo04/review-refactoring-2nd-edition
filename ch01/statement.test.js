// const ReactTestRenderer = require("react-test-renderer");
const { statement, htmlStatement } = require("./statement");
const invoice = require("./invoices")[0];
const plays = require("./plays");

describe("statement", () => {
  it("청구내역을 반환해야 한다.", () => {
    expect(statement(invoice, plays)).toMatch(
      `청구 내역 (고객명: BigCo)\n Hamlet: $650.00 (55석)\n As You Like It: $580.00 (35석)\n Othello: $500.00 (40석)\n총액: $1,730.00\n적립 포인트: 47점`
    );
  });
});

describe("htmlStatement", () => {
  it("청구내역을 테이블로 그려야 한다.", () => {
    expect(htmlStatement(invoice, plays)).toMatchSnapshot();
  });
});
