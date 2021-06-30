const tag = document.querySelector(".tag");
function updatetag() {
  tag.innerHTML = `
  window.screen:${window.screen.width},${window.screen.height} <br/>
  window.outer:${window.outerWidth},${window.outerHeight} <br/>
  window.inner:${window.innerWidth},${window.innerWidth} <br/>
  window.client:${document.documentElement.clientWidth},${document.documentElement.clientHeight}
  `;
}

addEventListener("resize", () => {
  updatetag();
});

updatetag();
