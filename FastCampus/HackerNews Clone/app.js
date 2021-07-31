const ajax = new XMLHttpRequest();
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";
const ITEM_URL = "https://api.hnpwa.com/v0/item/@id.json";

const root = document.querySelector("#root");

function getData(path) {
  ajax.open("GET", path, false);
  ajax.send();

  return JSON.parse(ajax.response);
}

// 뉴스 초기화면
function showNews() {
  const newsFeed = getData(NEWS_URL);
  const newsList = [];
  newsList.push("<ul>");

  for (let i = 0; i < 10; i++) {
    newsList.push(`
    <li>
    <a href=#${newsFeed[i].id}>
    ${newsFeed[i].title} (${newsFeed[i].comments_count})
    </a>
    </li>
    `);
  }
  newsList.push("</ul>");

  root.innerHTML = newsList.join("");
}

function newsDetail() {
  let hash = window.location.hash;
  hash = hash.slice(1);

  const itemFeed = getData(ITEM_URL.replace("@id", hash));

  root.innerHTML = `
  <h1>
  <span>${itemFeed.title}</span>
  </h1>
  
  <a href=#>목록으로</a>
  `;
}

addEventListener("hashchange", router);

function router() {
  if (window.location.hash === "") {
    showNews();
  } else {
    newsDetail();
  }
}

router();
