# Form Input Wave

![image](./image.gif)

## 배운점

#### CSS

```css
.form-control label span {
  display: inline-block;
  font-size: 18px;
  min-width: 5px;
  transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.form-control input:focus + label span,
.form-control input:valid + label span {
  color: lightblue;
  transform: translateY(-30px);
}
```

- input에 focus인 경우 `translateY(-30px)`를 통해 30px 위로 올림
- transform으로 이동할때 `transition`을 통해 자연스러운 움직임을 더함
- 이번경우에는 `cubic-bezier()`을 주서 자연스러운 움직임을 줌

#### 스크립트

```javascript
const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    .join("");
});
```

- label의 innerText를 하나하나 분리한 후 `<span>`을 덧씌움
- `<span>`에 `transition-delay`를 인덱스값마다 50ms씩 추가로 줘서 자연스러운 딜레이를 만듬
