---
date: '2021-08-13'
title: 'Web APIs'
categories: ['브라우저']
summary: 'Web APIs의 전체적인 그림 그려보기'
thumbnail: 'resources/browser.png'
---

# Web APIs

- 기능을 제공하는 창구를 API라고 한다. Web APIs는 브라우저의 기능을 제공하는 창구이다.
- [Web APIs](https://developer.mozilla.org/en-US/docs/Web/API)에서 제공하는 기능은 정말 많다.
- Window는 모든 Web API들이 들어 있는 전역 객체이며, 페이지를 포함한 브라우저의 전체 창을 나타낸다.
- Window 객체 하위에 있는 대표적인 APIs로는 DOM APIs, BOM APIs, JavaScript APIs가 있다.
  - DOM APIs는 Document 객체로 대표되며, 페이지가 표시되는 부분을 나타낸다.
  - BOM APIs는 Navigator 객체로 대표되며, 브라우저 자체에 관한 메타 정보가 담겨있다.

## 로드

- DOMContentLoaded 이벤트는 HTML만 완료가 되면 발생한다.
- load 이벤트는 모든 리소스가 다 다운로드된 다음에 발생한다.
- beforeunload는 브라우저에서 페이지를 내리기 전에 발생된다. 새로고침을 눌러보면 확인해볼 수 있다.

### script 태그에 head + defer 옵션을 적용한 경우

- HTML 파싱과 자바스크립트 로딩을 병렬로 실행하고, HTML 준비가 끝나면 자바스크립트를 실행한다.
- 자바스크립트 파일 → DOMContentLoaded → load 순으로 로드가 완료된다.

## 크기

- window.screen.width : 모니터 사이즈
- window.outerWidth : 브라우저 전체 사이즈
- window.innerWidth : 스크롤바 영역까지를 포함한 페이지가 표기되는 부분 전체 사이즈
- document.documentElement.clientWidth : 스크롤바 영역을 제외한 페이지가 표기되는 부분 전체 사이즈

## 위치(좌표)

### Element.getBoundingClientRect()

- document 맨좌측 최상단이 (0, 0)이 된다.
  - CSS에서는 position이 absolute 또는 relative일 때, (0, 0) 기준이 맨우측 최하단이 되므로 헷갈리지 말자.
- 요소의 width와 height, 요소의 맨좌측 최상단 및 맨우측 최하단 좌표를 나타내주는 left, right(x축), top, bottom(y축) 포지션을 알 수 있다.

### Client x, y & Page x, y

- 이벤트에 들어있는 x, y 값들로, Client x, y는 브라우저 document 창에서 얼마나 떨어져 있는가를 나타내고, Page x, y는 스크롤 영역을 포함한 전체 페이지 콘텐츠 영역에서 떨어진 위치를 나타낸다.

### 특정 위치로 이동하기

- window.scrollBy
- window.scrollTo
- element.scrollIntoView
