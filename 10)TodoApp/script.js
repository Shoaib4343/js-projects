const listContainer = document.querySelector(".list-container");
const userInputBox = document.querySelector("#user-input-box");
const addButton = document.querySelector("#add-button");

let str = [];

const renderTasks = (arr) => {
  listContainer.innerHTML = "";
  arr.map((obj) => {
    const devElem = document.createElement("div");
    devElem.classList.add("list");
    devElem.innerHTML = `<p>${obj.text}</p>`;
    let delButton = document.createElement("button");
    delButton.innerHTML = "Delete";
    delButton.classList.add("delete-button");
    delButton.addEventListener("click", () => {
      handleRemoveList(obj.id);
    });
    devElem.append(delButton);

    listContainer.append(devElem);
  });
};

renderTasks(str);

const handleRemoveList = (id) => {
  const fileterList = str.filter((elm) => {
    return elm.id !== id;
  });
  str = fileterList;
  renderTasks(str);
};

const handleAddButton = () => {
  const obj = {
    id: Date.now(),
    text: userInputBox.value,
  };

  str.push(obj);
  userInputBox.value = "";
  renderTasks(str);
};

addButton.addEventListener("click", handleAddButton);
