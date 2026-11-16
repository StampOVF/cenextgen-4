// Pixel Dex Challenge: solution

// ---------- Level 1 · if / else & functions ----------

function getEmoji(element) {
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

function isEven(n) {
  return n % 2 === 0;
}

function getRank(level) {
  if (level >= 50) return "Master";
  if (level >= 30) return "Pro";
  if (level >= 10) return "Rookie";
  return "Newbie";
}

function describe(p) {
  return `${p.name} Lv.${p.level} (${p.element})`;
}


// ---------- Level 2 · arrays & loops ----------

function getNames(list) {
  const names = [];
  for (const p of list) {
    names.push(p.name);
  }
  return names;
}

function totalHp(list) {
  let total = 0;
  for (const p of list) {
    total = total + p.hp;
  }
  return total;
}

function countElement(list, element) {
  let count = 0;
  for (const p of list) {
    if (p.element === element) {
      count = count + 1;
    }
  }
  return count;
}

function averageLevel(list) {
  let total = 0;
  for (const p of list) {
    total = total + p.level;
  }
  return total / list.length;
}


// ---------- Level 3 · objects ----------

function findByName(list, name) {
  for (const p of list) {
    if (p.name === name) {
      return p;           // found it: return stops the loop right away
    }
  }
  return null;            // the loop finished without finding it
}

function strongest(list) {
  let best = list[0];
  for (const p of list) {
    if (p.attack > best.attack) {
      best = p;
    }
  }
  return best;
}

function legendaryNames(list) {
  const names = [];
  for (const p of list) {
    if (p.isLegendary) {
      names.push(p.name);
    }
  }
  return names;
}


// ---------- Boss level ----------

function battle(a, b) {
  const powerA = a.attack + a.level;
  const powerB = b.attack + b.level;

  if (powerA > powerB) {
    return a.name;
  } else if (powerB > powerA) {
    return b.name;
  } else {
    return "Draw";
  }
}
