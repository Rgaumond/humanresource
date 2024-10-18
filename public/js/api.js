function fetchUsers() {
  fetch("https://users.esolv.ca/users")
    .then((response) => response.json())
    .then((data) => {
      users = data;
    })
    .catch((error) => console.error("Error:", error));
}

function updateEmployee(employee) {

  fetch("https://users.esolv.ca/update")
    .then((response) => response.json())
    .then((data) => {
      users = data;
      generateList(users);
    })
    .catch((error) => console.error("Error:", error));
}
