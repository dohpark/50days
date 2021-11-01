# Progress Steps

## 배운점

#### CSS

- `progress-container::before {content: ''}`

  - 전체 프로그레스 바를 before로 사용함
  - `content: ''` 굳이 content를 넣지 않아도 이렇게 사용가능하다!

- `:root {}`

  - 색을 하나의 변수로 사용하여 정리가 가능하다!
  - 리액트의 경우 palette를 만들기 때문에 불필요하지만 그냥 html과 css로만 사용할 경우 편리할것 같다!

#### 스크립트

- update 함수를 좀 손봐서 성능을 더 좋게 만들 수 있지 않을까 생각해봤지만 딱히 떠오르지는 않았다.
- `addEventListenr`에 각각 classList를 추가하거나 삭제하거나를 통해 update함수 내의 for문을 지울 수 있지만 코드 중복이 일어나기에 망설여지긴 한다.
