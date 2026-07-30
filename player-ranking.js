/*=========================================
FREEFIREXIPL
PLAYER RANKINGS
=========================================*/

/*=========================================
SEARCH
=========================================*/

const searchInput = document.getElementById("playerSearch");

if(searchInput){

searchInput.addEventListener("keyup",()=>{

const value = searchInput.value.toLowerCase();

document.querySelectorAll(".rankCard").forEach(card=>{

const text = card.innerText.toLowerCase();

if(text.includes(value)){

card.style.display="flex";

}else{

card.style.display="none";

}

});

});

}

/*=========================================
HOVER EFFECT
=========================================*/

document.querySelectorAll(".rankCard").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;

const y = e.clientY - rect.top;

card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,180,0,.10), #101010)`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="#101010";

});

});

/*=========================================
ENTRANCE ANIMATION
=========================================*/

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{
threshold:.15
});

document.querySelectorAll(".rankCard").forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(40px)";

card.style.transition=".6s ease";

observer.observe(card);

});

/*=========================================
LAST UPDATED
=========================================*/

const updateText=document.querySelector(".lastUpdated span");

if(updateText){

const today=new Date();

updateText.innerHTML="Last Updated : "+today.toLocaleDateString()+" • "+today.toLocaleTimeString([],{

hour:'2-digit',

minute:'2-digit'

});

}

/*=========================================
TOP PLAYER GLOW
=========================================*/

const champion=document.querySelector(".numberOne");

let glow=true;

setInterval(()=>{

if(champion){

champion.style.boxShadow=glow

?

"0 0 45px rgba(255,180,0,.25)"

:

"0 0 20px rgba(255,180,0,.08)";

glow=!glow;

}

},1200);

console.log("FREEFIREXIPL Player Rankings Loaded");