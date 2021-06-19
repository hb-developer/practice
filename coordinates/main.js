const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");
const target = document.querySelector(".target");
const locationText = document.querySelector(".location_text");

window.addEventListener("mousemove", (event) => {
  const x = event.clientX;
  const y = event.clientY;
  horizontal.style.top = `${y}px`;
  vertical.style.left = `${x}px`;
  target.style.top = `${y}px`;
  target.style.left = `${x}px`;
  locationText.style.top = `${y}px`;
  locationText.style.left = `${x}px`;

  locationText.innerHTML = `${x},${y} `;
});
