# Blurry Image

![image](./image.gif)

## 배운점

#### CSS

- css `filter` 속성
  - 흐림 효과나 색상 변형 등 그래픽 효과를 요소에 적용할 수 있음
  - blur(), contrast(), grayscale(), brightness(), opacity(), saturate() 등 다양함

#### 스크립트

- setInterval()을 통해 opacity 적용하는데의 시간을 조절함
- clearInterval()을 통해 중지

```javascript
function scale (number, inMin, inMax, outMin, outMax) {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
```

- 위의 함수를 통해 0에서 1을 100분위 또는 0에서 30을 100분위로 나타냈음
