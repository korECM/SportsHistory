import SportsHistory from "../Service/SportsHistory";

let sh: SportsHistory;

let testData: any[];
beforeEach(() => {
  sh = new SportsHistory();
  testData = [
    sh.eSports,
    sh.koreaBaseball,
    sh.koreaBasketball,
    sh.koreaSoccer,
    sh.worldBaseball,
    sh.worldBasketball,
    sh.worldSoccer,
  ];
});

describe("SportsHistory 클래스의 상속을 받는 아이들은", () => {
  it("getHistory 함수를 구현한다", () => {
    testData.map((subClass) => {
      expect("getHistory" in subClass).toBe(true);
    });
  });
});
