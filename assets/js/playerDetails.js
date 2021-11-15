const params = new URLSearchParams(window.location.search);
const playerImg = document.getElementById('playerImg');
const playerSpanTag = document.getElementById('span-player-tag');
const playerDes = document.getElementById('players-description');
const teamTag = document.getElementById('team-tag');

let pId = null;
for (const p of params) {
  if (p[0] === 'player') {
    pId = p[1];
  }
}


const player = JSON.parse(localStorage.getItem('players')).filter((i) => {
  if (i.id === parseInt(pId)) {
    return true;
  }
});


function renderPlayerDetails(element) {
  let playing = element.isPlaying ? " Currently Playing" : " Retired Player";
  let price = element.price;
  console.log(playing)
  console.log(element)
  playerImg.src = element.picture;
  playerSpanTag.innerHTML = element.playerName;
  playerDes.innerHTML = element.description;
  teamTag.innerHTML = element.from+ "<br>" +playing+ "<br> Price: "+price ;
}

renderPlayerDetails(player[0])