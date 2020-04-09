# SportsHistory

> 해당 날짜의 경기 결과를 불러오는 Node.JS Module

![npm](https://img.shields.io/npm/v/sports-history?color=brightgreen&style=flat-square)
![npm bundle size](https://img.shields.io/bundlephobia/min/sports-history?style=flat-square)
![Travis (.org)](https://img.shields.io/travis/korECM/SportsHistory?color=blue&style=flat-square)
[![GitHub stars](https://img.shields.io/github/stars/korECM/SportsHistory?color=yellow&style=flat-square)](https://github.com/korECM/SportsHistory/stargazers)
[![HitCount](http://hits.dwyl.com/korECM/sports-history.svg)](http://hits.dwyl.com/korECM/sports-history)
[![GitHub license](https://img.shields.io/github/license/korECM/SportsHistory?color=blue&style=flat-square)](https://github.com/korECM/SportsHistory/blob/master/LICENSE)

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

## 사용 방법

### `SportsHistory`

`SportsHistory` 클래스는 다음과 같은 프로퍼티를 가지고 있습니다.

* worldSoccer
* koreaSoccer
* koreaBasketball
* worldBasketball
* koreaBaseball
* worldBaseball
* eSports

각 프로퍼티는 운동 종목을 의미하며 해당 운동에 대한 `getHistory` 함수를 호출하면 됩니다.

### `getHistory(leagueType, date) → Promise< Information >`

`leagueType`은 경기가 열리는 리그를 선택하는 `string` 파라미터입니다.

ex)

| 리그 이름  | leagueType |
| :----: | :--------: |
| 프리미어리그 |    epl     |
|  라리가   |  primera   |

자세한 내용은 [Docs][wiki]를 참고하세요.

`date`의 경우 `Date` 자료형으로 필요한 경기가 열린 날짜를 의미합니다.

따라서 다음과 같은 형태로 호출하면 됩니다.

```javascript
let data = await new SportsHistory().worldSoccer.getHistory("epl", new Date("2020/02/20"));
```

### `Information`

`Information`은 경기 데이터를 담고있는 인터페이스입니다.

`getHistory` 함수를 통해 데이터를 요청하면 값은 `Information[]`가 `Promise`에 담긴 형태로 전달됩니다.

`Information`이 가지고 있는 정보는 다음과 같습니다.

|     프로퍼티      |                        설명                         |
| :-----------: | :-----------------------------------------------: |
| awayTeamName  |                     Away 팀 이름                     |
| awayTeamScore |                     Away 팀 점수                     |
| homeTeamName  |                     Home팀 이름                      |
| homeTeamScore |                     Home 팀 점수                     |
|   gameDate    |               경기가 치러진 또는 경기가 치러질 날짜               |
|     state     | 경기의 진행 상태. 종료된 경기면 `종료` 아니라면 경기 시작 시간 Ex) `16:00` |
|     title     |        경기에 이름. 해당 경기에 특별한 이름이 없는 경우 빈 문자열         |
|   gameDate    |           경기가 치러지는 장소. 데이터가 없는 경우 빈 문자열           |

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

## 업데이트 내역

* 0.0.3
  * NPM Module Description 추가 및 한글 설명 문구 수정
* 0.0.2
  * 테스트 에러나던 버그 수정
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
