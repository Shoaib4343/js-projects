let mainTextInput = document.querySelector("#main-text-input");
let add = document.querySelector("#add");
let ul = document.querySelector("ul");

// api
const api = "https://6915d386465a9144626dbc72.mockapi.io/api/v1/todo";

// get data
async function fetchAll() {
  const response = await fetch(api);
  const data = await response.json();
  console.log(data);

  if (data) {
    ul.innerHTML = "";
  }
  data.forEach((element) => {
    console.log(element);
    let li = document.createElement("li");
    li.innerHTML = `
                <p class="li-text" >${element.text}</p>
                <input type="text" id="todo-update-text-input" placeholder="Update your task..." value="${element.text}" />
                <div class="list-btns">
                <button class="delete">Delete</button>
                <button class="edit">Edit</button>
                <button class="save">Save</button>
                </div>
        `;
    ul.append(li);

    // Delete
    let delButton = li.querySelector(".delete");
    let updateButton = li.querySelector(".edit");
    let saveButton = li.querySelector(".save");
    let updatedInputText = li.querySelector("#todo-update-text-input");
    let liText = li.querySelector(".li-text");

    delButton.addEventListener("click", async () => {
      let delId = element.id;
      await fetch(`${api}/${delId}`, {
        method: "DELETE",
      });
      fetchAll();
    });

    // update
    updateButton.addEventListener("click", () => {
      updateButton.style.display = "none";
      saveButton.style.display = "inline";
      updatedInputText.style.display = "inline";
      liText.style.display = "none";
    });

    // Save
    saveButton.addEventListener("click", async () => {
      let updatedValue = updatedInputText.value;
      let res = await updateData(updatedValue, element.id);
      if (res.status === 200) {
        // saveButton.style.display = "none";
        // updateButton.style.display = "inline";
        // updatedInputText.style.display = "none";
        // liText.style.display = "inline";
        fetchAll();
      }
    });
  });
}
fetchAll();

// post data
add.addEventListener("click", postData);

async function postData() {
  let inputValue = mainTextInput.value;
  let obj = {
    text: inputValue,
  };
  const response = await fetch(api, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
  mainTextInput.value = "";
  fetchAll();
}

// update funtion
async function updateData(value, id) {
  let obj = {
    text: value,
  };
  const res = await fetch(`${api}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });

  return res;
}
