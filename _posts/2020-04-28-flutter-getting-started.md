---
title: Flutter 시작하기
tags: [dart, flutter]
author: 케미스트리
---

![flutter-logo](/assets/images/posts/flutter-logo.png)

## 🔬 Flutter란?

아마 [React Native](https://reactnative.dev/)를 사용해보셨거나 하이브리드 앱 개발에 관심이 있으신 분이라면 아마 [Flutter](https://flutter.dev/)에 대해서 한번 쯤은 들어 보셨을 겁니다.

> Flutter(플러터)는 하나의 코드베이스로 모바일, 웹, 데스크톱에서 네이티브로 컴파일 되는 구글의 아름다운 UI 툴킷입니다.

Flutter는 2017년 5월 Google에서 발표한 오픈 소스 크로스 플랫폼 애플리케이션 개발 프레임워크로 Flutter를 통해 안드로이드, iOS는 물론, ~~아직 완벽하진 않지만~~ Web, Desktop Application([관련 문서](https://flutter.dev/desktop))까지 만들 수 있습니다. 그렇다면 Flutter만의 특징에는 무엇이 있을까요?

## 🎈 Flutter의 특징

### 📝 Widget

다른 프레임워크와 비교했을 때 가장 두드러지는 Flutter만의 특징이라고 하면 바로 Widget입니다. Flutter는 OEM 위젯들을 사용하지 않고 자체 구현한 위젯을 사용하기 떄문에 빠른 속도와 확장성을 제공합니다. Flutter에서는 Text, Icon 부터 Row, Column, Padding과 같은 레이아웃 조차 모두 Widget으로 이루어져 있습니다.

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(
    Container(
      Center(
        child: Text('Hello world!'),
      ),
    ),
  );
}
```

코드에서 볼 수 있듯이 Flutter역시 다른 언어들처럼 `main()`함수를 통해 시작하는 것을 볼 수 있습니다. 또한 `runApp()`함수 안에 여러 Widget들이 계층적으로 구성되어 있는 모습을 볼 수 있는데요, 이를 다이어그램으로 표현하면 다음과 같습니다.
![flutter-diagram](/assets/images/posts/flutter-diagram.png)
지금은 매우 단순한 코드이기 때문에 한눈에 구조를 파악할 수 있다는 장점이 있지만 코드가 커지게 되면 오히려 더 구분하기 어려워질 수 있다는 단점도 존재합니다.

### 🚀 성능 (vs React Native)

|                           _React Native_                           |                        _Flutter_                         |
| :----------------------------------------------------------------: | :------------------------------------------------------: |
| ![react-native-logic](/assets/images/posts/react-native-logic.png) | ![flutter-logic](/assets/images/posts/flutter-logic.png) |

사진에서 볼 수 있듯이 React Native의 경우 OEM 위젯에 접근하기 위해 Bridge를 거쳐야 하는데 이 부분에서 성능 저하가 발생합니다. 반면 Flutter의 경우 별도의 Bridge를 거치지 않고 Dart에서 네이티브 코드로 컴파일 해주므로 성능 저하가 발생하지 않습니다.

### 🔥 Hot reload

말 그대로 매우 빠른 리로드 기능, Flutter에서는 Hot reload 기능을 지원합니다. 따라서 코드에 변경 사항이 있을 경우 Hot reload 기능을 통해 변경 사항을 바로 반영할 수 있어 보다 빠른 개발이 가능합니다.

![flutter-hot-reload](/assets/images/posts/flutter-hot-reload.gif)
_Hot reload 기능을 사용하는 모습 (출처: https://flutter.dev/docs/development/tools/hot-reload)_

## 🍻 마치며

지금까지 Flutter에 대해서 간략하게나마 알아보았는데요, Flutter는 다른 크로스 플랫폼 프레임워크들에 비해 출시한 지 얼마 되지 않았고 그래서인지 Flutter에서 제공하는 플러그인도 빈약한 부분이 꽤 있습니다. 그렇지만 제 경우 Java를 사용해오던 입장이어서 Dart언어가 Java와 상당히 유사하다는 점과 매우 빠른 시간 안에 두가지 플랫폼의 앱을 개발, 출시할 수 있다는 점이 Flutter를 선택하는 데 있어서 크게 작용하였습니다. 지금까지 긴 글 읽어주셔서 감사드리며 다음 포스트는 [Flutter 개발 환경 구성하기](/blog/setup-flutter-dev-env)로 찾아뵙겠습니다.

감사합니다.

<small>참고 자료: [React Native vs. Flutter · Devbridge](https://www.devbridge.com/articles/react-native-vs-flutter/)</small>
