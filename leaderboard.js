const SUPABASE_URL = "https://ndioutmihxodqknvgfju.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kaW91dG1paHhvZHFrbnZnZmp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMwNTg2NDMsImV4cCI6MjA5ODYzNDY0M30.KeSyXI6DFvYnKbBxICmrmQ8t8eFIoxPn9Ln1aBU0OUk";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/* ================= ADMIN ================= */

const Auth = {
  isAdmin:false,

  login(){
    const pass = document.getElementById("adminPass").value;

    if(pass === "ffxipl2026"){
      this.isAdmin = true;
      document.getElementById("adminStatus").innerText = "✔ Admin";
      Render.load();
    } else {
      alert("Wrong password");
    }
  }
};

/* ================= UI ================= */

const UI = {
  open(team){
    if(!Auth.isAdmin) return;

    Editor.current = team;

    matches.value = team.matches;
    wins.value = team.wins;
    loss.value = team.loss;
    points.value = team.points;

    document.getElementById("modal").style.display="flex";
  },

  close(){
    document.getElementById("modal").style.display="none";
  }
};

/* ================= EDIT ================= */

const Editor = {
  current:null,

  async save(){

    await supabaseClient
      .from("leaderboard")
      .update({
        matches:+matches.value,
        wins:+wins.value,
        loss:+loss.value,
        points:+points.value
      })
      .eq("id", this.current.id);

    UI.close();
    Render.load();
  }
};

/* ================= RENDER ================= */

const Render = {

  async load(){

    const { data } = await supabaseClient
      .from("leaderboard")
      .select("*")
      .order("points",{ascending:false});

    const table = document.getElementById("tableBody");
    table.innerHTML="";

    data.forEach((t,i)=>{

      let rank = i===0?"🏆":i===1?"🥈":i===2?"🥉":"#"+(i+1);

      table.innerHTML += `
        <div class="row">
          <div>${rank}</div>
          <div>${t.team}</div>
          <div>${t.matches}</div>
          <div>${t.wins}</div>
          <div>${t.loss}</div>
          <div>${t.points}</div>
          <div>
            ${Auth.isAdmin ? `<button onclick='UI.open(${JSON.stringify(t)})'>Edit</button>` : "🔒"}
          </div>
        </div>
      `;
    });
  }
};

/* ================= REALTIME ================= */

supabaseClient
  .channel('live')
  .on('postgres_changes',{
    event:'*',
    schema:'public',
    table:'leaderboard'
  },()=>{
    Render.load();
  })
  .subscribe();

/* INIT */
Render.load();