import "./styles.css";

const OnClickAdd = () => {
  const inputAdd = document.querySelector("#input-add");
  const inputValue = inputAdd.value;
  inputAdd.value = "";

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //li生成
  const li = document.createElement("li");
  li.innerHTML = inputValue;

  //liの子要素にdivを追加
  div.appendChild(li);

  //ulの子要素にdivを追加
  const imcompleteUl = document.querySelector("#imcomplete-ul");
  imcompleteUl.appendChild(div);

  //button要素を生成
  const completeButton = document.createElement("button");
  completeButton.innerHTML = "完了";
  completeButton.addEventListener("click", () => {
    const deleteTarget = completeButton.parentNode;
    console.log(deleteTarget);
    //ul(親)要素を取得
    const parentUl = document.querySelector("#imcomplete-ul");
    parentUl.removeChild(deleteTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "削除";
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.parentNode;
    //ul(親)要素を取得
    const parentUl = document.querySelector("#imcomplete-ul");
    parentUl.removeChild(deleteTarget);
  });

  //divの子要素にButtonを追加
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
};

const addButtonElement = document.querySelector("#add-button");
addButtonElement.addEventListener("click", () => OnClickAdd());
