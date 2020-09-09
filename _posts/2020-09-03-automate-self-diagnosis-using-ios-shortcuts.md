---
title: iOS 단축어를 이용하여 학생 건강 상태 자가 진단 자동화하기
tags: [ios, shortcuts]
author: 케미스트리
---

# ⚠️ 안내 사항
해당 자동화는 **이전 버전**의 학생 건강상태 자가진단만을 지원합니다. 새로운 버전에 대응하는 단축어의 경우 [이곳](https://github.com/ChemistryX/self-diagnosis-ios-shortcuts)에서 받으실 수 있습니다.



## 🚨 시작하기 전에

이 단축어(자동화)는 매일 자가 진단을 수행해야 하는 번거로움을 해소하기 위해서 만들어졌습니다. 이 단축어는 건강상의 이상이 없는 경우에만 사용해야 하며 만일 그렇지 않은 경우 직접 자가 진단을 진행해야 합니다. 이 단축어를 사용하여 발생할 수 있는 불이익은 사용자에게 있습니다.

## 준비 사항

iOS 12 이상의 iOS기기

[단축어](https://apps.apple.com/kr/app/%EB%8B%A8%EC%B6%95%EC%96%B4/id915249334) 애플리케이션

## 고유 키 값 가져오기(컴퓨터 필요)

이 부분은 `https://eduro.goe.go.kr/stv_cvd_co00_000.do?k=XXXXXXXXXX` 와 같은 형식의 URL을 이미 가지고 있다면 [단축어 설정하기](#단축어-설정하기)로 넘어가시면 됩니다.

만약 위와같은 URL을 모른다면 다음 단계를 수행합니다.

1. 학생 건강 상태 자가 진단 웹사이트에 접속합니다.
2. `학생정보 입력` 버튼을 클릭 후 인적 사항을 입력 후 확인 버튼을 클릭합니다.
3. 그 후 이동한 페이지에서 `개발자 도구`를 엽니다. (⌘ + ⌥ + I 또는 Ctrl + Shift + I)
4. 찾기 기능을 이용하여 `qstnCrtfcNoEncpt` 을 `id`로 가진 `input`태그의 `value`를 찾습니다.
   <img class="fix-scale" src="/assets/images/posts/self-diagnosis-key.png" height="50%" width="50%" >
5. 위에서 찾은 `value` 값을 적어둡니다.(다른 사람과 절대 공유해서는 안됩니다)

## 단축어 설정하기

1. 우측 상단에 있는 `+` 버튼을 누릅니다.
   <img class="fix-scale" src="/assets/images/posts/self-diagnosis-automation-1.jpeg" height="50%" width="50%" >
2. `개인용 자동화 생성`을 누릅니다.
   <img class="fix-scale" src="/assets/images/posts/self-diagnosis-automation-2.jpeg" height="50%" width="50%" >
3. `특정 시간`을 누릅니다.
   <img class="fix-scale" src="/assets/images/posts/self-diagnosis-automation-3.jpeg" height="50%" width="50%" >
4. 본인의 상황에 맞게 시간을 설정합니다.
   <img class="fix-scale" src="/assets/images/posts/self-diagnosis-automation-4.jpeg" height="50%" width="50%" >
5. 텍스트 부분을 `본인 자가 진단 링크 + 위에서 찾은 키 조합`으로 변경 후 나머지 부분을 따라서 만듭니다.(변수명은 상관 없음)
   <img class="fix-scale" src="/assets/images/posts/self-diagnosis-automation-5.jpeg" height="50%" width="50%" >
6. `네트워크` 섹션에 있는 URL을 다음과 같이 변경합니다.

   예) 본인 자가 진단 링크(`https://eduro.goe.go.kr/stv_cvd_co00_000.do?k=XXXXXXXXXX`) => `https://eduro.goe.go.kr/stv_cvd_co01_000.do?qstnCrtfcNoEncpt=(위에서 설정한 키 변수)&rspns01=1&rspns02=1&rspns07=0&rspns08=0&rspns09=0`

   그 후 `더보기`를 눌러 메소드를 `POST`로 변경합니다.
   <img class="fix-scale" src="/assets/images/posts/self-diagnosis-automation-6.png" height="50%" width="50%" >

7. 여기까지만 하면 기본적인 기능 구현은 완료됩니다. 하지만 정상적으로 진행되었는지 여부를 확인할 수 없기 때문에 아래 구성을 추가합니다.

   | :-------------------------------------------------------: | :-------------------------------------------------------: |
   | ![](/assets/images/posts/self-diagnosis-automation-7.png) | ![](/assets/images/posts/self-diagnosis-automation-8.png) |

8. `자동화 편집`으로 돌아가 `실행 전에 묻기`를 해제합니다.
   <img class="fix-scale" src="/assets/images/posts/self-diagnosis-automation-9.jpeg" height="50%" width="50%" >

## 마무리

   <img class="fix-scale" src="/assets/images/posts/self-diagnosis-automation-notification.jpeg" height="50%" width="50%" >
   이렇게 iOS에서 지원하는 `단축어` 애플리케이션을 이용하여 학생 건강 상태 자가 진단을 자동화시켜보았습니다. 
   
   다시한번 말씀드리지만 이 단축어는 건강상의 이상이 없는 경우에만 사용해야 하며 만일 그렇지 않은 경우 직접 자가 진단을 진행해야 하며 이 단축어를 사용하여 발생할 수 있는 불이익은 사용자에게 있다는 점을 알아두시길 바랍니다.

감사합니다.
