"use strict";

/*==================================================
FREEFIREXIPL
HOME CONTROLLER
Standalone Version
==================================================*/

/*==================================================
DOM
==================================================*/

const App = {

    splash: document.getElementById("splashScreen"),

    menuButton: document.getElementById("menuButton"),

    sideDrawer: document.getElementById("sideDrawer"),

    drawerOverlay: document.getElementById("drawerOverlay"),

    searchButton: document.getElementById("searchButton"),

    searchOverlay: document.getElementById("searchOverlay"),

    notificationButton: document.getElementById("notificationButton"),

    notificationPanel: document.getElementById("notificationPanel"),

    fab: document.getElementById("fabButton"),

    loader: document.getElementById("globalLoader"),

    toastContainer: document.getElementById("toastContainer")

};

/*==================================================
INIT
==================================================*/

function initApp(){

    hideSplash();

    setupDrawer();

    setupSearch();

    setupNotifications();

    setupFab();

    setupRippleButtons();

    animateCounters();

    monitorConnection();

}

/*==================================================
SPLASH
==================================================*/

/*=========================
PREMIUM SPLASH
=========================*/

function hideSplash(){

    if(!App.splash) return;

    const progress=document.getElementById("loadingProgress");

    const percent=document.getElementById("loadingValue");

    const text=document.getElementById("loadingText");

    const messages=[

        "Initializing League...",

        "Loading Teams...",

        "Loading Players...",

        "Preparing Arena...",

        "Starting Season 11..."

    ];

    let value=0;

    const timer=setInterval(()=>{

        value++;

        progress.style.width=value+"%";

        percent.textContent=value+"%";

        if(value%20===0){

            text.textContent=

            messages[(value/20)-1];

        }

        if(value>=100){

            clearInterval(timer);

            App.splash.classList.add("hide");

        }

    },20);

}

/*==================================================
DRAWER
==================================================*/

function setupDrawer(){

    if(!App.menuButton) return;

    App.menuButton.addEventListener("click",()=>{

        App.sideDrawer.classList.add("open");

        App.drawerOverlay.classList.add("active");

    });

    App.drawerOverlay.addEventListener("click",closeDrawer);

}

function closeDrawer(){

    App.sideDrawer.classList.remove("open");

    App.drawerOverlay.classList.remove("active");

}

/*==================================================
SEARCH
==================================================*/

function setupSearch(){

    if(!App.searchButton) return;

    App.searchButton.addEventListener("click",()=>{

        App.searchOverlay.classList.add("active");

    });

    App.searchOverlay.addEventListener("click",(e)=>{

        if(e.target===App.searchOverlay){

            App.searchOverlay.classList.remove("active");

        }

    });

}

/*==================================================
NOTIFICATIONS
==================================================*/

function setupNotifications(){

    if(!App.notificationButton) return;

    App.notificationButton.addEventListener("click",()=>{

        App.notificationPanel.classList.toggle("open");

    });

}


/*==================================================
TOAST SYSTEM
==================================================*/

function showToast(title,message){

    if(!App.toastContainer) return;

    const toast=document.createElement("div");

    toast.className="toast";

    toast.innerHTML=`

        <strong>${title}</strong>

        <p>${message}</p>

    `;

    App.toastContainer.appendChild(toast);

    requestAnimationFrame(()=>{

        toast.classList.add("show");

    });

    setTimeout(()=>{

        toast.classList.remove("show");

        setTimeout(()=>{

            toast.remove();

        },300);

    },3000);

}

/*==================================================
BUTTON RIPPLE EFFECT
==================================================*/

function setupRippleButtons(){

    document.querySelectorAll("button").forEach(button=>{

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

}

/*==================================================
COUNTER ANIMATION
==================================================*/

function animateCounters(){

    document.querySelectorAll("[data-count]").forEach(counter=>{

        const target=parseInt(

            counter.dataset.count,

            10

        )||0;

        let current=0;

        const increment=Math.max(

            1,

            Math.ceil(target/40)

        );

        const timer=setInterval(()=>{

            current+=increment;

            if(current>=target){

                current=target;

                clearInterval(timer);

            }

            counter.textContent=current;

        },25);

    });

}

/*==================================================
SMOOTH SCROLL
==================================================*/

document.querySelectorAll('a[href^="#"]').forEach(link=>{

    link.addEventListener("click",function(e){

        const target=document.querySelector(

            this.getAttribute("href")

        );

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth",

                block:"start"

            });

        }

    });

});

/*==================================================
ESC SHORTCUTS
==================================================*/

document.addEventListener("keydown",(e)=>{

    if(e.key!=="Escape") return;

    closeDrawer();

    App.searchOverlay?.classList.remove("active");

    App.notificationPanel?.classList.remove("open");

});

/*==================================================
ONLINE / OFFLINE
==================================================*/

function monitorConnection(){

    function updateStatus(){

        if(navigator.onLine){

            showToast(

                "Online",

                "Connection restored."

            );

            document.body.classList.remove("offline");

        }else{

            showToast(

                "Offline",

                "You are currently offline."

            );

            document.body.classList.add("offline");

        }

    }

    window.addEventListener(

        "online",

        updateStatus

    );

    window.addEventListener(

        "offline",

        updateStatus

    );

}



/*==================================================
HEADER SCROLL EFFECT
==================================================*/

function setupHeader(){

    const header=document.getElementById("appHeader");

    if(!header) return;

    window.addEventListener("scroll",()=>{

        if(window.scrollY>15){

            header.classList.add("scrolled");

        }else{

            header.classList.remove("scrolled");

        }

    });

}

/*==================================================
BOTTOM NAVIGATION
==================================================*/

function setupBottomNavigation(){

    const items=document.querySelectorAll("#bottomNav a");

    items.forEach(item=>{

        item.addEventListener("click",()=>{

            items.forEach(link=>{

                link.classList.remove("active");

            });

            item.classList.add("active");

        });

    });

}


/*==================================================
AUTO REFRESH
==================================================*/

setInterval(()=>{

    refreshHome();

},30000);

/*==================================================
PAGE VISIBILITY
==================================================*/

document.addEventListener(

    "visibilitychange",

    ()=>{

        if(!document.hidden){

            refreshHome();

        }

    }

);

/*==================================================
START APPLICATION
==================================================*/

document.addEventListener(

    "DOMContentLoaded",

    ()=>{

        initApp();

        setupHeader();

        setupBottomNavigation();

    }

);
// ---------- Hero embers ----------
  (function(){
    const canvas = document.getElementById('hero-embers');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let w, h, particles = [];
    function resize(){ w = canvas.width = canvas.offsetWidth; h = canvas.height = canvas.offsetHeight; }
    function init(){
      particles = Array.from({length: 26}, () => ({
        x: Math.random() * w, y: h + Math.random() * h,
        r: Math.random() * 1.6 + 0.5, speed: Math.random() * 0.4 + 0.1,
        drift: (Math.random() - 0.5) * 0.25, alpha: Math.random() * 0.45 + 0.15
      }));
    }
    function animate(){
      ctx.clearRect(0,0,w,h);
      particles.forEach(p => {
        p.y -= p.speed; p.x += p.drift;
        if (p.y < -8){ p.y = h + 8; p.x = Math.random() * w; }
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
        ctx.fillStyle = `rgba(240,169,60,${p.alpha})`;
        ctx.shadowColor = 'rgba(240,169,60,0.8)'; ctx.shadowBlur = 5;
        ctx.fill();
      });
      requestAnimationFrame(animate);
    }
    if (!reduceMotion){ resize(); init(); animate(); window.addEventListener('resize', () => { resize(); init(); }); }
  })();

