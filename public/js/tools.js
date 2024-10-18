parseArray = (jsonArray) => {
  $.each(jsonArray, function (index, obj) {
    // Iterate through keys and print attributes
    $.each(obj, function (key, value) {
      console.log("Attribute: " + key + ", Value: " + value);
    });

    console.log(); // Add an empty line for better readability
  });
};

createDropdown = (jsonArray, id, value) => {
  $.each(jsonArray, function (index, item) {
    $("#" + id).append(
      "<option value='" +
        item.department +
        "'>" +
        item.title +
        ",  " +
        item.department +
        "</option>"
    );
  });
  selectDropdownValue(id, value);
};

selectDropdownValue = (dropdownName, value) => {
  var dropdown = document.getElementById(dropdownName);

  for (var i = 0; i < dropdown.options.length; i++) {
    if (dropdown.options[i].value === value) {
      dropdown.selectedIndex = i;
      break;
    }
  }
};

updateUserActive = (id, el) => {
  let isActive = false;
  if ($("#" + el.id).is(":checked")) {
    $("#" + id).css("background-color", "#001f00");
    isActive = true;
  } else $("#" + id).css("background-color", "#59050b");
  var user = users.find(function (user) {
    return user._id === id;
  });
  if (user) {
    user.active = isActive;
  }
};

selectActive = (name, value) => {
  var checkbox = document.getElementById(name);
  if (value) {
    checkbox.checked = true;
    $("#" + name);
  } else {
    checkbox.checked = false;
  }
};

updateUserActiveStatus = (userId, newStatus) => {
  users.forEach(function (user) {
    if (user._id === userId) {
      user.active = newStatus;
    }
  });
};

updateUsersSelection = (userId, el) => {
  var user = users.find(function (user) {
    return user._id === userId;
  });
  if (user) {
    let newData = getInfoByDepartment(departments, el.value);
    user.department = el.value;
    user.title = newData.title;
    user.apps = newData.name;
    console.log(users); // Check the updated users array
  } else {
    console.log("User not found with ID: " + userId);
  }
};

getInfoByDepartment = (data, departmentName) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i].department === departmentName) {
      return {
        name: data[i].name,
        title: data[i].title,
      };
    }
  }
  return null; // Return null if the department is not found
};

updateUsers = () => {
  // Base case: If the array is empty, execute the callback
  var clonedUser = $.extend(true, [], users);
  updateUsersDB(clonedUser, function () {
    console.log("All API calls completed.");
  });
};

function updateUsersDB(usersArray, callback) {
  // Base case: If the array is empty, execute the callback

  if (usersArray.length === 0) {
    callback();
    return;
  }

  // Get the first item from the array
  var apiObject = usersArray.shift();
  var url = "https://users.esolv.ca/users/update";

  $.ajax({
    url: url,
    method: "POST",
    contentType: "application/json",
    data: JSON.stringify(apiObject), // Stringify the JSON object
    success: function (response) {
      console.log("Response received:", response);
      // Make the next API call recursively
      updateUsersDB(usersArray, callback);
    },
    error: function (xhr, status, error) {
      console.error("Error:", error);
      // Retry the same API call recursively on error (optional)
      updateUsersDB(usersArray, callback);
    },
  });
}

setLabelValues = () => {
  $("#pageTitle").text("Système RH");
  $("#listName").text("Employés");
  $("#updateUsers").text("Mettre à jour");
  $("#addUser").text("Ajouter utilisateur");
  $(".listLabel:contains('name')").text("nom");
  $(".listLabel:contains('department')").text("département");
  $(".listLabel:contains('title')").text("titre");
  $(".listLabel:contains('email')").text("courriel");
  $(".listLabel:contains('active')").text("en fonction");
};

addNewUSer = () => {
  // var newUser = {
  //   _id: "5",
  //   active: false,
  //   firstName: "Daniella",
  //   lastName: "Begin",
  //   userName: "Daniella.Begin@rgoka.com",
  //   title: "RH",
  //   secondEmail: "Daniella.Begin@rgoka.com",
  //   mobilePhone: "111-111-1115",
  //   department: "LCM_HR",
  // };
  // users.unshift(newUser);
  // generateList(users);

  fetch("https://users.esolv.ca/users/test2", {
    method: "POST",
    headers: {},
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      // Handle the JSON data here
      console.log(data);
    })
    .catch((error) => {
      // Handle any errors that occur during the fetch
      console.error("Fetch error:", error);
    });
};
