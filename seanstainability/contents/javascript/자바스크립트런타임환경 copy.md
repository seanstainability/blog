---
date: '2021-08-19'
title: '실행 콘텍스트'
categories: ['자바스크립트']
summary: '실행 콘텍스트란?'
thumbnail: 'resources/js-image.png'
---

# 실행 콘텍스트란?

함수를 실행할 때 필요한 환경 정보를 담은 객체

## Lexical Environment

- 현재 문맥의 식별자 정보 → 식별자 정보를 끌어올리는 호이스팅의 결과
  - 함수 선언문의 경우 전체를 끌어올리고, 함수 표현식은 선언만 끌어올린다.
- 현재 문맥에 관련 있는 외부 식별자 정보 → 변수의 유효범위인 scope와 scope chain 현상을 만들어낸다.
  - 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다. → scope
  - inner 함수의 outerEnvironmentReference는 outer 함수의 Lexical Environment → scope chain

### call stack

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/af26c9a6-c59f-4a2d-a2e1-a2931ef7aec1/execution_context.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/af26c9a6-c59f-4a2d-a2e1-a2931ef7aec1/execution_context.png)
[출처: 코어 자바스크립트 - 정재남]
