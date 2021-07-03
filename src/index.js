import "./styles.css";
const onClickadd = () => {
  //テキストボックスの値を取得
  const inputText = document.getElementById("add-text").value;
  alert(inputText);
  document.getElementById("add-text").value = "";

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;
  div.appendChild(li);
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickadd());
