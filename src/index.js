import "./styles.css";
const onClickadd = () => {
  const inputText = document.getElementById("add-text").value;
  alert(inputText);
  document.getElementById("add-text").value = "";
};
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickadd());
