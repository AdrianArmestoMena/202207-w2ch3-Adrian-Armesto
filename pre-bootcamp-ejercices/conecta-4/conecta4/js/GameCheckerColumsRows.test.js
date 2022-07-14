import GameCheckerColumsRows from "./conecta4-Players";

describe("Given the function test", () => {
  describe("When it's called and it recieved this object", () => {
    test("Then function should return true", () => {
      const GameCheck = [
        [],
        [],
        [],
        ["1", "1", "1", "1", "1", "1"],
        ["7", "8", "9", "10", "11", "12"],
        ["13", "14", "15", "16", "17", "18"],
        ["19", "20", "21", "22", "23", "24"],
        ["25", "26", "27", "28", "29", "30"],
        ["31", "32", "33", "34", "35", "36"],
        ["37", "38", "39", "40", "41", "42"],
        [],
        [],
        [],
      ];
      const expectedResult = this.GameFinished();

      const receivedResult = GameCheckerColumsRows(GameCheck);

      expect(receivedResult).toBe(expectedResult);
    });
  });
});
