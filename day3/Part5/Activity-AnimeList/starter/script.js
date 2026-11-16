// =====================================================
// RULE: don't touch index.html, style.css or my-list.json. Write everything here.
// Open the page with Live Server. The "List check" panel shows your progress.
//
// Tip: open my-list.json in VS Code first. It's an ARRAY [ ] of OBJECTS { }.
//      Each object is one anime: title, image, type, episodes, progress, score, status
// =====================================================

const listBody = document.querySelector("#list-body");
const count = document.querySelector("#count");

fetch("my-list.json")
  .then((response) => response.text())
  .then((text) => {

    // ---------- Level 1 · Parse ----------
    // 1. Turn the text into an array:   const myList = JSON.parse(text);
    // 2. Show how many anime in #count, like:   12 anime   (myList.length)
const myList = JSON.parse(text);
    count.textContent = `${myList.length} anime`;

    // ---------- Level 2 · One row per anime ----------
    // Remove the // in front of the loop below. You'll see covers and titles appear
    // Then add 3 more <td> inside the `...`:
    //   type                    → ${anime.type}
    //   progress, like 12 / 12  → ${anime.progress} / ${anime.episodes}
    //   score                   → <td class="score">${anime.score}</td>
    //
    // for (const anime of myList) {
    //   const tr = document.createElement("tr");
    //   tr.innerHTML = `
    //     <td><img class="cover" src="${anime.image}" alt="${anime.title}"></td>
    //     <td class="title">${anime.title}</td>
    //   `;
    //   listBody.append(tr);
    // }
for (const anime of myList) {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><img class="cover" src="${anime.image}" alt="${anime.title}"></td>
        <td class="title">${anime.title}</td>
        <td>${anime.type}</td>
        <td>${anime.progress} / ${anime.episodes}</td>
        <td class="score">${anime.score}</td>
        <td class="status">${anime.status}</td>
        <tr.classList.add(anime.status);
      `;
      tr.classList.add(anime.status);
      listBody.append(tr);

    }


    // ---------- Level 3 · Status ----------
    // Inside the loop:
    //   1. add one more cell at the end:   <td class="status">${anime.status}</td>
    //   2. give the row a color:          tr.classList.add(anime.status);

    // ---------- Level 4 · Sort ----------
    // 1. Sort the array by title:   myList.sort((a, b) => a.title.localeCompare(b.title));
    // 2. Sort the array by score:   myList.sort((a, b) => b.score - a.score);


    // ---------- Bonus (if you finish early) ----------
    // A · Score "-": when anime.score is 0, show "-" instead of 0.
    //
    const scoreCells = document.querySelectorAll(".score"); 
    for (const cell of scoreCells) {
      if (cell.textContent === "0") {
        cell.textContent = "-";
      }
    }
    //
    // B · Tabs: clicking #tab-watching hides (class "hidden") every row that isn't "watching".
    //     Same for #tab-completed and #tab-planned. #tab-all shows every row again.
    //     Tip: row.classList.contains("watching") tells you a row's status.
  function showOnly(status) {
      for (const row of listBody.querySelectorAll("tr")) {
        if (status === "all" || row.classList.contains(status)) {
          row.classList.remove("hidden");
        } else {
          row.classList.add("hidden");
        }
      }
    }

    document.querySelector("#tab-all").addEventListener("click", () => showOnly("all"));
    document.querySelector("#tab-watching").addEventListener("click", () => showOnly("watching"));
    document.querySelector("#tab-completed").addEventListener("click", () => showOnly("completed"));
    document.querySelector("#tab-planned").addEventListener("click", () => showOnly("planned"));
  });