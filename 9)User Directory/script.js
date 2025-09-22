const userListContainer = document.querySelector(".userListContainer");
const searchUser = document.querySelector("#searchUser");

const users = [
  {
    id: 1,
    name: "Ali Khan",
    email: "ali.khan@example.com",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Sara Ahmed",
    email: "sara.ahmed@example.com",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Bilal Hussain",
    email: "bilal.hussain@example.com",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    id: 4,
    name: "Ayesha Noor",
    email: "ayesha.noor@example.com",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 5,
    name: "Hamza Ali",
    email: "hamza.ali@example.com",
    image: "https://randomuser.me/api/portraits/men/70.jpg",
  },
];

const renderUsers = (arr) => {
    userListContainer.innerHTML = "";

    if(arr.length === 0 ){
        userListContainer.innerHTML =  `<p class="userList">No users found</p>`;
        console.log('no users')
         return;
    }
  arr.map((item) => {
    let { id, name, email, image } = item;
    let devElem = document.createElement("div");
    devElem.className = "userList";
    devElem.innerHTML = `
        <div class="imageSection">
            <img src=${image} alt=${name}>
        </div>
        <div class="contentSection">
            <h1>${name}</h1>
            <p>${email}</p>
        </div>

    `;

    userListContainer.append(devElem);

  });
};

renderUsers(users)

// handle input
const handleSearchInputUsers = (e) => {
  const userSearch = e.target.value.toLocaleLowerCase();
  const filterSearchValues = users.filter((obj) => {
    return (
        obj.name.toLocaleLowerCase().includes(userSearch) ||
        obj.email.toLocaleLowerCase().includes(userSearch)
    )
  });

  renderUsers(filterSearchValues);
};
searchUser.addEventListener("input", handleSearchInputUsers);
