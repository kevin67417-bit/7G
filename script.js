const games = [
  {name:"Minecraft", icon:"⛏️", category:"Minecraft"},
  {name:"Geometry Dash", icon:"🟨", category:"Action"},
  {name:"Grand Theft Auto", icon:"🚗", category:"Action"},
  {name:"FNAF", icon:"🐻", category:"Action"},
  {name:"Supercar Legends", icon:"🏎️", category:"Car"},
  {name:"Moto Trap", icon:"🏍️", category:"Car"},
  {name:"Tank Battle", icon:"🪖", category:"Shooting"},
  {name:"2 Player Soccer", icon:"⚽", category:"Sports"},
  {name:"Basketball", icon:"🏀", category:"Sports"},
  {name:"Fire & Water", icon:"🔥", category:"2 Player"},
  {name:"Duck Merge", icon:"🦆", category:"2 Player"},
  {name:"Zombie Attack", icon:"🧟", category:"Shooting"}
];

const grid = document.querySelector("#games");
const search = document.querySelector("#search");

function showGames(list) {
  grid.innerHTML = list.length ? list.map(game => `
    <article class="card" onclick="openGame('${game.name.replace(/'/g, "\\'")}')">
      <div class="thumb">${game.icon}</div>
      <div class="info">
        <h3>${game.name}</h3>
        <span>${game.category}</span>
      </div>
    </article>
  `).join("") : "<p>No games found.</p>";
}

function filter(category = "All") {
  const q = search.value.toLowerCase().trim();
  const result = games.filter(g =>
    (category === "All" || g.category === category) &&
    g.name.toLowerCase().includes(q)
  );
  showGames(result);
}

function openGame(name) {
  alert("You clicked: " + name + "\\n\\nPut your real game URL inside openGame() to launch it.");
}

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    filter(link.dataset.category);
  });
});

search.addEventListener("input", () => filter());
showGames(games);
