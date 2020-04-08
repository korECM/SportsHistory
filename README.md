# SportsHistory
> 해당 날짜의 여러 경기 결과를 불러오는 Node.JS Module

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Downloads Stats][npm-downloads]][npm-url]

소개

![](../header.png)

## 설치 방법


## 사용 예제

```javascript
import { SportsHistory } from "sports-history";

let sh = new SportsHistory();

sh.worldSoccer
  .getHistory("epl", new Date("2020/1/11"))
  .then((data) => console.log(data));

sh.worldBaseball
  .getHistory("mlb", new Date("2020/05/16"))
  .then((data) => console.log(data));

sh.eSports
  .getHistory("starcraft2", new Date("2020/04/11"))
  .then((data) => console.log(data));

sh.koreaBaseball
  .getHistory("kbo", new Date("2020/04/22"))
  .then((data) => console.log(data));

sh.worldBasketball
  .getHistory("nba", new Date("2020/03/09"))
  .then((data) => console.log(data));
/*
[ { homeTeamName: 'LG',
    awayTeamName: '삼성',
    homeTeamScore: '0',
    awayTeamScore: '0',
    gameDate: '2020-04-22',
    state: '18:30',
    title: '',
    stadium: '잠실' },
  { homeTeamName: 'SK',
    awayTeamName: '두산',
    homeTeamScore: '0',
    awayTeamScore: '0',
    gameDate: '2020-04-22',
    state: '18:30',
    title: '',
    stadium: '문학' },]
*/
```
_더 많은 예제와 사용법은 [Wiki][wiki]를 참고하세요._

## 개발 환경 설정



## 업데이트 내역

* 0.0.1
    * 작업 진행 중

## 정보

윤종원 – [블로그](https://velog.io/@jeffyoun) – youncookiexpire@kakao.com

MIT 라이센스를 준수하며 ``LICENSE``에서 자세한 정보를 확인할 수 있습니다

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://korecm.github.io/SportsHistory/
