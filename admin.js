/* =================================
   FREEFIREXIPL ADMIN JS
================================= */


const PASSWORD = "1234";



const teams = {

SRH:"SRHlogo.png",
RCB:"RCBlogo.png",
CSK:"CSKlogo.png",
MI:"MIlogo.png",
RR:"RRlogo.png",
KKR:"KKRlogo.png",
DC:"DClogo.png",
PBKS:"PBKSlogo.png"

};





let schedule=[

{
date:"08 FEB 2026",
locked:false,

matches:[

["SRH","RCB"],
["MI","CSK"],
["KKR","RR"],
["DC","PBKS"]

]

},


{
date:"09 FEB 2026",
locked:true,

matches:[

["SRH","RCB"],
["MI","CSK"],
["KKR","RR"],
["DC","PBKS"]

]

}


];



let selected=null;







// LOGIN


loginBtn.onclick=function(){


if(password.value===PASSWORD){


loginScreen.classList.add("hidden");

adminScreen.classList.remove("hidden");


loadDates();


}


};








// LOGOUT


logoutBtn.onclick=function(){


adminScreen.classList.add("hidden");

loginScreen.classList.remove("hidden");


};









// OPEN CALENDAR


openCalendar.onclick=function(){

calendarBox.classList.remove("hidden");

};





closeCalendar.onclick=function(){

calendarBox.classList.add("hidden");

};








// CREATE DATE


createDate.onclick=function(){


let value=datePicker.value;


if(!value)return;



let d=new Date(value);



let formatted=

d.getDate()
+" "
+
d.toLocaleString(
"en",
{
month:"short"
}
).toUpperCase()
+
" "
+
d.getFullYear();





schedule.push({

date:formatted,

locked:false,

matches:[

["SRH","RCB"],
["MI","CSK"],
["KKR","RR"],
["DC","PBKS"]

]

});



loadDates();



calendarBox.classList.add("hidden");


};









// LOAD DATES


function loadDates(){


dates.innerHTML="";



schedule.forEach((item,index)=>{


dates.innerHTML+=`


<div class="date-card">


<div>


<div class="date-name">

${item.date}

</div>


<div class="${item.locked?
'status-lock':
'status-open'}">


${item.locked?
"🔒 LOCKED":
"🟢 OPEN"}

</div>


</div>



<div class="actions">


<button onclick="selectDay(${index})">

EDIT

</button>


<button onclick="lockDay(${index})">

${item.locked?
"OPEN":
"LOCK"}

</button>


<button onclick="deleteDay(${index})">

✖

</button>


</div>



</div>


`;


});


}








// LOCK


function lockDay(index){


schedule[index].locked=
!schedule[index].locked;


loadDates();


}







// DELETE


function deleteDay(index){


schedule.splice(index,1);


loadDates();


}







// SELECT


function selectDay(index){


selected=index;


selectedDate.innerHTML=
schedule[index].date;


loadMatches();


}









// LOAD MATCHES


function loadMatches(){


matches.innerHTML="";



schedule[selected]
.matches
.forEach((m,index)=>{


matches.innerHTML+=`


<div class="match-card">


<div class="match-title">

MATCH ${index+1}

</div>



<div class="team">


<img src="${teams[m[0]]}">


<select onchange="changeTeam(${index},0,this.value)">

${options(m[0])}

</select>


</div>



<div class="vs">

VS

</div>




<div class="team">


<img src="${teams[m[1]]}">


<select onchange="changeTeam(${index},1,this.value)">

${options(m[1])}

</select>


</div>


</div>


`;


});


}









function options(selected){


let html="";


Object.keys(teams)
.forEach(t=>{


html+=`

<option value="${t}"
${t==selected?"selected":""}>

${t}

</option>


`;


});


return html;


}







// CHANGE TEAM


function changeTeam(match,side,value){


schedule[selected]
.matches[match][side]=value;


loadMatches();


}







save.onclick=function(){


let msg=document.getElementById("saveMessage");


msg.classList.add("show");



setTimeout(()=>{

msg.classList.remove("show");

},2000);



};
backBtn.onclick=function(){

window.location.href="schedule1.html";

};