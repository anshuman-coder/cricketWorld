const params = new URLSearchParams(window.location.search);
const playerCount = document.getElementById('players-count');
const teamImg = document.getElementById('teamImg');
const titleTag = document.getElementById('span-title-tag');
const teams = localStorage.getItem('teams');
const players = localStorage.getItem('players');
const mainDiv = document.getElementById('rowDiv');

let teamName = null;

{/* <div class="col-12 col-md-4" data-aos="fade-up" data-aos-delay="100">

<!-- Icon -->
<div class="icon text-primary mb-3">
    <object data="./assets/img/RR.png" width="120" height="120" type=""></object>
</div>

<!-- Heading -->
<h3>
    Rajasthan Royals
</h3>

<!-- Text -->
<p class="text-muted mb-0">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>

<a href="./teamDetails.html?team=RR"><button class="btn btn-primary btn-sm">Players</button></a>

</div> */}



for (const p of params) {
  if (p[0] === 'team') {
    teamName = p[1];
  }
};

let renderTeam = JSON.parse(teams).filter((i) => {
  if (i.shortName === teamName) {
    return true;
  }
});

console.log(renderTeam)

let renderPlayer = JSON.parse(players).filter((i) => {
  if (i.from === teamName) {
    return true;
  }
});
//players card render
function renderPlayersCard(list) {
  let card = `
  <div class="col-12 col-md-4" data-aos="fade-up" data-aos-delay="100">

    <!-- Icon -->
    <div class="icon text-primary mb-3">
        <object data="${list.picture}" width="120" height="120" type=""></object>
    </div>

    <!-- Heading -->
    <h3>
        ${list.playerName}
    </h3>

    <!-- Text -->
    <p class="text-muted mb-0">
    ${list.description}
    </p>

    <a href="./playerDetails.html?player=${list.id}"><button class="btn btn-primary btn-sm">More Details</button></a>

</div>
  `;


  $(card).prependTo($(mainDiv));
}

function renderTeamDetails(teams, players) {
  let { description, fullName, picture, shortName } = teams;
  titleTag.innerText = fullName
  teamImg.src = picture;
  playerCount.innerHTML = `Numver of Players - <b>${players.length}</b>`;

  for (let i = 0; i < players.length; i++) {
    renderPlayersCard(players[i]);
  }
}


renderTeamDetails(renderTeam[0], renderPlayer);