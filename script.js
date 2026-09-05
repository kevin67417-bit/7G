const games = [
  {name:"Minecraft Classic", icon:"⛏️", category:"Minecraft", url:"https://classic.minecraft.net/"},
  {name:"Geometry Dash", icon:"🟨", category:"Action", url:"https://www.crazygames.com/"},
  {name:"Moto X3M", icon:"🏍️", category:"Car", url:"https://www.crazygames.com/game/moto-x3m"},
  {name:"Fireboy and Watergirl", icon:"🔥", category:"2 Player", url:"https://www.crazygames.com/game/fireboy-and-watergirl-the-forest-temple"},
  {name:"Steve's World", icon:"🧱", category:"Minecraft", url:"https://www.crazygames.com/game/steve-s-world"},
  {name:"Big Tower Tiny Square", icon:"🟪", category:"Action", url:"https://www.crazygames.com/game/big-tower-tiny-square"},
  {name:"Moto X3M Winter", icon:"❄️", category:"Car", url:"https://www.crazygames.com/game/moto-x3m-4"},
  {name:"Basketball", icon:"🏀", category:"Sports", url:"https://www.crazygames.com/"},
  {name:"Soccer", icon:"⚽", category:"Sports", url:"https://www.crazygames.com/"},
  {name:"Stickman", icon:"🕹️", category:"Action", url:"https://www.crazygames.com/it/game/stickman-that-one-level"}
];

const grid = document.querySelector("#games");
const search = document.querySelector("#search");

function showGames(list) {
  grid.innerHTML = list.length ? list.map(game => `
    <article class="card" onclick="openGame('${game.name.replace(/'/g, "\\'")}')">
      <div class="thumb">${game.icon}</div>
      <div class="info">
        <h3>${game.name}</h3>
        <span>${game.category}</span><div class="play-btn">PLAY ▶</div>
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
