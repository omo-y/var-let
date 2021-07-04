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

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {});
  // completeButton.addEventListener("click", () => {
  //   alert("完了");
  // });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    const deletetarget = deleteButton.parentNode;
    document.getElementById("incomplete-list").removeChild(deletetarget);
  });

  completeButton.addEventListener("click", () => {
    const completetarget = completeButton.parentNode;
    const saveText = document.getElementById("incomplete-list");
    console.log(saveText);
    document.getElementById("incomplete-list").removeChild(completetarget);
    console.log("完了1");
    //div生成
    const div = document.createElement("div");
    div.className = "list-row";
    console.log(div);
    //liタグ生成
    const li = document.createElement("li");
    li.innerText = saveText;

    const modosuButton = document.createElement("button");
    modosuButton.innerText = "戻す";
    div.appendChild(li);
    div.appendChild(modosuButton);
    document.getElementById("complete-list").appendChild(div);
  });

  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickadd());
