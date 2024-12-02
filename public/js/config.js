selectLanguage = (lang) => {
  if (lang === "f") language = "french";
  else language = "english";
  $("#selected_lang").html(language);
};

selectType = (tp) => {
  divisions = getJSONValuesPerLanguage(eval(tp + "_data"));
  console.log(divisions);
  $("#selected_type").html(tp);
};

function getJSONValuesPerLanguage(data) {
  if (language == "french")
    return data.map((item) => ({
      name: item.name,
      division: item.french.divisions.name,
      title: item.french.divisions.title,
    }));
  else
    return data.map((item) => ({
      name: item.name,
      division: item.english.divisions.name,
      title: item.english.divisions.title,
    }));
}

proceed = () => {
  configurated = true;
  $("#list").show();
  $("#configSection").hide();
  assignTitleAndRole();

  updateUsers();
};

getdivisionAndTitleByName = (data, name) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i].name === name) {
      return {
        division: data[i].division,
        title: data[i].title,
      };
    }
  }
  return null; // Return null if the name is not found
};

assignTitleAndRole = () => {
  users.forEach(function (item) {
    // Update the title and division fields to "none"
    let apps_name = getAppsByName(item.firstName);
    let data = getdivisionAndTitleByName(divisions, apps_name);
    item.apps = apps_name;
    item.title = data.title;
    item.division = data.division;
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
getdivisionByUser = (user) => {
  // Iterate over each object in the array
  let division = "Peter";
  for (var i = 0; i < divisions.length; i++) {
    // Check if the current object has a 'user' property and it matches the desired user
    if (user === "Peter") user = "Yannick";
    if (divisions[i].user === user) {
      // Return the value corresponding to the user
      division = divisions[i].value;
    }
  }
  return division; // If user is not found, return null or handle accordingly
};
