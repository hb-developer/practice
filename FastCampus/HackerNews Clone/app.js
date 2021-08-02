const ajax = new XMLHttpRequest();
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";
const ITEM_URL = "https://api.hnpwa.com/v0/item/@id.json";

const root = document.querySelector("#root");

let store = {
  currentpage: 1,
};

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

  for (let i = (store.currentpage - 1) * 10; i < store.currentpage * 10; i++) {
    newsList.push(`
    <li>
    <a href=#${newsFeed[i].id}>
    ${newsFeed[i].title} (${newsFeed[i].comments_count})
    </a>
    </li>
    `);
  }
  newsList.push("</ul>");
  newsList.push(`
  <a href=#/page/${
    store.currentpage < 2 ? store.currentpage : store.currentpage - 1
  }>이전 목록으로</a>
  <a href=#/page/${store.currentpage + 1}>다음 목록으로</a>
  `);

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
  
  <a href=#/page/${store.currentpage}>목록으로</a>
  `;
}

addEventListener("hashchange", router);

function router() {
  if (window.location.hash === "") {
    showNews();
  } else if (document.location.href.indexOf("page") >= 0) {
    store.currentpage = Number(window.location.hash.slice(7));
    showNews();
  } else {
    newsDetail();
  }
}

router();
