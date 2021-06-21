const items = document.querySelector(".items");
const input = document.querySelector(".footer__input");
const addBtn = document.querySelector(".footer__button");

//

function onAdd() {
  //  1.사용자가 입력한 텍스트를 받아온다.
  const text = input.value;
  if (text === "") {
    input.focus();
    return;
  }

  //  2.새로운 아이템을 만든다 (아이템 + 삭제)
  const item = createItem(text);
  //  3. 컨테이너 안에 item 을 추가한다.
  items.appendChild(item);
  //  4. 값을 비우고 포커싱을 해준다.
  input.value = "";
  input.focus();
}

// addBtn 이벤트
addBtn.addEventListener("click", () => {
  onAdd();
});

// Enter 이벤트
input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    onAdd();
  }
});

// 아이템 생성함수
function createItem(text) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item__row");

  const item = document.createElement("div");
  item.setAttribute("class", "item");

  const itemName = document.createElement("span");
  itemName.setAttribute("class", "item__name");
  itemName.textContent = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "item__delete");

  deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
  deleteBtn.addEventListener("click", () => {
    itemRow.remove();
  });

  const itemDivider = document.createElement("div");
  itemDivider.setAttribute("class", "item__divider");

  item.appendChild(itemName);
  item.appendChild(deleteBtn);
  itemRow.appendChild(item);
  itemRow.appendChild(itemDivider);

  return itemRow;
}
