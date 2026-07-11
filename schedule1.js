/*======================================================
FREEFIREXIPL SCHEDULE
Version 2.0
Professional Dynamic Schedule System
======================================================*/

/*===========================
TEAM LOGOS
===========================*/

const TEAM_LOGOS = {

SRH:"SRHLOGO.png",
RCB:"RCBLOGO.png",
CSK:"CSKLOGO.png",
MI:"MILOGO.png",
RR:"RRLOGO.png",
KKR:"KKRLOGO.png",
DC:"DCLOGO.png",
PBKS:"PBKSLOGO.png"

};

/*===========================
SCHEDULE DATABASE
===========================*/

const scheduleData={

"08 FEB":[

{
status:"LIVE",
match:"MATCH 01",
team1:"SRH",
team2:"RCB",
time:"03:00 PM",
map:"BERMUDA"
},

{
status:"UPCOMING",
match:"MATCH 02",
team1:"KKR",
team2:"MI",
time:"05:30 PM",
map:"BERMUDA"
},

{
status:"UPCOMING",
match:"MATCH 03",
team1:"DC",
team2:"PBKS",
time:"08:00 PM",
map:"BERMUDA"
},

{
status:"UPCOMING",
match:"MATCH 04",
team1:"RR",
team2:"CSK",
time:"09:30 PM",
map:"BERMUDA"
}

],

"09 FEB":[

{
status:"LIVE",
match:"MATCH 01",
team1:"SRH",
team2:"RCB",
time:"03:00 PM",
map:"BERMUDA"
},

{
status:"UPCOMING",
match:"MATCH 02",
team1:"KKR",
team2:"MI",
time:"05:30 PM",
map:"BERMUDA"
},

{
status:"UPCOMING",
match:"MATCH 03",
team1:"DC",
team2:"PBKS",
time:"08:00 PM",
map:"BERMUDA"
},

{
status:"UPCOMING",
match:"MATCH 04",
team1:"RR",
team2:"CSK",
time:"09:30 PM",
map:"BERMUDA"
}

],

"10 FEB":[

{
status:"LIVE",
match:"MATCH 01",
team1:"SRH",
team2:"RCB",
time:"03:00 PM",
map:"BERMUDA"
},

{
status:"UPCOMING",
match:"MATCH 02",
team1:"KKR",
team2:"MI",
time:"05:30 PM",
map:"BERMUDA"
},

{
status:"UPCOMING",
match:"MATCH 03",
team1:"DC",
team2:"PBKS",
time:"08:00 PM",
map:"BERMUDA"
},

{
status:"UPCOMING",
match:"MATCH 04",
team1:"RR",
team2:"CSK",
time:"09:30 PM",
map:"BERMUDA"
}

],

"11 FEB":[{
status:"LIVE",
match:"MATCH 01",
team1:"SRH",
team2:"RCB",
time:"03:00 PM",
map:"BERMUDA"
},

{
status:"UPCOMING",
match:"MATCH 02",
team1:"KKR",
team2:"MI",
time:"05:30 PM",
map:"BERMUDA"
},

{
status:"UPCOMING",
match:"MATCH 03",
team1:"DC",
team2:"PBKS",
time:"08:00 PM",
map:"BERMUDA"
},

{
status:"UPCOMING",
match:"MATCH 04",
team1:"RR",
team2:"CSK",
time:"09:30 PM",
map:"BERMUDA"
}],

"12 FEB":[{
status:"LIVE",
match:"MATCH 01",
team1:"SRH",
team2:"RCB",
time:"03:00 PM",
map:"BERMUDA"
},

{
status:"UPCOMING",
match:"MATCH 02",
team1:"KKR",
team2:"MI",
time:"05:30 PM",
map:"BERMUDA"
},

{
status:"UPCOMING",
match:"MATCH 03",
team1:"DC",
team2:"PBKS",
time:"08:00 PM",
map:"BERMUDA"
},

{
status:"UPCOMING",
match:"MATCH 04",
team1:"RR",
team2:"CSK",
time:"09:30 PM",
map:"BERMUDA"
}]

};

/*===========================
TEAM FULL NAMES
===========================*/

const TEAM_NAMES={

SRH:"Sunrisers Hyderabad",
RCB:"Royal Challengers",
CSK:"Chennai Super Kings",
MI:"Mumbai Indians",
RR:"Rajasthan Royals",
KKR:"Kolkata Knight Riders",
DC:"Delhi Capitals",
PBKS:"Punjab Kings"

};

/*===========================
GLOBAL VARIABLES
===========================*/

const container=document.getElementById("matchContainer");

const dateCards=document.querySelectorAll(".date-card");

let selectedDate="08 FEB";

/*======================================================
MATCH CARD GENERATOR
======================================================*/

function createMatchCard(match){

const live = match.status === "LIVE";
const upcoming = match.status === "UPCOMING";
const finished = match.status === "FINISHED";

let statusClass = "";

if(live){
statusClass = "";
}
else if(upcoming){
statusClass = "upcoming";
}
else{
statusClass = "finished";
}

return `

<div class="match-card">



<div class="team">

<img src="${TEAM_LOGOS[match.team1]}" alt="${match.team1}">

<h3>${match.team1}</h3>

<p>${TEAM_NAMES[match.team1]}</p>

</div>

<div class="center">

<div class="match-no">
${match.match}
</div>

<div class="vs">
VS
</div>

<div class="time">
${match.time}
</div>

<div class="map">
${match.map}
</div>

</div>

<div class="team">

<img src="${TEAM_LOGOS[match.team2]}" alt="${match.team2}">

<h3>${match.team2}</h3>

<p>${TEAM_NAMES[match.team2]}</p>

</div>

</div>

`;

}

/*======================================================
NO MATCHES CARD
======================================================*/

function createEmptyCard(){

return `

<div class="match-card">

<div class="center" style="width:100%;padding:20px 0;">

<i class="fas fa-calendar-times"
style="
font-size:38px;
color:#D6A93C;
margin-bottom:12px;
"></i>

<h3 style="margin-bottom:8px;">
No Matches Scheduled
</h3>

<p style="
font-size:12px;
color:#9a9a9a;
">
There are no matches planned for this date.
</p>

</div>

</div>

`;

}
/*======================================================
LOAD MATCHES
======================================================*/

function loadMatches(date){

selectedDate = date;

const matchList = scheduleData[date] || [];

/* Fade Out */

container.style.opacity = "0";
container.style.transform = "translateY(15px)";

setTimeout(()=>{

container.innerHTML = "";

/* No Matches */

if(matchList.length === 0){

container.innerHTML = createEmptyCard();

}

/* Create Match Cards */

else{

matchList.forEach(match=>{

container.innerHTML += createMatchCard(match);

});

}

/* Fade In */

container.style.opacity = "1";
container.style.transform = "translateY(0)";

},250);

}

/*======================================================
DATE CARD CLICK
======================================================*/

dateCards.forEach((card,index)=>{

card.addEventListener("click",()=>{

if(index>=unlockedDays){

container.innerHTML=`

<div class="match-card">

<div class="center" style="width:100%;padding:25px;text-align:center;">

<h2>🔒</h2>

<h3>Schedule Locked</h3>

<p style="margin-top:10px;color:#999;">

Unlocks by Admin on the match day.

</p>

</div>

</div>

`;

return;

}

/* Active Date */

dateCards.forEach(c=>{

c.classList.remove("active");

});

card.classList.add("active");

/* Get Date */

const selected = card.querySelector(".date").textContent.trim();

/* Load Schedule */

loadMatches(selected);

/* Change Title */

const title = document.querySelector(".section-title div");

if(card.querySelector(".day").textContent.trim()=="TODAY"){

title.textContent="TODAY'S MATCHES";

}else{

title.textContent=selected+" MATCHES";

}

});

});

/*======================================================
FIRST LOAD
======================================================*/

loadMatches(selectedDate);
/*======================================================
PREMIUM EFFECTS
======================================================*/

/* Animate cards after loading */

function animateCards(){

const cards = document.querySelectorAll(".match-card");

cards.forEach((card,index)=>{

card.style.opacity="0";
card.style.transform="translateY(20px)";

setTimeout(()=>{

card.style.transition="all .45s ease";
card.style.opacity="1";
card.style.transform="translateY(0)";

},index*120);

});

}

/*======================================================
LIVE PULSE EFFECT
======================================================*/

function startLivePulse(){

setInterval(()=>{

document.querySelectorAll(".match-card.live").forEach(card=>{

card.classList.toggle("pulse-live");

});

},900);

}

/*======================================================
MATCH COUNT
======================================================*/

function updateMatchCount(){

const count=document.querySelectorAll(".match-card").length;

console.log("Matches Loaded :",count);

}

/*======================================================
SCROLL TO TOP AFTER DATE CHANGE
======================================================*/

function scrollToSchedule(){

window.scrollTo({

top:160,

behavior:"smooth"

});

}

/*======================================================
ENHANCED LOAD
======================================================*/

const oldLoadMatches=loadMatches;

loadMatches=function(date){

oldLoadMatches(date);

setTimeout(()=>{

animateCards();

updateMatchCount();

scrollToSchedule();

},280);

};

/*======================================================
START EFFECTS
======================================================*/

startLivePulse();
/*======================================================
FREEFIREXIPL SCHEDULE v2.0
FINAL MODULE
======================================================*/

/*=========================
LIVE COUNTDOWN (Future Ready)
=========================*/

function updateLiveMatch(){

const liveCard=document.querySelector(".match-card.live");

if(!liveCard) return;

// Future:
// Add countdown timer here using Firebase time.

}

/*=========================
AUTO REFRESH (Optional)
=========================*/

function autoRefreshSchedule(){

// Future Firebase:
// fetchLatestSchedule();

console.log("Schedule Ready");

}

setInterval(()=>{

updateLiveMatch();

},1000);

/*=========================
VIEW FULL SCHEDULE
=========================*/

const viewAll=document.querySelector(".view-all");

if(viewAll){

viewAll.addEventListener("click",()=>{

// Future
// window.location.href="fullschedule.html";

alert("Full Schedule Page Coming Soon!");

});

}

/*=========================
MENU BUTTON
=========================*/

const menuBtn=document.querySelector(".menu-btn");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

console.log("Open Sidebar");

});

}

/*=========================
NOTIFICATION BUTTON
=========================*/

const notifyBtn=document.querySelector(".notify-btn");

if(notifyBtn){

notifyBtn.addEventListener("click",()=>{

console.log("Open Notifications");

});

}

/*=========================
PRELOAD TEAM LOGOS
=========================*/

Object.values(TEAM_LOGOS).forEach(src=>{

const img=new Image();

img.src=src;

});

/*=========================
INITIALIZE
=========================*/

window.addEventListener("load",()=>{

loadMatches(selectedDate);

autoRefreshSchedule();

console.log("FREEFIREXIPL Schedule Loaded Successfully");

});

/*======================================================
FUTURE FIREBASE FUNCTIONS
======================================================*/

// async function loadScheduleFromFirebase(){}
//
// async function updateMatchStatus(){}
//
// async function updateMatchTime(){}
//
// async function addMatch(){}
//
// async function deleteMatch(){}
//
// async function updateTeamLogos(){}
//
// async function syncSchedule(){}
//
// async function fetchResults(){}
//
// async function publishSchedule(){}
//
// async function adminPanel(){}
//
// async function loadTournamentDays(){}
//
// async function refreshLiveScores(){}
//
// End of File


/*==================================================
ADMIN LOGIN
==================================================*/

const ADMIN_PASSWORD = "admin123";

const adminBtn = document.getElementById("adminBtn");
const adminOverlay = document.getElementById("adminOverlay");
const adminPassword = document.getElementById("adminPassword");
const loginAdmin = document.getElementById("loginAdmin");
const cancelAdmin = document.getElementById("cancelAdmin");
const adminBar = document.getElementById("adminBar");
const adminPanel = document.getElementById("adminPanel");
const logoutBtn = document.getElementById("logoutBtn");
const exitAdmin = document.getElementById("exitAdmin");
const nextDayBtn= document.getElementById("nextDayBtn");

let adminMode = false;
let unlockedDays = 1;
/* Open Login */

adminBtn.onclick = () => {

adminOverlay.classList.add("show");

adminPassword.value = "";

adminPassword.focus();

};

/* Cancel */

cancelAdmin.onclick = () => {

adminOverlay.classList.remove("show");

};

/* Login */

loginAdmin.onclick = () => {

if(adminPassword.value === ADMIN_PASSWORD){

adminMode = true;

adminOverlay.classList.remove("show");

adminPanel.classList.add("show");

alert("Admin Mode Enabled");

showAdminControls();

}else{

alert("Incorrect Password");

adminPassword.value = "";

adminPassword.focus();

}

};

/* Exit Admin */

logoutBtn.onclick = () => {

adminMode = false;

adminPanel.classList.remove("show");
loadEditTeams();
};
/*==================================================
ADMIN CONTROLS
==================================================*/

function showAdminControls(){

document.querySelectorAll(".date-card").forEach(card=>{

card.classList.add("admin-mode");

});

}

function hideAdminControls(){

document.querySelectorAll(".date-card").forEach(card=>{

card.classList.remove("admin-mode");

});

}
nextDayBtn.onclick=()=>{

if(unlockedDays < dateCards.length){

unlockedDays++;

alert("Next Day Opened");

}else{

alert("All Days Already Open");

}

};
const lockPreviousBtn = document.getElementById("lockPreviousBtn");

lockPreviousBtn.onclick = () => {

if(unlockedDays > 1){

unlockedDays--;

alert("Previous Day Locked Again");

}else{

alert("No Day To Lock");

}

};

const editDay=document.getElementById("editDay");
const editMatch=document.getElementById("editMatch");


let selectedTeam1="";
let selectedTeam2="";


document.querySelectorAll(".team-options button").forEach(btn=>{

btn.addEventListener("click",()=>{


let team=btn.dataset.team;


let box=btn.closest(".team-select");


box.querySelectorAll("button").forEach(b=>{
b.classList.remove("active");
});


btn.classList.add("active");


let title=box.querySelector("p").textContent.trim();


if(title.includes("TEAM 1")){

selectedTeam1=team;

}
else{

selectedTeam2=team;

}


console.log(selectedTeam1,selectedTeam2);


});

});
// AUTO LOAD CURRENT TEAMS

function loadEditTeams(){

let day=document.getElementById("editDay").value;

let matchIndex=document.getElementById("editMatch").value;


let match=scheduleData[day][matchIndex];


selectedTeam1=match.team1;
selectedTeam2=match.team2;


// remove old active

document.querySelectorAll(".team-options button")
.forEach(btn=>{

btn.classList.remove("active");

});


// select current TEAM 1

document.querySelectorAll(".team-select")[0]
.querySelectorAll("button")
.forEach(btn=>{

if(btn.dataset.team===match.team1){

btn.classList.add("active");

}

});


// select current TEAM 2

document.querySelectorAll(".team-select")[1]
.querySelectorAll("button")
.forEach(btn=>{

if(btn.dataset.team===match.team2){

btn.classList.add("active");

}

});


}


// when day changes

document.getElementById("editDay")
.onchange=loadEditTeams;


// when match changes

document.getElementById("editMatch")
.onchange=loadEditTeams;

const saveEdit=document.getElementById("saveEdit");


saveEdit.onclick=()=>{


let day=editDay.value;

let matchIndex=Number(editMatch.value);



if(!selectedTeam1 || !selectedTeam2){

alert("Please select both teams");

return;

}



scheduleData[day][matchIndex].team1=selectedTeam1;

scheduleData[day][matchIndex].team2=selectedTeam2;



if(selectedDate===day){

loadMatches(day);

}



alert("✅ Match Updated Successfully");


};