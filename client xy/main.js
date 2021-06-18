let client = document.querySelector(".target");

client.addEventListener("click", (event) => {
  const rect = client.getBoundingClientRect();
  console.log(rect);
  console.log(`${event.screenX} ${event.screenY}`);
  console.log(`${event.pageX} ${event.pageY}`);
});

// client x y 는 눈에 보이는 페이지 부터 길이를 재고
// page x y 는 숨겨진 페이지 부터 길이를 잰다.
// getBoundingClientRect 에서 width height 는 사물의 크기
// x y 는 보이는 화면부터 사물까지 길이를 잰다. (길이를 재는 방법은 좌측에서 부터 , 상단에서 부터 잰다.)

let scrollBy = document.querySelector(".btn_by");
let scrollTo = document.querySelector(".btn_to");
let scrollTarget = document.querySelector(".btn_into");

scrollBy.addEventListener("click", () => {
  window.scrollBy(0, 100);
});

scrollTo.addEventListener("click", () => {
  window.scrollTo(0, 100);
});

scrollTarget.addEventListener("click", () => {
  client.scrollIntoView(true);
});

// scrollBy 현재 화면 기준으로 100   (반복)
// scrollTo 절대적 위치 기준으로 100 (고정)
// scrollIntoView 요소 기준

/*
깨달은점

WEP API 안에서 해결할수도 있지만 
원하는 API들이 이미 있을수 있음을 인지

*/
