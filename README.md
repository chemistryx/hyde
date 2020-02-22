# Hyde

> Dr. Jekyll and Mr. Hyde

[Jekyll](https://https://jekyllrb.com/)로 만들어진 개인 블로그 / 포트폴리오입니다.

실제 데모는 [이곳](https://chemistryx.me/)에서 보실 수 있습니다.

## 설치하기

`참고` [Ruby 2.4](https://www.ruby-lang.org)이상이 설치되어 있어야 합니다.

```
bundle install
```

## 실행하기

```
jekyll serve
```

## 글 작성하기

1. `_data/authors.yml`에 본인 정보 등록

```yaml
- name: 웹사이트에서 표시될 이름
  email: 글 하단 signature에 표시될 이메일
  image: 프로필 이미지
```

2. `_tags`디렉토리에 사용할 새 태그 생성

```
---
title: 웹사이트에서 표시될 이름
identifier: post에서 사용될 식별자(소문자, 띄어쓰기 대신 하이픈 사용)
description: 태그 페이지에 표시될 설명
---
```

3. `_posts`디렉토리에 `yyyy-mm-dd-이름.md`파일 생성
4. 해당 파일 Front Matter 작성

```
---
title: 웹사이트에서 표시될 이름
tags: [앞서 작성한 태그의 identifier, 여러개 가능]
author: 앞서 작성한 작성자의 name
---
```
