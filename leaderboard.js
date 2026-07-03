const url = "https://ndioutmihxodqknvgfju.supabase.co";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kaW91dG1paHhvZHFrbnZnZmp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMwNTg2NDMsImV4cCI6MjA5ODYzNDY0M30.KeSyXI6DFvYnKbBxICmrmQ8t8eFIoxPn9Ln1aBU0OUk";

const client = supabase.createClient(url, key);

let admin = false;

// LOGIN
function login(){
  const pass = document.getElementById("pass").value.trim();

  if(pass === "admin123"){
    admin = true;
    document.getElementById("status").innerText = "🔓 Unlocked";
    load();
  } else {
    alert("Wrong Password");
  }
}

// LOAD
async function load(){

  const { data } = await client
    .from("leaderboard")
    .select("*")
    .order("points",{ascending:false});

  render(data);
}

// RENDER
function render(data){

  const box = document.getElementById("rows");
  box.innerHTML = ""; // IMPORTANT FIX

  data.forEach((t, i) => {

    box.innerHTML += `
<div class="row">

  <div><div class="rank">${i + 1}</div></div>

  <div class="team">
    <div class="teamRow">
       <div class="logoBox">
   <img src="${t.logo}" class="${t.team}">
</div>
    
      <div>
        <b>${t.team}</b>
        
        <small>${t.fullname || ''}</small>
      </div>
    </div>
  </div>

  <div onclick="edit(${t.id},'matches',${t.matches})">${t.matches}</div>
  <div onclick="edit(${t.id},'wins',${t.wins})">${t.wins}</div>
  <div onclick="edit(${t.id},'loss',${t.loss})">${t.loss}</div>

  <div onclick="edit(${t.id},'points',${t.points})" class="points">
    ${t.points}
  </div>

  <div class="lock">🔒</div>

</div>
    `;

  });
}


// EDIT ANY FIELD
async function edit(id, field, value){

  if(!admin){
    alert("Admin only");
    return;
  }

  const v = prompt("Edit " + field, value);
  if(v === null) return;

  const obj = {};
  obj[field] = parseInt(v);

  await client
    .from("leaderboard")
    .update(obj)
    .eq("id", id);

  load();
}

load();
