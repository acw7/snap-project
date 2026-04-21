const pokemon = [
  { id: 1,   name: "Bulbasaur",  types: ["Grass","Poison"],   gen: 1, stats: { hp: 45,  attack: 49,  defense: 49,  spAtk: 65,  spDef: 65,  speed: 45  } },
  { id: 3,   name: "Venusaur",   types: ["Grass","Poison"],   gen: 1, stats: { hp: 80,  attack: 82,  defense: 83,  spAtk: 100, spDef: 100, speed: 80  } },
  { id: 4,   name: "Charmander", types: ["Fire"],             gen: 1, stats: { hp: 39,  attack: 52,  defense: 43,  spAtk: 60,  spDef: 50,  speed: 65  } },
  { id: 6,   name: "Charizard",  types: ["Fire","Flying"],    gen: 1, stats: { hp: 78,  attack: 84,  defense: 78,  spAtk: 109, spDef: 85,  speed: 100 } },
  { id: 7,   name: "Squirtle",   types: ["Water"],            gen: 1, stats: { hp: 44,  attack: 48,  defense: 65,  spAtk: 50,  spDef: 64,  speed: 43  } },
  { id: 9,   name: "Blastoise",  types: ["Water"],            gen: 1, stats: { hp: 79,  attack: 83,  defense: 100, spAtk: 85,  spDef: 105, speed: 78  } },
  { id: 25,  name: "Pikachu",    types: ["Electric"],         gen: 1, stats: { hp: 35,  attack: 55,  defense: 40,  spAtk: 50,  spDef: 50,  speed: 90  } },
  { id: 65,  name: "Alakazam",   types: ["Psychic"],          gen: 1, stats: { hp: 55,  attack: 50,  defense: 45,  spAtk: 135, spDef: 95,  speed: 120 } },
  { id: 68,  name: "Machamp",    types: ["Fighting"],         gen: 1, stats: { hp: 90,  attack: 130, defense: 80,  spAtk: 65,  spDef: 85,  speed: 55  } },
  { id: 94,  name: "Gengar",     types: ["Ghost","Poison"],   gen: 1, stats: { hp: 60,  attack: 65,  defense: 60,  spAtk: 130, spDef: 75,  speed: 110 } },
  { id: 130, name: "Gyarados",   types: ["Water","Flying"],   gen: 1, stats: { hp: 95,  attack: 125, defense: 79,  spAtk: 60,  spDef: 100, speed: 81  } },
  { id: 133, name: "Eevee",      types: ["Normal"],           gen: 1, stats: { hp: 55,  attack: 55,  defense: 50,  spAtk: 45,  spDef: 65,  speed: 55  } },
  { id: 143, name: "Snorlax",    types: ["Normal"],           gen: 1, stats: { hp: 160, attack: 110, defense: 65,  spAtk: 65,  spDef: 110, speed: 30  } },
  { id: 149, name: "Dragonite",  types: ["Dragon","Flying"],  gen: 1, stats: { hp: 91,  attack: 134, defense: 95,  spAtk: 100, spDef: 100, speed: 80  } },
  { id: 150, name: "Mewtwo",     types: ["Psychic"],          gen: 1, stats: { hp: 106, attack: 110, defense: 90,  spAtk: 154, spDef: 90,  speed: 130 } },
  { id: 196, name: "Espeon",     types: ["Psychic"],          gen: 2, stats: { hp: 65,  attack: 65,  defense: 60,  spAtk: 130, spDef: 95,  speed: 110 } },
  { id: 197, name: "Umbreon",    types: ["Dark"],             gen: 2, stats: { hp: 95,  attack: 65,  defense: 110, spAtk: 60,  spDef: 130, speed: 65  } },
  { id: 212, name: "Scizor",     types: ["Bug","Steel"],      gen: 2, stats: { hp: 70,  attack: 130, defense: 100, spAtk: 55,  spDef: 80,  speed: 65  } },
  { id: 248, name: "Tyranitar",  types: ["Rock","Dark"],      gen: 2, stats: { hp: 100, attack: 134, defense: 110, spAtk: 95,  spDef: 100, speed: 61  } },
  { id: 282, name: "Gardevoir",  types: ["Psychic","Fairy"],  gen: 3, stats: { hp: 68,  attack: 65,  defense: 65,  spAtk: 125, spDef: 115, speed: 80  } },
  { id: 376, name: "Metagross",  types: ["Steel","Psychic"],  gen: 3, stats: { hp: 80,  attack: 135, defense: 130, spAtk: 95,  spDef: 90,  speed: 70  } },
  { id: 445, name: "Garchomp",   types: ["Dragon","Ground"],  gen: 4, stats: { hp: 108, attack: 130, defense: 95,  spAtk: 80,  spDef: 85,  speed: 102 } },
  { id: 448, name: "Lucario",    types: ["Fighting","Steel"], gen: 4, stats: { hp: 70,  attack: 110, defense: 70,  spAtk: 115, spDef: 70,  speed: 90  } },
  { id: 470, name: "Leafeon",    types: ["Grass"],            gen: 4, stats: { hp: 65,  attack: 110, defense: 130, spAtk: 60,  spDef: 65,  speed: 95  } },
  { id: 471, name: "Glaceon",    types: ["Ice"],              gen: 4, stats: { hp: 65,  attack: 60,  defense: 110, spAtk: 130, spDef: 95,  speed: 65  } },
  { id: 571, name: "Zoroark",    types: ["Dark"],             gen: 5, stats: { hp: 60,  attack: 105, defense: 60,  spAtk: 120, spDef: 60,  speed: 105 } },
  { id: 658, name: "Greninja",   types: ["Water","Dark"],     gen: 6, stats: { hp: 72,  attack: 95,  defense: 67,  spAtk: 103, spDef: 71,  speed: 122 } },
  { id: 700, name: "Sylveon",    types: ["Fairy"],            gen: 6, stats: { hp: 95,  attack: 65,  defense: 65,  spAtk: 110, spDef: 130, speed: 60  } },
  { id: 778, name: "Mimikyu",    types: ["Ghost","Fairy"],    gen: 7, stats: { hp: 55,  attack: 90,  defense: 80,  spAtk: 50,  spDef: 105, speed: 96  } },
  { id: 887, name: "Dragapult",  types: ["Dragon","Ghost"],   gen: 8, stats: { hp: 88,  attack: 120, defense: 75,  spAtk: 100, spDef: 75,  speed: 142 } },
];

const TYPE_COLORS = {
  Normal:   "#A8A878",
  Fire:     "#F08030",
  Water:    "#6890F0",
  Grass:    "#78C850",
  Electric: "#F8C030",
  Ice:      "#70D0D0",
  Fighting: "#C03028",
  Poison:   "#A040A0",
  Ground:   "#C8A040",
  Flying:   "#A890F0",
  Psychic:  "#F85888",
  Bug:      "#A8B820",
  Rock:     "#B8A038",
  Ghost:    "#705898",
  Dragon:   "#7038F8",
  Dark:     "#584838",
  Steel:    "#888888",
  Fairy:    "#D45E9A",
};

let currentSearch = "";
let currentType = "All";
let currentSort = "id";

function totalStats(p) {
  const s = p.stats;
  return s.hp + s.attack + s.defense + s.spAtk + s.spDef + s.speed;
}

function getFilteredPokemon() {
  const filtered = pokemon.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(currentSearch.toLowerCase());
    const matchesType = currentType === "All" || p.types.includes(currentType);
    return matchesSearch && matchesType;
  });

  filtered.sort((a, b) => {
    if (currentSort === "id") return a.id - b.id;
    if (currentSort === "name") return a.name.localeCompare(b.name);
    if (currentSort === "total") return totalStats(b) - totalStats(a);
    return b.stats[currentSort] - a.stats[currentSort];
  });

  return filtered;
}

function render() {
  const container = document.getElementById("card-container");
  const filtered = getFilteredPokemon();

  document.getElementById("results-bar").textContent =
    `Showing ${filtered.length} of ${pokemon.length} Pokémon`;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <h2>No Pokémon found!</h2>
        <p>Try a different name or clear the type filter.</p>
      </div>`;
    return;
  }

  container.innerHTML = filtered.map((p) => {
    const spriteURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${p.id}.png`;

    const typeBadges = p.types.map((t) =>
      `<span class="type-badge" style="background:${TYPE_COLORS[t]}">${t}</span>`
    ).join("");

    const bgTint = TYPE_COLORS[p.types[0]] + "22";

    const statKeys = ["hp", "attack", "defense", "speed"];
    const statLabels = { hp: "HP", attack: "Atk", defense: "Def", speed: "Spd" };
    const MAX_STAT = 255;

    const statBars = statKeys.map((key) => {
      const val = p.stats[key];
      const fillPct = Math.round((val / MAX_STAT) * 100);
      return `
        <div class="stat-row">
          <span class="stat-label">${statLabels[key]}</span>
          <div class="stat-bar-track">
            <div class="stat-bar-fill" style="width:${fillPct}%; background:${TYPE_COLORS[p.types[0]]}"></div>
          </div>
          <span class="stat-value">${val}</span>
        </div>`;
    }).join("");

    return `
      <div class="card">
        <div class="card-image" style="background:${bgTint}">
          <span class="pokedex-num">#${String(p.id).padStart(3, "0")}</span>
          <span class="gen-badge">Gen ${p.gen}</span>
          <img src="${spriteURL}" alt="${p.name}" loading="lazy" />
        </div>
        <div class="card-body">
          <div class="card-name">${p.name}</div>
          <div class="type-badges">${typeBadges}</div>
          <div class="stats">${statBars}</div>
        </div>
      </div>`;
  }).join("");
}

function handleSearch(value) {
  currentSearch = value;
  render();
}

function handleSort(value) {
  currentSort = value;
  render();
}

function handleTypeFilter(type) {
  currentType = type;
  document.querySelectorAll(".type-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.type === type);
  });
  render();
}

function init() {
  const allTypes = ["All", ...[...new Set(pokemon.flatMap((p) => p.types))].sort()];

  document.getElementById("type-filters").innerHTML = allTypes.map((type) => {
    const color = type === "All" ? "#555555" : TYPE_COLORS[type];
    return `
      <button
        class="type-btn ${type === currentType ? "active" : ""}"
        data-type="${type}"
        style="background:${color}"
        onclick="handleTypeFilter('${type}')"
      >${type}</button>`;
  }).join("");

  document.getElementById("total-count").textContent = `${pokemon.length} Pokémon`;
  render();
}

document.addEventListener("DOMContentLoaded", init);
