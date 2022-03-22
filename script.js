async function getUsers() {
  const data = await fetch(
    "https://62387d1e0a54d2ceab764ee9.mockapi.io/users",
    { method: "GET" }
  );
  const users = await data.json();
  // console.log(users);
  document.querySelector(".user-list").innerHTML = ``;

  users.forEach((user) => createUser(user));
}

function createUser({ avatar, name, createdAt, id }) {
  const info = document.createElement("div");
  info.setAttribute("class", "container");

  info.innerHTML = `
  <div class = "avatar-container">
  <img class = "avatar" src =${avatar} width ="75px" height="75px"/>
  </div>
  
  <div class="details">
  <h3>${name}</h3>
  <P>${new Date(createdAt).toDateString()}</P>
  <button onclick="deleteUser(${id})">Delete</button>
  </div>`;
  document.querySelector(".user-list").append(info);
}
getUsers();

// Delete
async function deleteUser(id) {
  const data = await fetch(
    "https://62387d1e0a54d2ceab764ee9.mockapi.io/users/" + id,
    { method: "DELETE" }
  );
  const user = await data.json();
  console.log(user);
  getUsers();
}

function addUser() {
  console.log("Adding User");
}

fetch("https://62387d1e0a54d2ceab764ee9.mockapi.io/users", {
  method: "POST",
  headers: { "content-type": "application/json" },
  body: JSON.stringify({
    name: "Lolita",
    avatar: "https://cdn.fakercloud.com/avatars/emmandenn_128.jpg",
    createdAt: new Date().toISOString(),
  }),
})
  .then((data) => data.json())
  .then((user) => console.log(user));
