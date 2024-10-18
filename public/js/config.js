selectLanguage = (lang) => {
  if (lang === "f") language = "french";
  else language = "english";
  $("#selected_lang").html(language);
};

selectType = (tp) => {
  departments = getJSONValuesPerLanguage(eval(tp + "_data"));
  console.log(departments);
  $("#selected_type").html(tp);
};

function getJSONValuesPerLanguage(data) {
  if (language == "french")
    return data.map((item) => ({
      name: item.name,
      department: item.french.departments.name,
      title: item.french.departments.title,
    }));
  else
    return data.map((item) => ({
      name: item.name,
      department: item.english.departments.name,
      title: item.english.departments.title,
    }));
}

proceed = () => {
  configurated = true;
  $("#list").show();
  $("#configSection").hide();
  assignTitleAndRole();

  updateUsers();
};

getDepartmentAndTitleByName = (data, name) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i].name === name) {
      return {
        department: data[i].department,
        title: data[i].title,
      };
    }
  }
  return null; // Return null if the name is not found
};

assignTitleAndRole = () => {
  users.forEach(function (item) {
    // Update the title and department fields to "none"
    let apps_name = getAppsByName(item.firstName);
    let data = getDepartmentAndTitleByName(departments, apps_name);
    item.apps = apps_name;
    item.title = data.title;
    item.department = data.department;
    if (item.firstName === "Peter") item.active = false;
    else item.active = true;
  });
  generateList(users);
};

function getAppsByName(name) {
  const found = original_mapping.find((item) => item.name === name);
  return found ? found.apps : null;
}

getTitleByUser = (user) => {
  // Iterate over each object in the array
  let title = "";
  for (var i = 0; i < titles.length; i++) {
    // Check if the current object has a 'user' property and it matches the desired user
    if (user === "Peter") user = "Yannick";
    if (titles[i].user === user) {
      // Return the value corresponding to the user
      title = titles[i].value;
    }
  }
  return title; // If user is not found, return null or handle accordingly
};
getDepartmentByUser = (user) => {
  // Iterate over each object in the array
  let department = "Peter";
  for (var i = 0; i < departments.length; i++) {
    // Check if the current object has a 'user' property and it matches the desired user
    if (user === "Peter") user = "Yannick";
    if (departments[i].user === user) {
      // Return the value corresponding to the user
      department = departments[i].value;
    }
  }
  return department; // If user is not found, return null or handle accordingly
};
