# Split Landing Page

![image](./image/image.gif)

## 배운점

#### CSS

- 중앙정렬 방법
  - left와 translateX를 활용하여 중앙정렬할 수 있음! 자주 사용하는 방법이니 알아두자!

```css
h1 {
  left: 50%;
  transform: translateX(-50%);
}
```

- ::before 활용법
  - content에 아무것도 안주고 background-color를 설정할 수도 있음
  - background-url과 같이 작성시 막히기 때문

```css
.split.right {
  right: 0;
  background: url(사진주소);
  background-repeat: no-repeat;
  background-size: cover;
}

.split.right::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: var(--right-bg-color);
}
```

#### 스크립트

- addEventListener("mouseenter", fn)

  - mouse를 올리면 이벤트 발생

- addEventListener("mouseleave", fn)
  - mouse를 내리면 이벤트 발생

```javascript
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");

left.addEventListener("mouseenter", () =>
  container.classList.add("hover-left")
);
left.addEventListener("mouseleave", () =>
  container.classList.remove("hover-left")
);

right.addEventListener("mouseenter", () =>
  container.classList.add("hover-right")
);
right.addEventListener("mouseleave", () =>
  container.classList.remove("hover-right")
);
```
