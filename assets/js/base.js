const playersData = [
  {
    "id": 0,
    "playerName": "Hardik Pandya",
    "from": "MI",
    "price": "6.50 Cr",
    "isPlaying": true,
    "description": "All-Rounder",
    "picture": "https://www.mumbaiindians.com/static-assets/images/players/small/63751.png"
  },
  {
    "id": 1,
    "playerName": "Virat Kohli",
    "from": "RCB",
    "price": "8.00 Cr",
    "isPlaying": true,
    "description": "Batsman",
    "picture": "https://static.toiimg.com/thumb/msid-79112054,width-1200,height-900,resizemode-4/.jpg"
  },
  {
    "id": 2,
    "playerName": "Yuvraj Singh",
    "from": "MI",
    "price": "1.00 Cr",
    "isPlaying": false,
    "description": "Batsman",
    "picture": "https://www.mumbaiindians.com/static-assets/images/players/large/3314.png?v=1.35&w=400"
  },
  {
    "id": 3,
    "playerName": "Chris Morris",
    "from": "RR",
    "price": "16.25 Cr",
    "isPlaying": true,
    "description": "All-Rounder",
    "picture": "https://www.deccanherald.com/sites/dh/files/article_images/2019/12/20/file75szn0q84rbuiscvbbt-1576785809.jpg"
  },
  {
    "id": 4,
    "playerName": "Glenn Maxwell",
    "from": "RCB",
    "price": "14.25 Cr",
    "isPlaying": true,
    "description": "All-Rounder",
    "picture": "https://im.rediff.com/cricket/2021/apr/22maxwell.jpg?w=670&h=900"
  },
  {
    "id": 5,
    "playerName": "Rohit Sharma",
    "from": "MI",
    "price": "6.50 Cr",
    "isPlaying": true,
    "description": "Batsman",
    "picture": "https://static.iplt20.com/players/210/107.png"
  },
  {
    "id": 6,
    "playerName": "Ishan Kishan",
    "from": "MI",
    "price": "2.50 Cr",
    "isPlaying": true,
    "description": "Batsman",
    "picture": "https://www.mumbaiindians.com/static-assets/images/players/small/64712.png"
  }
]

const teamData = [
  {
    "id": 0,
    "picture": "./assets/img/royal-challengers-bangalore-2020.svg",
    "fullName": "Royal Chanllengers Bangalore",
    "shortName": "RCB",
    "description": "IPL team from city Bangalore, under the captaincy of Virat Kohli"
  },
  {
    "id": 1,
    "picture": "./assets/img/mumbai.svg",
    "fullName": "Mumbai Indians",
    "shortName": "MI",
    "description": "IPL team from city Mumbai, under the captaincy of Rohit Sharma"
  },
  {
    "id": 2,
    "picture": "./assets/img/RR.png",
    "fullName": "Rajasthan Royals",
    "shortName": "RR",
    "description": "IPL team from city Rajasthan, under the captaincy of Sanju Samson"
  }
]


$(document).ready(function () {
  var playerList = localStorage.getItem('players');
  var teamList = localStorage.getItem('teams');

  let isPlayersEmpty = (playerList === null || playerList === '') ? true : false;
  let isTeamEmpty = (teamList === null || teamList === '') ? true : false;


  if (isPlayersEmpty ) {
    playerList = playersData;
    localStorage.setItem("players", JSON.stringify(playerList));
    window.location.reload()
  }
  if (isTeamEmpty) {
    teamList = teamData;
    localStorage.setItem("teams", JSON.stringify(teamList));
    window.location.reload()
  }
});