import { SportsHistoryAbstract } from "./SportsHistoryAbstract";
import { ESportsLeague, ESportsLeagueArray } from "../Model";
import request from "request";

/**
 * E-Sports 정보를 불러오는 클래스
 * @class ESports
 */
class ESports extends SportsHistoryAbstract {
  /**
   * ESportsLeague
   * @memberof ESports
   * @typedef {string} ESportsLeague
   * @description
   * 리그 이름 | 값
   *------------- | -------------
   * 리그오브레전드  | lol
   * 스타크래프트2 | starcraft2
   * 오버워치 | overwatch
   */

  /**
   * 주어진 날에 열린 해당 리그 경기를 가져온다
   * @param {ESportsLeague} leagueType 찾고자 하는 리그
   * @param {Date} date 경기를 한 날짜
   * @returns {Promise<Information>} 경기 결과를 배열 형태로 반환하는 Promise
   * @example
   * const sh = new SportsHistory();
   * let data = await sh.eSports.getHistory("lol", new Date("2020/02/20"));
   * console.log(data);
   */
  public async getHistory(leagueType: ESportsLeague, date: Date) {
    try {
      return await this._getHistory<ESportsLeague>(
        leagueType,
        date,
        ESportsLeagueArray
      );
    } catch (error) {
      throw error;
    }
  }

  protected async callAPI(league: any, date: string) {
    let options = {
      method: "GET",
      url: this.makeLink(league, date),
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36",
      },
    };
    try {
      let data: object[] | null = null;
      // throw new Error("ESPORT CASE");
      await request(options, (err: any, response: any) => {
        data = JSON.parse(response.body).scoreboardList;
      });
      return data || [];
    } catch (error) {
      throw error;
    }
  }

  protected makeLink(league: ESportsLeague, date: string): string {
    // return `https://sports.news.naver.com/esports/schedule/scoreboard.nhn?year=2020&month=05&category=${league}&date=${date}`;
    return `https://apis.naver.com/nng_main/esports/v1/schedule/month?month=${this.dateStrToYYYYMM(
      date
    )}&topLeagueId=${league}&relay=false`;
  }
  //https://apis.naver.com/nng_main/esports/v1/schedule/month?month=2022-01&topLeagueId=lck&relay=true
  //https://apis.naver.com/nng_main/esports/v1/schedule/month?month=2022-02&topLeagueId=lck&relay=true
  //https://sports.news.naver.com/wfootball/schedule/scoreboard.nhn?date=20220211&year=2015&month=02&category=epl
  protected dateStrToYYYYMM(date: string): string {
    return date.substring(0, 4) + "-" + date.substring(4, 2);
  }
}

export { ESports };
