import { SportsHistoryAbstract } from "./SportsHistoryAbstract";
import { ESportsLeague, ESportsLeagueArray } from "../Model";
import request from "request-promise";

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
  * LCK |  lck
  * LCK CL |  lck_cl
  * BSC |  bsc
  * PWS |  pws
  * GSL |  gsl
  * LCK AS |  lck_as
  * LPL |  lpl
  * LEC |  lec
  * LCS |  lcs
  * 롤드컵 |  world_championship
  * MSI |  msi
  * MSC |  msc
  * LOL 올스타 |  lol_allstar
  * 케스파컵 |  kespacup
  * CK |ck
  * Rift Rivals |  riftrivals
  * PCS |  pubg_pcs
  * PGC |  pgc
  * PKC |  pkc
  * PKL |  pkl
  * BWS |  bws
  * PMPS |  pmps
  * VCT 챌린저스 |  vck
  * VCT |  vct
  * WCK |  wck
  * 호라이즌 컵 |  whc
  * OWL |  owl
  * OSL |  osl_futures

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
  protected parseData(rawData: any[]) {
    const matchTimeFor = (startDate: number): string => {
      return new Date(startDate).toString().substring(16, 21);
    };
    const matchStatusFor = (aMatch: any): string => {
      return aMatch?.matchStatus === "RESULT" // "RESULT" or "BEFORE"
        ? "종료"
        : matchTimeFor(aMatch.startDate);
    };
    let Data: any[] = [];
    rawData.map((data: any) => {
      Data.push({
        homeTeamName: data.homeTeam?.name ?? "",
        awayTeamName: data.awayTeam?.name ?? "",
        homeTeamScore: data.homeScore,
        awayTeamScore: data.awayScore,
        gameDate: this.splitDateByHyphenFor(data.startDate),
        state: matchStatusFor(data),
        title: data.title || "",
        stadium: data.stadium || "",
      });
    });
    return Data;
  }

  protected async callAPI(league: any, date: string) {
    const todayMatchFor = (
      date: string,
      matchesInMonth: object[] | null
    ): object[] => {
      if (matchesInMonth === null) {
        throw new Error("Array is empty");
      }
      return matchesInMonth.filter((aMatch: any): boolean => {
        return this.getDateStringFromDate(new Date(aMatch.startDate)) === date;
      });
    };
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
      let matchesInToday: object[] | null = null;
      await request(options, (err: any, response: any) => {
        let matchesInMonth: object[] | null = JSON.parse(response.body).content;
        matchesInToday = todayMatchFor(date, matchesInMonth);
      });
      return matchesInToday || [];
    } catch (error) {
      throw error;
    }
  }
  protected makeLink(league: ESportsLeague, date: string): string {
    const makeDateToYYYYMM = (date: string): string => {
      return date.substring(0, 7);
    };
    return `https://apis.naver.com/nng_main/esports/v1/schedule/month?month=${makeDateToYYYYMM(
      this.splitDateByHyphen(date)
    )}&topLeagueId=${league}&relay=false`;
  }

  protected splitDateByHyphenFor(startDate: number): string {
    return this.splitDateByHyphen(
      this.getDateStringFromDate(new Date(startDate))
    );
  }
  protected splitDateByHyphen(date: string): string {
    return (
      date.substring(0, 4) +
      "-" +
      date.substring(4, 6) +
      "-" +
      date.substring(6, 8)
    );
  }
}

export { ESports };
