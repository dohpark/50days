# Expanding Cards

## 배운점

#### CSS

 - `overflow: hidden`
    - 오버플로우 발생시 해당 콘텐츠를 안 보이게 함
    - hidden 외에 visible, scroll, auto 있음
    - auto는 사용자 브라우저에 따라 다르게 설정됨

- `flex: 1`
    - `flex`는 플렉스 아이템이 자신의 컨테이너가 차지하는 공간에 맞추기 위해 크기를 키우거나 줄이는 방법을 설정

#### 스크립트

- `document.querySelectorAll('.panel')`로 panel 클래스 엘리먼트들 전부 배열로 나열하여 for문을 통해 하나하나 이벤트를 나열하는 것보다 버블링을 통해 상위 컨테이너에 이벤트 리스너를 줘도 된다
- 강사님은 이중 for문을 사용했지만, 얼마든지 for문을 사용 안하고 동작할 수 있게 수정 가능함.
- `script.js`에 더 세세하게 작성함