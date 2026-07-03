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
FLOATING ACTION BUTTON
==================================================*/

function setupFab(){

    if(!App.fab) return;

    App.fab.addEventListener("click",()=>{

        showToast(

            "Quick Actions",

            "Feature coming soon."

        );

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
GLOBAL LOADER
==================================================*/

function showLoader(){

    if(!App.loader) return;

    App.loader.classList.add("active");

}

function hideLoader(){

    if(!App.loader) return;

    App.loader.classList.remove("active");

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
PULL TO REFRESH FOUNDATION
==================================================*/

let touchStartY=0;

window.addEventListener("touchstart",(e)=>{

    touchStartY=e.touches[0].clientY;

});

window.addEventListener("touchend",(e)=>{

    const touchEndY=e.changedTouches[0].clientY;

    if(window.scrollY===0 && touchEndY-touchStartY>120){

        refreshHome();

    }

});

/*==================================================
HOME REFRESH
==================================================*/

function refreshHome(){

    animateCounters();

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
