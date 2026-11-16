// =====================================================
// Fix the Glitched Page!
// A virus scrambled this trainer card. Fix it using ONLY JavaScript.
//
// RULE: don't touch index.html or style.css. Write everything in this file.
// Save, then refresh the page (F5). The "System check" panel shows what's fixed.
//
// Tip: try each line in the Console first. When it works, copy it here.
// =====================================================

// Data you can use (don't change it, just use it!)
const trainer = {
  name: "N'NextGen",
  motto: "Code, debug, repeat!",
  hp: 120,
  atk: 85,
  spd: 95,
};

const team = [
  { name: "Pikachu", element: "⚡" },
  { name: "Sylveon", element: "🎀" },
  { name: "Gyarados", element: "💧" },
];


// ---------- Level 1 · Change the text (querySelector + textContent) ----------

// Mission 1: change the title (#title) to:  Trainer Card
const title = document.querySelector("#title");
title.textContent = "trainer card";

// Mission 2: put your own nickname in #trainer-name
const trainerName = document.querySelector("#trainer-name");
trainerName.textContent = "Stamp";

// Mission 3: put a motto in #motto (use trainer.motto, or write your own!)
const motto = document.querySelector("#motto");
motto.textContent = trainer.motto;


// ---------- Level 2 · Change the look (classList + style) ----------

// Mission 4: remove the class "glitch" from #card   (watch the shaking stop!)
const card =document.querySelector("#card");
card.classList.remove("glitch");

// Mission 5: add the class "highlight" to #trainer-name
trainerName.classList.add("highlight");

// Mission 6: change the color of #motto using .style.color
motto.style.color = "blue";


// ---------- Level 3 · Change attributes (src, alt, href) ----------

// Mission 7: change the picture: set the src of #avatar to "avatar.svg"
const avatar = document.querySelector("#avatar");
avatar.src = "avatar.svg";

// Mission 8: give #avatar a real alt text (describe the picture in words)
avatar.alt = "pic trainer";

// Mission 9: fix #link: set its href to a real website (starting with https://)
//            and change its text too

const link = document.querySelector("#link");
link.href = "https://www.google.com";
link.textContent = "Google";

// ---------- Level 4 · Use the data (objects + DOM) ----------

// Mission 10: fill #hp, #atk and #spd with trainer.hp, trainer.atk and trainer.spd
const hp = document.querySelector("#hp");
hp.textContent = trainer.hp;
const atk = document.querySelector("#atk");
atk.textContent = trainer.atk;
const spd = document.querySelector("#spd");
spd.textContent = trainer.spd;

// Mission 11: make EVERY .badge shiny: add the class "shiny" to each one
//             (Hint: querySelectorAll + for...of)
const badges = document.querySelectorAll(".badge");
for (const badge of badges){
  badge.classList.add("shiny");
}


// ---------- Boss level ----------

// Mission 12: fill the list #team with every Pokémon in the `team` array.
//   Hint: select #team and set its innerHTML to "" (empty).
//         Then loop over team, and for each one add a new <li>:
//         list.innerHTML += `<li>${p.element} ${p.name}</li>`;

const teamList = document.querySelector("#team");
teamList.innerHTML = "";
for (const pokemon of team) {
  teamList.innerHTML += `<li>${pokemon.element} ${pokemon.name}</li>`;
}

// Secret bonus: make the 🌙 Night mode button (#night-btn) toggle the class "night" on the body.
//   This needs addEventListener: the "Listen" step from the 3-step formula slide!
const nightBtn = document.querySelector("#night-btn");
nightBtn.addEventListener("click", function() {
  document.body.classList.toggle("night");
});