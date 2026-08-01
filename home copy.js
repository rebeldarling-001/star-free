/*==========================================
 FREEFIREXIPL V2 - HOME.JS
==========================================*/

"use strict";

/*==========================================
 INITIALIZE
==========================================*/

document.addEventListener("DOMContentLoaded", () => {

    startCountdown();

    setupNavigation();

    setupButtons();

    pageAnimation();

});

/*==========================================
 LIVE COUNTDOWN
==========================================*/

// Change this to your tournament date
const targetDate = new Date("2027-02-08T15:00:00").getTime();

function startCountdown(){

    updateCountdown();

    setInterval(updateCountdown,1000);

}

function updateCountdown(){

    const now = new Date().getTime();

    const distance = targetDate - now;

    if(distance <= 0){

        document.getElementById("days").textContent="00";
        document.getElementById("hours").textContent="00";
        document.getElementById("minutes").textContent="00";
        document.getElementById("seconds").textContent="00";

        return;

    }

    const days=Math.floor(distance/(1000*60*60*24));

    const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

    const minutes=Math.floor((distance%(1000*60*60))/(1000*60));

    const seconds=Math.floor((distance%(1000*60))/1000);

    document.getElementById("days").textContent=
    String(days).padStart(2,"0");

    document.getElementById("hours").textContent=
    String(hours).padStart(2,"0");

    document.getElementById("minutes").textContent=
    String(minutes).padStart(2,"0");

    document.getElementById("seconds").textContent=
    String(seconds).padStart(2,"0");

}

/*==========================================
 BOTTOM NAVIGATION
==========================================*/

function setupNavigation(){

    const items=document.querySelectorAll(".bottom-nav a");

    items.forEach(item=>{

        item.addEventListener("click",()=>{

            items.forEach(nav=>{

                nav.classList.remove("active");

            });

            item.classList.add("active");

        });

    });

}

/*==========================================
 BUTTON EFFECTS
==========================================*/

function setupButtons(){

    const buttons=document.querySelectorAll(

        ".primary-btn,.register-btn,.card"

    );

    buttons.forEach(btn=>{

        btn.addEventListener("click",()=>{

            btn.animate([

                {
                    transform:"scale(1)"
                },

                {
                    transform:"scale(.95)"
                },

                {
                    transform:"scale(1)"
                }

            ],{

                duration:180

            });

        });

    });

}

/*==========================================
 PAGE ANIMATION
==========================================*/

function pageAnimation(){

    document.body.animate([

        {

            opacity:0,

            transform:"translateY(20px)"

        },

        {

            opacity:1,

            transform:"translateY(0)"

        }

    ],{

        duration:700,

        easing:"ease"

    });

}

/*==========================================
        SCROLL HEADER EFFECT
==========================================*/

const header = document.querySelector(".topbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 20){

        header.style.background = "rgba(10,10,10,.95)";
        header.style.backdropFilter = "blur(25px)";
        header.style.borderBottom =
        "1px solid rgba(255,140,0,.20)";

    }else{

        header.style.background = "rgba(10,10,10,.85)";
        header.style.borderBottom =
        "1px solid rgba(255,255,255,.05)";

    }

});

/*==========================================
        RIPPLE EFFECT
==========================================*/

document.querySelectorAll(
".primary-btn,.register-btn,.card,.icon-btn"
).forEach(button=>{

    button.addEventListener("click",function(e){

        const ripple=document.createElement("span");

        ripple.className="ripple";

        const rect=this.getBoundingClientRect();

        ripple.style.left=(e.clientX-rect.left)+"px";

        ripple.style.top=(e.clientY-rect.top)+"px";

        this.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },600);

    });

});

/*==========================================
        HERO PARALLAX
==========================================*/

const hero=document.querySelector(".hero");

const heroImage=document.querySelector(".hero-bg");

if(hero && heroImage){

hero.addEventListener("mousemove",(e)=>{

const x=(e.clientX/window.innerWidth-.5)*10;

const y=(e.clientY/window.innerHeight-.5)*10;

heroImage.style.transform=

`translate(${x}px,${y}px) scale(1.05)`;

});

hero.addEventListener("mouseleave",()=>{

heroImage.style.transform="scale(1)";

});

}

/*==========================================
        SCROLL REVEAL
==========================================*/

const revealObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([

{

opacity:0,

transform:"translateY(40px)"

},

{

opacity:1,

transform:"translateY(0)"

}

],{

duration:700,

fill:"forwards",

easing:"ease"

});

}

});

},

{

threshold:.15

});

document.querySelectorAll(

".announcement,.tournament-card,.quick"

).forEach(section=>{

revealObserver.observe(section);

});

/*==========================================
        TOUCH FEEDBACK
==========================================*/

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("touchstart",()=>{

card.style.transform="scale(.96)";

});

card.addEventListener("touchend",()=>{

card.style.transform="scale(1)";

});

});

/*==========================================
        PAGE READY
==========================================*/

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

console.log("🔥 FREEFIREXIPL Home Ready");

});
/*==========================================
        SPLASH SCREEN
==========================================*/

window.addEventListener("load", () => {

    const splash = document.getElementById("splash");

    if(splash){

        setTimeout(() => {

            splash.classList.add("hide");

            setTimeout(() => {
                splash.remove();
            }, 700);

        }, 1800);

    }

});