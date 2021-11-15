const form = document.getElementById('formTeam');
const fullName = document.getElementById('fullName'),
  shortName = document.getElementById('shortName'),
  description = document.getElementById('description'),
  picture = document.getElementById('picture');

const initialTeamList = JSON.parse(localStorage.getItem('teams'));


let newTeam = {
  id: initialTeamList.length + 1,
  fullName: "",
  shortName: "",
  description: "",
  picture: ""
};

fullName.addEventListener('change', function () {
  newTeam.fullName = fullName.value;
});

shortName.addEventListener('change', function () {
  newTeam.shortName = shortName.value;
});

description.addEventListener('change', function () {
  newTeam.description = description.value;
});

picture.addEventListener('change', function () {
  newTeam.picture = picture.value;
});


form.addEventListener('submit', function () {
  let finalTeam = [...initialTeamList, newTeam];
  localStorage.setItem('teams',JSON.stringify(finalTeam));

  console.log("success");
  window.location.replace("/index.html")
})