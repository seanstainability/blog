---
date: '2020-07-29'
title: 'MVC 패턴'
categories: ['Web', 'MVC', 'Architecture']
summary: '홈페이지를 운영하는 많은 사람들 또는 기업들이 검색 페이지 최상단에 보여지게 하기 위해 어떤 최적화 작업을 하는지 알아보자.'
thumbnail: './test.png'
---

# MVC 패턴

![MVC 패턴](https://s3.ap-northeast-2.amazonaws.com/opentutorials-user-file/module/327/1262.png)

1. 사용자가 웹사이트에 접속한다.(USES)
2. 컨트롤러는 사용자가 요청한 웹페이지를 서비스하기 위해 모델을 호출한다.(MANIPULATES: 조작)
3. 모델은 데이터베이스나 파일 같은 데이터 소스를 제어한 후에 그 결과를 리턴한다.
4. 컨트롤러는 모델이 리턴한 결과를 뷰에 반영한다.(UPDATES)
5. 데이터가 반영된 결과는 뷰에 보여진다.(SEES)

출처: [생활코딩](https://opentutorials.org/course/697/3828)
