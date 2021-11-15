const players = JSON.parse(localStorage.getItem('players'));
const form = document.getElementById('formPlayer');

const fullName = document.getElementById('fullName'),
  shortName = document.getElementById('shortName'),
  description = document.getElementById('description'),
  price = document.getElementById('price'),
  picture = document.getElementById('picture');


  



//  new player obj
const newPlayer = {
  id: players.length + 1,
  playerName: "",
  from: "",
  price: "",
  isPlaying: true,
  description: "",
  picture: ""
};


fullName.addEventListener('change', function () {
  newPlayer.playerName = fullName.value;
});

shortName.addEventListener('change', function () {
  newPlayer.from = shortName.value;
});

price.addEventListener('change', function () {
  newPlayer.price = price.value;
});

description.addEventListener('change', function () {
  newPlayer.description = description.value;
});

picture.addEventListener('change', function () {
  newPlayer.picture = picture.value;
});

form.addEventListener('submit', function (e) {
  e.preventDefault();
  let retired = document.querySelector('input[name="retired"]:checked');
  newPlayer.isPlaying = retired.value === 'no' ? true : false;
  let finalPlayers = [...players, newPlayer];

  localStorage.setItem('players', JSON.stringify(finalPlayers));
  console.log("success");
  window.location.replace("/index.html")
})