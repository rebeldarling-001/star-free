console.log("FREEFIREXIPL Schedule Started");


/* ==========================
SUPABASE DATA
========================== */


const container = document.getElementById("matchContainer");


let selectedDateId = null;



/* ==========================
TEAM DATA
========================== */


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


const TEAM_NAMES = {

SRH:"Sunrisers Hyderabad",
RCB:"Royal Challengers",
CSK:"Chennai Super Kings",
MI:"Mumbai Indians",
RR:"Rajasthan Royals",
KKR:"Kolkata Knight Riders",
DC:"Delhi Capitals",
PBKS:"Punjab Kings"

};



/* ==========================
LOAD DATES
========================== */


async function loadDates(){


const {data,error}=await supabaseClient

.from("schedule_dates")

.select("*")

.order("id");



if(error){

console.log(error);
return;

}


createDateCards(data);


}



/* ==========================
CREATE DATE BUTTONS
========================== */


function createDateCards(dates){


const slider=document.querySelector(".date-slider");


slider.innerHTML="";



dates.forEach((date,index)=>{


slider.innerHTML += `

<div class="date-card ${index===0?"active":""}"

onclick="selectDate(${date.id},this)">


<div class="day">

${date.day_name}

</div>


<div class="date">

${date.match_date}

</div>


</div>

`;



if(index===0){

selectedDateId = date.id;
selectDate(date.id, document.querySelector(".date-card"));

}


});


}



/* ==========================
SELECT DATE
========================== */


async function selectDate(id,card){


document
.querySelectorAll(".date-card")
.forEach(x=>x.classList.remove("active"));



card.classList.add("active");


selectedDateId=id;



const {data}=await supabaseClient

.from("schedule_dates")

.select("unlocked")

.eq("id",id)

.single();



if(!data.unlocked){


container.innerHTML=`

<div class="match-card">

<div class="center"
style="width:100%;text-align:center;padding:40px">


<i class="fas fa-lock"
style="font-size:35px;color:#D6A93C">
</i>


<h2>
Schedule Locked
</h2>


<p>
Admin will unlock this date.
</p>


</div>

</div>

`;

return;

}



loadMatches(id);


}



/* ==========================
LOAD MATCHES
========================== */


async function loadMatches(dateId){


const {data,error}=await supabaseClient

.from("schedule_matches")

.select("*")

.eq("date_id",dateId)

.order("id");



if(error){

console.log(error);
return;

}



container.innerHTML="";



if(!data.length){


container.innerHTML=`

<div class="match-card">

<div class="center"
style="width:100%;padding:30px">

<h3>
No Matches
</h3>

</div>

</div>

`;

return;

}



data.forEach(match=>{


container.innerHTML += createMatchCard(match);


});


}



/* ==========================
MATCH CARD
========================== */


function createMatchCard(match){


return `

<div class="match-card ${match.status==="LIVE"?"live":""}">






<div class="team">


<img src="${TEAM_LOGOS[match.team1]}">


<h3>
${match.team1}
</h3>


<p>
${TEAM_NAMES[match.team1]}
</p>


</div>



<div class="center">


<div class="match-no">
${match.match_no}
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


<img src="${TEAM_LOGOS[match.team2]}">


<h3>
${match.team2}
</h3>


<p>
${TEAM_NAMES[match.team2]}
</p>


</div>


</div>

`;

}



/* ==========================
START
========================== */


window.onload=()=>{


loadDates();


console.log("Schedule Loaded");


};

// HOME RETURN BUTTON

const homeButton = document.getElementById("homeButton");


if(homeButton){

homeButton.onclick = ()=>{


homeButton.classList.add("active");


setTimeout(()=>{

window.location.href="index.html";

},250);


};


}