import "./styles.css";
const onClickadd = () => {
  //テキストボックスの値を取得
  const inputText = document.getElementById("add-text").value;
  alert(inputText);
  document.getElementById("add-text").value = "";
};
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickadd());
