# SportsHistory
> 해당 날짜의 여러 경기 결과를 불러오는 Node.JS Module

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Downloads Stats][npm-downloads]][npm-url]

## 지원하는 종목
* 국내 야구
  * KBO 리그
* 국내 농구
  * 프로 농구
  * 여자 프로 농구
* 국내 축구
  * K리그 1
  * K리그 2
  * 국가대표
  * AFC 챔피언스 리그
* 해외 야구
  * 메이저리그
  * 일본 프로야구
* 해외 농구
  * NBA
* 해외 축구
  * 프리미어리그
  * 라리가
  * 분데스
  * 세리에 A
  * 리그 1
  * 챔피언스 리그
  * 유로파 리그
  * FA컵
  * EFL컵
  * 코파델레이
* E-Sports
  * 리그오브레전드
  * 스타크래프트 2
  * 오버워치


## 설치 방법
```sh
npm install sports-history
```
or
```sh
yarn add sports-history
```

## 사용 예제

```javascript
import SportsHistory from "sports-history";

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
_더 많은 예제와 사용법은 [Docs][wiki]를 참고하세요._

## 개발 환경 설정



## 업데이트 내역

* 0.0.1
    * 초기 버전 배포

## 정보

윤종원 – [블로그](https://velog.io/@jeffyoun) – youncookiexpire@kakao.com

MIT 라이센스를 준수하며 ``LICENSE``에서 자세한 정보를 확인할 수 있습니다

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://travis-ci.org/korECM/SportsHistory.svg?branch=master
[travis-url]: https://travis-ci.org/korECM/SportsHistory
[wiki]: https://korecm.github.io/SportsHistory/
