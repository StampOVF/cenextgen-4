// =====================================================
// Pixel Dex Challenge
// Write the code inside each function, SAVE, then REFRESH the page (F5).
// =====================================================


// ---------- Level 1 · if / else & functions ----------

// 1. Return the emoji for an element:
//    "Electric" → "⚡"   "Water" → "💧"   "Fire" → "🔥"   "Grass" → "🌿"
//    anything else → "❓"
function getEmoji(element) {
  let Emoji = "";
  if (element === "Electric") {
    return "⚡";
  } else if (element === "Water") {
    return "💧";
  } else if (element === "Fire") {
    return "🔥";
  } else if (element === "Grass") {
    return "🌿";
  } else {
    return "❓";
  }
}

// 2. Return true if n is even, or false if it's odd.   (Hint: %)
function isEven(n) {
  return n % 2 === 0;
}

// 3. Return a rank based on the level:
//    50 or more → "Master"   30 or more → "Pro"   10 or more → "Rookie"   otherwise → "Newbie"
//    (Hint: else if, and check the biggest one first)
function getRank(level) {
  if (level >= 50) {
    return "Master";
  } else if (level >= 30) {
    return "Pro";
  } else if (level >= 10) {
    return "Rookie";
  } else {
    return "Newbie";
  }
}

// 4. Return a string like:  "Pikachu Lv.25 (Electric)"
//    p is ONE Pokémon object.   (Hint: template literal + p.name, p.level, p.element)
function describe(p) {
  return `${p.name} Lv.${p.level} (${p.element})`;
}


// ---------- Level 2 · arrays & loops ----------

// 5. Return a NEW array with the name of every Pokémon in the list.
//    (Hint: start with an empty array [], loop with for...of, and push each name)
function getNames(list) {
  const names = [];
  for (const pokemon of list) {
    names.push(pokemon.name);
  }
  return names;
}

// 6. Return the total hp of every Pokémon in the list added together.
//    (Hint: start with let total = 0)
function totalHp(list) {
  let total = 0;
  for (const pokemon of list) {
    total += pokemon.hp;
  }
  return total;
}

// 7. Return how many Pokémon in the list have this element.
//    Example: countElement(pokemons, "Water") → 2
function countElement(list, element) {
  let count = 0;
  for (const pokemon of list) {
    if (pokemon.element === element) {
      count++;
    }
  }
  return count;
}

// 8. Return the average level:  (all the levels added together) ÷ (how many Pokémon)
//    (Hint: list.length is how many there are)
function averageLevel(list) {
  let total = 0;
  for (const pokemon of list) {
    total += pokemon.level;
  }
  return total / list.length;
}


// ---------- Level 3 · objects ----------

// 9. Return the whole Pokémon object whose name matches.
//    If there isn't one, return null.
//    Example: findByName(pokemons, "Eevee") → { name: "Eevee", element: "Normal", ... }
function findByName(list, name) {
if (list.length === 0) {
  return null;
}
for (const pokemon of list) {
  if (pokemon.name === name) {
    return pokemon;
  }
}
return null;
}

// 10. Return the Pokémon object with the highest attack.
//     (Hint: let best = list[0]; then loop, and replace best when you find a stronger one)
function strongest(list) {
  if (list.length === 0) {
    return null;
  }
  let best = list[0];
  for (const pokemon of list) {
    if (pokemon.attack > best.attack) {
      best = pokemon;
    }
  }
  return best;
}

// 11. Return an array with the names of the legendary Pokémon (isLegendary is true).
function legendaryNames(list) {
  const names = [];
  for (const pokemon of list) {
    if (pokemon.isLegendary) {
      names.push(pokemon.name);
    }
  }
  return names;
}


// ---------- Boss level ----------

// 12. Battle! Each Pokémon's power is:  attack + level
//     Return the NAME of the one with more power.
//     If they have the same power, return "Draw".
function battle(a, b) {
if (a.attack + a.level > b.attack + b.level) {
  return a.name;
} else if (b.attack + b.level > a.attack + a.level) {
  return b.name;
} else {
  return "Draw";
}
}


// ---------- Playground Zone ----------
// Test your functions here. The results show up in the Console:
// Ex. console.log(pokemons)
// Ex. console.log(getEmoji("Fire"));
// Ex. console.log(getNames(pokemons));
