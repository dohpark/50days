# hidden search

## 내용

- search 버튼을 누를 시 왼쪽에 `input[type=text]`가 나타나도록 만들기

## 배운점

#### CSS

1. search 컨테이너의 position을 relative로 주고 button과 input의 height weight를 50px씩 준다.
2. button의 position이 fixed로 주어 input과 겹쳐보이게 만든다 (fixed의 부모의 position이 relative이기 때문에 가능)
3. button을 클릭 시 search에 .active 클래스를 주어 css에 변화를 만든다
4. `.search.active .input`는 weight 200px로 늘어나도록 한다
5. `.search.active .btn`은 `transform: translateX(198px)` 198px만큼 오른쪽으로 이동하도록 한다
