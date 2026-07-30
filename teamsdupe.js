const teams = [

{
name:"KKR",
logo:"KKRLOGO.png",
owner:"Owner Name",
price:"₹ 1,20,000",
titles:"2",
captain:"Captain Name",
players:"6"
},

{
name:"CSK",
logo:"CSKLOGO.png",
owner:"Owner Name",
price:"₹ 1,15,000",
titles:"1",
captain:"Captain Name",
players:"6"
},

{
name:"SRH",
logo:"SRHLOGO.png",
owner:"Owner Name",
price:"₹ 1,10,000",
titles:"0",
captain:"Captain Name",
players:"6"
},

{
name:"RCB",
logo:"images/rcb.png",
owner:"Owner Name",
price:"₹ 1,30,000",
titles:"3",
captain:"Captain Name",
players:"6"
},

{
name:"MI",
logo:"MILOGO.png",
owner:"Owner Name",
price:"₹ 1,18,000",
titles:"2",
captain:"Captain Name",
players:"6"
},

{
name:"RR",
logo:"RRLOGO.png",
owner:"Owner Name",
price:"₹ 1,08,000",
titles:"1",
captain:"Captain Name",
players:"6"
},

{
name:"PBKS",
logo:"images/pbks.png",
owner:"Owner Name",
price:"₹ 1,12,000",
titles:"0",
captain:"Captain Name",
players:"6"
},

{
name:"DC",
logo:"images/dc.png",
owner:"Owner Name",
price:"₹ 1,14,000",
titles:"1",
captain:"Captain Name",
players:"6"
},

{
name:"GT",
logo:"images/gt.png",
owner:"Owner Name",
price:"₹ 1,16,000",
titles:"2",
captain:"Captain Name",
players:"6"
},

{
name:"LSG",
logo:"images/lsg.png",
owner:"Owner Name",
price:"₹ 1,05,000",
titles:"0",
captain:"Captain Name",
players:"6"
}

];

function openTeam(index){

const team = teams[index];

document.getElementById("popupLogo").src = team.logo;

document.getElementById("popupName").innerText = team.name;

document.getElementById("popupOwner").innerText = team.owner;

document.getElementById("popupPrice").innerText = team.price;

document.getElementById("popupTitles").innerText = team.titles;

document.getElementById("popupCaptain").innerText = team.captain;

document.getElementById("popupPlayers").innerText = team.players;

document.getElementById("overlay").classList.add("show");

document.getElementById("teamPopup").classList.add("show");

}

function closeTeam(){

document.getElementById("overlay").classList.remove("show");

document.getElementById("teamPopup").classList.remove("show");

}