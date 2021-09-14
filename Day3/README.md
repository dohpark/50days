# 제목

rotating navigation

## 배운점

#### CSS

- `+` 인접형제 결합자
  - 앞에서 지정한 요소의 바로 다음에 위치하는 형제 요소만 선택

```html
<ul>
  <li>One</li>
  <li>Two!</li>
  <li>Three</li>
</ul>
```

```css
li:first-of-type + li {
  color: red;
}
```

- 위의 예시를 보면 Two!의 색이 빨간색임

```css
li:first-of-type + li + li {
  color: red;
}
```

- 위의 경우는 Three의 색이 빨간색임

- 실제사용 예시

```css
.container.show-nav + nav li {
  transform: translateX(0);
  transition-delay: 0.3s;
}
```

- `.show-nav`는 close 버튼 누르면 없어지는 놈임.
- 위와 같이 작성하여 `.show-nav` 붙어있을 때 그 옆에 붙어 있는 `nav li`가 위와 같이 행동할 수 있도록 제어함
