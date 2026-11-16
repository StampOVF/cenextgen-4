(() => {
  const DATA = [
    { name: "Pikachu", element: "Electric", level: 25, hp: 35, attack: 55, isLegendary: false },
    { name: "Squirtle", element: "Water", level: 12, hp: 44, attack: 48, isLegendary: false },
    { name: "Bulbasaur", element: "Grass", level: 10, hp: 45, attack: 49, isLegendary: false },
    { name: "Charmander", element: "Fire", level: 14, hp: 39, attack: 52, isLegendary: false },
    { name: "Eevee", element: "Normal", level: 20, hp: 55, attack: 55, isLegendary: false },
    { name: "Sylveon", element: "Fairy", level: 40, hp: 95, attack: 65, isLegendary: false },
    { name: "Gyarados", element: "Water", level: 45, hp: 95, attack: 125, isLegendary: false },
    { name: "Mewtwo", element: "Psychic", level: 70, hp: 106, attack: 110, isLegendary: true },
    { name: "Celebi", element: "Grass", level: 50, hp: 100, attack: 100, isLegendary: true },
    { name: "Raichu", element: "Electric", level: 32, hp: 60, attack: 90, isLegendary: false },
  ];
  const P = (name) => DATA.find((p) => p.name === name);
  const clone = (v) => JSON.parse(JSON.stringify(v));

  const pick = (getter) => { try { const f = getter(); return typeof f === "function" ? f : null; } catch (e) { return null; } };
  const FN = {
    getEmoji: pick(() => getEmoji),
    isEven: pick(() => isEven),
    getRank: pick(() => getRank),
    describe: pick(() => describe),
    getNames: pick(() => getNames),
    totalHp: pick(() => totalHp),
    countElement: pick(() => countElement),
    averageLevel: pick(() => averageLevel),
    findByName: pick(() => findByName),
    strongest: pick(() => strongest),
    legendaryNames: pick(() => legendaryNames),
    battle: pick(() => battle),
  };

  const equals = (expected) => ({
    show: JSON.stringify(expected),
    check: (got) => typeof expected === "number"
      ? typeof got === "number" && Math.abs(got - expected) < 1e-9
      : JSON.stringify(got) === JSON.stringify(expected),
  });
  const isPokemon = (name) => ({
    show: `the ${name} object`,
    check: (got) => got !== null && typeof got === "object" && got.name === name,
  });

  const LEVELS = ["Level 1 · if / else & functions", "Level 2 · arrays & loops", "Level 3 · objects", "Boss level"];

  const TASKS = [
    { lv: 0, name: "getEmoji", sig: "getEmoji(element)", desc: "Electric → ⚡, Water → 💧, Fire → 🔥, Grass → 🌿, anything else → ❓",
      cases: [[["Electric"], equals("⚡")], [["Water"], equals("💧")], [["Fire"], equals("🔥")], [["Grass"], equals("🌿")], [["Psychic"], equals("❓")]] },
    { lv: 0, name: "isEven", sig: "isEven(n)", desc: "true if n is even, false if it's odd",
      cases: [[[4], equals(true)], [[7], equals(false)], [[0], equals(true)], [[25], equals(false)]] },
    { lv: 0, name: "getRank", sig: "getRank(level)", desc: "50+ → Master, 30+ → Pro, 10+ → Rookie, otherwise → Newbie",
      cases: [[[70], equals("Master")], [[50], equals("Master")], [[32], equals("Pro")], [[30], equals("Pro")], [[10], equals("Rookie")], [[5], equals("Newbie")]] },
    { lv: 0, name: "describe", sig: "describe(p)", desc: 'A string like "Pikachu Lv.25 (Electric)"',
      cases: [[[P("Pikachu")], equals("Pikachu Lv.25 (Electric)")], [[{ name: "Mew", level: 1, element: "Psychic" }], equals("Mew Lv.1 (Psychic)")]] },

    { lv: 1, name: "getNames", sig: "getNames(list)", desc: "A new array with every Pokémon's name",
      cases: [[[DATA], equals(DATA.map((p) => p.name))], [[DATA.slice(0, 2)], equals(["Pikachu", "Squirtle"])], [[[]], equals([])]] },
    { lv: 1, name: "totalHp", sig: "totalHp(list)", desc: "Every hp in the list added together",
      cases: [[[DATA], equals(674)], [[DATA.slice(0, 2)], equals(79)], [[[]], equals(0)]] },
    { lv: 1, name: "countElement", sig: "countElement(list, element)", desc: "How many Pokémon have that element",
      cases: [[[DATA, "Water"], equals(2)], [[DATA, "Electric"], equals(2)], [[DATA, "Fairy"], equals(1)], [[DATA, "Dragon"], equals(0)]] },
    { lv: 1, name: "averageLevel", sig: "averageLevel(list)", desc: "(all levels added together) ÷ (how many Pokémon)",
      cases: [[[DATA], equals(31.8)], [[DATA.slice(0, 2)], equals(18.5)]] },

    { lv: 2, name: "findByName", sig: "findByName(list, name)", desc: "The whole Pokémon object with that name, or null",
      cases: [[[DATA, "Eevee"], isPokemon("Eevee")], [[DATA, "Mewtwo"], isPokemon("Mewtwo")], [[DATA, "Agumon"], equals(null)]] },
    { lv: 2, name: "strongest", sig: "strongest(list)", desc: "The Pokémon object with the highest attack",
      cases: [[[DATA], isPokemon("Gyarados")], [[DATA.slice(0, 4)], isPokemon("Pikachu")], [[DATA.slice(1, 4)], isPokemon("Charmander")]] },
    { lv: 2, name: "legendaryNames", sig: "legendaryNames(list)", desc: "An array of names where isLegendary is true",
      cases: [[[DATA], equals(["Mewtwo", "Celebi"])], [[DATA.slice(0, 3)], equals([])]] },

    { lv: 3, name: "battle", sig: "battle(a, b)", desc: 'Power = attack + level. Return the stronger one\'s name, or "Draw"',
      cases: [[[P("Pikachu"), P("Squirtle")], equals("Pikachu")], [[P("Squirtle"), P("Pikachu")], equals("Pikachu")],
              [[P("Mewtwo"), P("Celebi")], equals("Mewtwo")], [[{ name: "A", attack: 10, level: 5 }, { name: "B", attack: 12, level: 3 }], equals("Draw")]] },
  ];

  const fmtArg = (a) => {
    if (a === DATA) return "pokemons";
    if (Array.isArray(a) && a.length && a.every((x) => DATA.includes(x))) return `[${a.map((x) => x.name).join(", ")}]`;
    if (a && typeof a === "object" && DATA.includes(a)) return a.name;
    return JSON.stringify(a);
  };
  const fmtVal = (v) => {
    if (v === undefined) return "undefined";
    if (v && typeof v === "object" && !Array.isArray(v) && v.name) return `the ${v.name} object`;
    try { return JSON.stringify(v); } catch (e) { return String(v); }
  };

  const results = TASKS.map((t) => {
    const fn = FN[t.name];
    if (!fn) return { t, status: "missing", msg: `Can't find a function called ${t.name}. Did you rename or delete it?` };
    for (let i = 0; i < t.cases.length; i++) {
      const [args, exp] = t.cases[i];
      let got;
      try {
        got = fn(...clone(args));
      } catch (e) {
        return { t, status: "fail", msg: `${t.name}(${args.map(fmtArg).join(", ")}) crashed: ${e.message}` };
      }
      if (i === 0 && got === undefined) return { t, status: "todo", msg: "Not started yet (it returns undefined). Did you forget return?" };
      if (!exp.check(got)) {
        return { t, status: "fail", msg: `${t.name}(${args.map(fmtArg).join(", ")}) should return ${exp.show}, but returned ${fmtVal(got)}` };
      }
    }
    return { t, status: "pass", msg: "All tests passed!" };
  });

  const $ = (s) => document.querySelector(s);
  const passed = results.filter((r) => r.status === "pass").length;
  $("#score").textContent = `★ ${passed} / ${TASKS.length}`;
  $("#progress-bar").style.width = `${(passed / TASKS.length) * 100}%`;

  const levelsLine = LEVELS.map((label, lv) => {
    const inLevel = results.filter((r) => r.t.lv === lv);
    const done = inLevel.every((r) => r.status === "pass");
    return `${done ? "★" : "☆"} ${label.split(" · ")[0]}`;
  });
  $("#levels").textContent = levelsLine.join("   ");

  const icons = { pass: "✅", fail: "❌", todo: "⬜", missing: "❌" };
  const tasksEl = $("#tasks");
  LEVELS.forEach((label, lv) => {
    const section = document.createElement("section");
    section.className = "panel level" + (lv === 3 ? " boss" : "");
    const inLevel = results.filter((r) => r.t.lv === lv);
    const done = inLevel.every((r) => r.status === "pass");
    section.innerHTML = `<h2>${label} ${done ? "<span class='cleared'>CLEARED!</span>" : ""}</h2>`;
    for (const r of inLevel) {
      const div = document.createElement("div");
      div.className = `task ${r.status}`;
      const num = TASKS.indexOf(r.t) + 1;
      div.innerHTML = `<p class="task-head"><span class="icon">${icons[r.status]}</span> <b>${num}. <code></code></b></p>
        <p class="desc"></p><p class="msg"></p>`;
      div.querySelector("code").textContent = r.t.sig;
      div.querySelector(".desc").textContent = r.t.desc;
      div.querySelector(".msg").textContent = r.msg;
      section.append(div);
    }
    tasksEl.append(section);
  });

  if (window.__errors && window.__errors.length) {
    const banner = $("#error-banner");
    banner.textContent = `⚠ script.js has an error, so some functions may not load: ${window.__errors[0]}. Open the Console (Ctrl + Shift + J) to see which line.`;
    banner.classList.remove("hidden");
  }

  if (passed === TASKS.length) {
    document.body.classList.add("all-done");
    $("#score").textContent = `★ ${passed} / ${TASKS.length} · DEX COMPLETE! Raise your hand!`;
  }

  const safe = (fn, ...args) => { try { const v = fn ? fn(...args) : undefined; return v === undefined ? null : v; } catch (e) { return null; } };
  let DEX = DATA;
  try { if (Array.isArray(pokemons) && pokemons.length) DEX = pokemons; } catch (e) {}
  const tbody = $("#dex tbody");
  for (const p of DEX) {
    const tr = document.createElement("tr");
    const cells = [
      safe(FN.getEmoji, p.element) ?? "?",
      p.name,
      safe(FN.getRank, p.level) ?? "?",
      safe(FN.describe, clone(p)) ?? "?",
    ];
    for (const c of cells) {
      const td = document.createElement("td");
      td.textContent = String(c);
      if (c === "?") td.className = "unknown";
      tr.append(td);
    }
    tbody.append(tr);
  }
})();
