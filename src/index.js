import "./styles.css";
const onClickadd = () => {
  //テキストボックスの値を取得
  const inputText = document.getElementById("add-text").value;

  document.getElementById("add-text").value = "";

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deletElement(deleteButton.parentNode);
  });
  completeButton.addEventListener("click", () => {
    deletElement(completeButton.parentNode);

    //完了したtodoへの追加処理
    const addTarget = completeButton.parentNode;
    //todo内容を取得
    const text = addTarget.firstElementChild.innerText;

    //div以下を削除
    addTarget.textContent = null;
    //liタグ生成
    const li = document.createElement("li");
    li.innerText = text;
    console.log(li);
    const backbutton = document.createElement("button");
    //divの子要素に内容を設定
    backbutton.innerText = "戻す";
    addTarget.appendChild = li;
    addTarget.appendChild = backbutton;
    console.log(addTarget);
    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  document.getElementById("incomplete-list").appendChild(div);
};
//要素を削除
const deletElement = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickadd());
