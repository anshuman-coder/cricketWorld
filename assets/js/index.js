{/* <div class="col-12 col-md-4" data-aos="fade-up" data-aos-delay="100">

                    <!-- Icon -->
                    <div class="icon text-primary mb-3">
                        <object data="./assets/img/RR_blue (1).png" width="120" height="120" type=""></object>
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

const mainDiv = document.getElementById('rowDiv');//main div where the team card will be appended
const teamList = localStorage.getItem('teams');
const allPlayers = JSON.parse(localStorage.getItem('players'));
const topPlayersLists = JSON.parse(localStorage.getItem('players'))
    .filter((player) => {
        if (player.isPlaying) {
            return true;
        }
    });
topPlayersLists.sort((a,b) => {
    let p1 = parseFloat(a.price);
    let p2 = parseFloat(b.price);
    return p2 - p1;
})
console.log(topPlayersLists);
//function to append team cards
function createTeamCard(item) {
  let card = `
  <div class="col-12 col-md-4" data-aos="fade-up" data-aos-delay="100">

      <!-- Icon -->
      <div class="icon text-primary mb-3">
          <object data="${item.picture}" width="120" height="120" type=""></object>
      </div>

      <!-- Heading -->
      <h3>
          ${item.fullName}
      </h3>

      <!-- Text -->
      <p class="text-muted mb-0">
      ${item.description}
      </p>

      <a href="./teamDetails.html?team=${item.shortName}"><button class="btn btn-primary btn-sm">Players</button></a>

  </div>`;

  $(card).prependTo($("#rowDiv"));
  
  
}

// create top players cards
function createTopPlayersCard(item) {
    let card = `
    <div class="col-12 col-md-4" data-aos="fade-up" data-aos-delay="100">
  
        <!-- Icon -->
        <div class="icon text-primary mb-3">
            <object data="${item.picture}" width="120" height="120" type=""></object>
        </div>
  
        <!-- Heading -->
        <h3>
            ${item.playerName}
        </h3>
  
        <!-- Text -->
        <p class="text-muted mb-0">
        ${item.description}
        </p>
  
        <a href="./teamDetails.html?team=${item.shortName}"><button class="btn btn-primary btn-sm">Players</button></a>
  
    </div>`;
  
    $(card).prependTo($("#topPlayersDiv"));
    
    
  }

// rendering the card

let renderTeamList = JSON.parse(teamList);


for (let i = 0; i < renderTeamList.length; i++) {
  
    createTeamCard(renderTeamList[i]);
}
for (let i = 0; i < 3; i++) {
    createTopPlayersCard(topPlayersLists[i]);
}

// code for search bar

const autocom = document.getElementById('autocom');
const inputBox = document.getElementById('input-box');

inputBox.onkeyup = (e) => {
    let userData = e.target.value;
    let empty = [];
    if (userData) {
        empty = allPlayers.filter((data) => {
            return data.playerName.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        })
        empty = empty.map((data) => {
            return data = `<a href="./playerDetails?player=${data.id}"><li>${data.playerName}</li></a>`
        });
        console.log(empty);
    }
    showSuggestions(empty[0]);
    inputBox.classList.add('active');
}

function showSuggestions(list) {
    let listData;
    if (!list.length) {
        userValue = inputBox.value;
        listData = "<li>"+userValue+"</li>";
    } else {
        listData = list.join('');
    }
    autocom.innerHTML = listData
}


