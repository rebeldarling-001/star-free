/*==================================
FREEFIREXIPL SCHEDULE
==================================*/

const matches=[

{
id:"MATCH 01",
team1:"SRH",
logo1:"SRHLOGO.png",
team2:"RCB",
logo2:"RCBLOGO.png",
date:"Sunday",
time:"3:00 PM",
status:"Released"
},

{
id:"MATCH 02",
team1:"MI",
logo1:"MILOGO.png",
team2:"KKR",
logo2:"KKRLOGO.png",
date:"Sunday",
time:"4:00 PM",
status:"Released"
},

{
id:"MATCH 03",
team1:"RR",
logo1:"RRLOGO.png",
team2:"DC",
logo2:"DCLOGO.png",
date:"Sunday",
time:"5:00 PM",
status:"Released"
},

{
id:"MATCH 04",
team1:"PBKS",
logo1:"PBKSLOGO.png",
team2:"CSK",
logo2:"CSKLOGO.png",
date:"Sunday",
time:"6:00 PM",
status:"Released"
}

];

const matchesBox=document.getElementById("matches");

matches.forEach(match=>{

matchesBox.innerHTML+=`

<div class="match-card">

<div class="match-top">

<span class="match-id">${match.id}</span>

<span class="status">${match.status}</span>

</div>

<div class="teams">

<div class="team">

<img src="${match.logo1}">

<span>${match.team1}</span>

</div>

<div class="vs">VS</div>

<div class="team">

<img src="${match.logo2}">

<span>${match.team2}</span>

</div>

</div>

<div class="match-bottom">

<div>

<i class="fa-solid fa-calendar"></i>

${match.date}

</div>

<div>

<i class="fa-solid fa-clock"></i>

${match.time}

</div>

</div>

</div>

`;

});