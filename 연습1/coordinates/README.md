# CSS

```css
position: absolute; // 독립적인 위치를 지정
transform: translate(x, y); // 요소를 기준으로 x y 위치를 지정
```

# JS

자바스크립트 에서 CSS 위치를 지정할때는 style 속성을 사용한다.

```js
Element.style.top = `${y}px`; // 세로축
Element.style.left = `${x}px`; // 가로축
```

단위를 붙여야 하기 때문에 보통 백틱 템플릿을 사용한다.
