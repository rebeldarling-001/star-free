/*=====================================
FREEFIREXIPL TEAMS
=====================================*/

const logos = document.querySelectorAll(".team-logo");

const card = document.querySelector(".team-card");

const teamLogo = document.getElementById("teamLogo");
const teamName = document.getElementById("teamName");
const teamShort = document.getElementById("teamShort");
const owner = document.getElementById("owner");
const price = document.getElementById("price");
const titles = document.getElementById("titles");
const players = document.getElementById("players");

const teams = [

{
name:"SUNRISERS HYDERABAD",
short:"SRH",
logo:"SRHLOGO.png",
owner:"Raviteja",
price:"₹18,500",
titles:"🏆🏆🏆",
players:"6",
color:"#ff7b00"
},

{
name:"ROYAL CHALLENGERS BENGALURU",
short:"RCB",
logo:"RCBLOGO.png",
owner:"Owner",
price:"₹17,500",
titles:"🏆",
players:"6",
color:"#d50000"
},

{
name:"KOLKATA KNIGHT RIDERS",
short:"KKR",
logo:"KKRLOGO.png",
owner:"Owner",
price:"₹16,500",
titles:"🏆🏆",
players:"6",
color:"#7b1fff"
},

{
name:"MUMBAI INDIANS",
short:"MI",
logo:"MILOGO.png",
owner:"Owner",
price:"₹17,000",
titles:"🏆🏆🏆",
players:"6",
color:"#1e88ff"
},

{
name:"DELHI CAPITALS",
short:"DC",
logo:"DCLOGO.png",
owner:"Owner",
price:"₹16,000",
titles:"🏆",
players:"6",
color:"#00b8ff"
},

{
name:"PUNJAB KINGS",
short:"PBKS",
logo:"PBKSLOGO.png",
owner:"Owner",
price:"₹15,000",
titles:"🏆",
players:"6",
color:"#c4002f"
},

{
name:"RAJASTHAN ROYALS",
short:"RR",
logo:"RRLOGO.png",
owner:"Owner",
price:"₹16,800",
titles:"🏆🏆",
players:"6",
color:"#ff4fc3"
},

{
name:"CHENNAI SUPER KINGS",
short:"CSK",
logo:"CSKLOGO.png",
owner:"Owner",
price:"₹18,000",
titles:"🏆🏆🏆🏆",
players:"6",
color:"#ffd600"
}

];

/*============================*/

logos.forEach((logo,index)=>{

logo.addEventListener("click",()=>{

logos.forEach(l=>l.classList.remove("active"));

logo.classList.add("active");

const t=teams[index];

teamLogo.style.opacity="0";

setTimeout(()=>{

teamLogo.src=t.logo;
document.getElementById("watermarkLogo").src=t.logo;
teamName.innerHTML=t.name;
teamShort.innerHTML=t.short;
owner.innerHTML=t.owner;
price.innerHTML=t.price;
titles.innerHTML=t.titles;
players.innerHTML=t.players;

card.className="team-card";

card.classList.add(

"theme-"+t.short.toLowerCase()

);

teamLogo.style.opacity="1";

},200);

});

});
