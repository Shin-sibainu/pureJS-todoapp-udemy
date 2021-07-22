import "./styles.css";

const OnClickAdd = () => {
  const inputAdd = document.querySelector("#input-add");
  const inputValue = inputAdd.value;
  console.log(inputValue);
  inputAdd.value = "";

  //div生成
};

const addButtonElement = document.querySelector("#add-button");
addButtonElement.addEventListener("click", () => OnClickAdd());
