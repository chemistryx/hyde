# [![header](https://raw.githubusercontent.com/ChemistryX/hyde/master/readme-header.png)](https://chemistryx.github.io/hyde/)

# Hyde

[Jekyll](https://https://jekyllrb.com/)로 만들어진 개인 블로그 / 포트폴리오입니다.

실제 데모는 [이곳](https://chemistryx.github.io/hyde/)에서 보실 수 있습니다.

## 설치하기

`참고` [Ruby 2.4](https://www.ruby-lang.org)이상이 설치되어 있어야 합니다.

```
bundle install
```

## 설정하기

**1. `_config.yml` 수정**

```yaml
title: Hyde
description: >-
  Build your own portfolio <br>
  with Hyde.
url: "https://chemistryx.github.io/hyde"
github: ChemistryX
email: changeme@chemistryx.me
google_analytics: "UA_TOKEN"

exclude: [README.md, Gemfile, Gemfile.lock]

comments:
  enabled: true
  repo: "REPO_COMMENTS_PATH"
  issue-term: pathname
  theme: github-light
```

`title`: 웹사이트 전반에서 표시될 이름입니다.(네비게이션 바, 푸터 등)

`description`: 초기 페이지 설명 문구에 들어갈 내용입니다.

`url`: 사이트의 주소를 적어주세요. 사이트맵 및 기타 부가기능을 설정하는 데 필요합니다.

`github`: 본인 GitHub 사용자 이름을 적어주세요. 푸터에 있는 버튼에 사용됩니다.

`email`: 본인의 이메일을 적어주세요. 소셜 기능 및 푸터에 있는 버튼에 사용됩니다.

`google_analytics`: [Google Analytics](https://analytics.google.com)에서 발급한 추적 ID를 입력해주세요.

`comments`: 블로그 하단부에 노출되는 댓글 설정입니다. 댓글은 GitHub 계정이 있어야 달 수 있습니다. 자세한 내용은 [이곳](https://utteranc.es)을 참조하세요.

**2. 기타 부가적인 내용 수정**

`robots.txt`: 기존 URL을 본인 사이트 URL에 맞게 수정

`assets/images/site.webmanifest`: 내용을 본인 사이트에 맞게 수정

- 그 외 내용들을 코드 내부에 주석으로 달아놓았으니 참고하시길 바랍니다.

## 실행하기

```
jekyll serve
```

## 글 작성하기

**1. `_data/authors.yml`에 본인 정보 등록**

```yaml
- name: 웹사이트에서 표시될 이름
  email: 글 하단 signature에 표시될 이메일
  image: 프로필 이미지
```

**2. `_tags`디렉토리에 사용할 새 태그 생성**

```
---
title: 웹사이트에서 표시될 이름
identifier: post에서 사용될 식별자(소문자, 띄어쓰기 대신 하이픈 사용)
description: 태그 페이지에 표시될 설명
---
```

**3. `_posts`디렉토리에 `yyyy-mm-dd-제목.md`파일 생성**
**4. 해당 파일 Front Matter 작성**

```
---
title: 웹사이트에서 표시될 이름
tags: [앞서 작성한 태그의 identifier, 여러개 가능]
author: 앞서 작성한 작성자의 name
---
```

## 포트폴리오 추가하기

**1. `_data/portfolio.yml`에 하단 구문 추가**

```yaml
- title: 표시될 이름
  description: 이름 하단에 들어갈 설명
  image: <assets/images/portfolio/>내에 위치한 이미지 파일의 이름(확장자 포함)
```

## 프로젝트 추가하기

**1. `_projects`디렉토리에 `제목.md`파일 생성**

**2. 해당 파일 작성**

```yaml
---
title: 프로젝트 제목
description: 프로젝트 설명
image: <assets/images/projects/>내에 위치한 이미지 파일의 이름(확장자 포함)
date: 프로젝트 시행 날짜(yyyy-mm-dd) - 정렬에 사용됩니다.
---
내용
```
