const { customTag } = require("./custom-tag");

test("checking returned link", () => {
  expect(customTag("We were attacked by a <ddb> lich <ddb>")).toBe(
    "https://www.dndbeyond.com/monsters/lich"
  );
});
