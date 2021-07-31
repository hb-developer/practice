const ajax = new XMLHttpRequest();
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";
const ITEM_URL = "https://api.hnpwa.com/v0/item/@id.json";

const root = document.querySelector("#root");
const ul = document.createElement("ul");
root.appendChild(ul);

function getData(path) {
  ajax.open("GET", path, false);
  ajax.send();

  return JSON.parse(ajax.response);
}

const newsFeed = getData(NEWS_URL);
console.log(newsFeed);

addEventListener("hashchange", function () {
  const span = document.createElement("span");
  const h1 = document.createElement("h1");

  let hash = window.location.hash;
  hash = hash.slice(1);
  console.log(hash);

  const ItemFeed = getData(ITEM_URL.replace("@id", hash));
  h1.innerHTML = ItemFeed.title;
  span.appendChild(h1);
  root.appendChild(span);
});

for (let i = 0; i < 10; i++) {
  const div = document.createElement("div");

  div.innerHTML = `
  <li>
    <a href=#${newsFeed[i].id}>
      ${newsFeed[i].title} (${newsFeed[i].comments_count})
    </a>
  </li>
  `;

  ul.appendChild(div.firstElementChild);
}
