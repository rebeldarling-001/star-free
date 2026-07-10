const players = [

{
name:"Shadow",
team:"Team Alpha",
id:"FF100001",
level:"80",
avatar:"avatar1.png",
profile:"avatar1.png"
},

{
name:"Blaze",
team:"Team Fire",
id:"FF100002",
level:"85",
avatar:"avatar2.png",
profile:"avatar2.png"
},

{
name:"Hunter",
team:"Team Phoenix",
id:"FF100003",
level:"78",
avatar:"avatar3.png",
profile:"avatar3.png"
},

{
name:"Viper",
team:"Team Bravo",
id:"FF100004",
level:"90",
avatar:"avatar4.png",
profile:"avatar4.png"
},

{
name:"Reaper",
team:"Team Titans",
id:"FF100005",
level:"88",
avatar:"avatar5.png",
profile:"avatar5.png"
},

{
name:"Nova",
team:"Team Galaxy",
id:"FF100006",
level:"76",
avatar:"avatar6.png",
profile:"avatar6.png"
},

{
name:"Rage",
team:"Team Warriors",
id:"FF100007",
level:"92",
avatar:"avatar7.png",
profile:"avatar7.png"
},

{
name:"Frost",
team:"Team Ice",
id:"FF100008",
level:"81",
avatar:"avatar8.png",
profile:"avatar8.png"
},

{
name:"Storm",
team:"Team Thunder",
id:"FF100009",
level:"87",
avatar:"avatar9.png",
profile:"avatar9.png"
},

{
name:"Venom",
team:"Team Cobra",
id:"FF100010",
level:"79",
avatar:"avatar10.png",
profile:"avatar10.png"
},

{
name:"Ghost",
team:"Team Dark",
id:"FF100011",
level:"95",
avatar:"avatar11.png",
profile:"avatar11.png"
},

{
name:"Falcon",
team:"Team Eagles",
id:"FF100012",
level:"83",
avatar:"avatar12.png",
profile:"avatar12.png"
},

{
name:"Titan",
team:"Team Legends",
id:"FF100013",
level:"96",
avatar:"avatar13.png",
profile:"avatar13.png"
},

{
name:"Dragon",
team:"Team Dragons",
id:"FF100014",
level:"89",
avatar:"avatar14.png",
profile:"avatar14.png"
},

{
name:"Phoenix",
team:"Team Rise",
id:"FF100015",
level:"91",
avatar:"avatar15.png",
profile:"avatar15.png"
},

{
name:"Warlock",
team:"Team Magic",
id:"FF100016",
level:"77",
avatar:"avatar16.png",
profile:"avatar16.png"
},

{
name:"Sniper",
team:"Team Elite",
id:"FF100017",
level:"86",
avatar:"avatar17.png",
profile:"avatar17.png"
},

{
name:"Crusher",
team:"Team Power",
id:"FF100018",
level:"93",
avatar:"avatar18.png",
profile:"avatar18.png"
},

{
name:"Legend",
team:"Team Kings",
id:"FF100019",
level:"98",
avatar:"avatar19.png",
profile:"avatar19.png"
},

{
name:"Omega",
team:"Team Final",
id:"FF100020",
level:"100",
avatar:"avatar20.png",
profile:"avatar20.png"
}

];



const playersContainer =
document.getElementById("playersContainer");

const profile =
document.getElementById("playerProfile");

const backBtn =
document.getElementById("backBtn");

const fire =
document.getElementById("fireTransition");




// CREATE PLAYER CARDS

players.forEach(player=>{


let card=document.createElement("div");

card.className="player-card";


card.innerHTML=`

<h3 class="player-name">
${player.name}
</h3>

`;



card.onclick=()=>{

openProfile(player);

};



playersContainer.appendChild(card);


});





// OPEN PROFILE

function openProfile(player){


fire.classList.add("active");


setTimeout(()=>{


document.getElementById("profileImage").src =
player.profile;


document.getElementById("profileName").innerText =
player.name;


document.getElementById("profileTeam").innerText =
player.team;


document.getElementById("profileLevel").innerText =
player.level;


document.getElementById("profileId").innerText =
player.id;



profile.classList.remove("hidden");



},300);



setTimeout(()=>{

fire.classList.remove("active");

},800);



}





// BACK BUTTON

backBtn.onclick=()=>{


profile.classList.add("hidden");


};