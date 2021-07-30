const ajax = new XMLHttpRequest();
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";
const ITEM_URL = "https://api.hnpwa.com/v0/item/@id.json";

const root = document.querySelector("#root");
const ul = document.createElement("ul");
root.appendChild(ul);

ajax.open("GET", NEWS_URL, false);
ajax.send();

addEventListener("hashchange", function () {
  const span = document.createElement("span");
  const h1 = document.createElement("h1");

  let hash = window.location.hash;
  hash = hash.slice(1);
  console.log(hash);
  ajax.open("GET", ITEM_URL.replace("@id", hash), false);
  ajax.send();

  const ItemFeed = JSON.parse(ajax.response);
  h1.innerHTML = ItemFeed.title;
  span.appendChild(h1);
  root.appendChild(span);
});

const newsFeed = JSON.parse(ajax.response);
console.log(newsFeed);

for (let i = 0; i < 10; i++) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.innerHTML = `${newsFeed[i].title} (${newsFeed[i].comments_count})`;

  a.href = `#${newsFeed[i].id}`;
  li.appendChild(a);
  ul.appendChild(li);
}
