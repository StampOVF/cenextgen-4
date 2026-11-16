// 5-1 · Create & remove elements 

const list = document.querySelector("#list");
const input = document.querySelector("#item");
const addBtn = document.querySelector("#add");

// ===== Part A · Create =====

// Step 1 · In the Console first:
//   const li = document.createElement("li");   // 1. create (not on the page yet!)
//   li.textContent = "Pocky";                   // 2. fill it in
//   list.append(li);                            // 3. add it → it appears

// Step 2 · Now do the same inside a "click" listener on #add,
//          using the text from the input (input.value)
addBtn.addEventListener("click", () => {
  const snack = input.value;

    const li = document.createElement("li")
    const delBtn = document.createElement("button")
    
    li.textContent = `${snack}`
    delBtn.textContent = "Delete"

    delBtn.addEventListener("click", () => {
        li.remove()
    })

    li.append(delBtn)
    list.append(li)
});


// Step 3 · Don't add empty items:  if (input.value === "") return;


// ===== Part B · Remove =====

// Step 4 · Create a <button> with the text "Delete"  

// Step 5 · Give it a "click" listener that runs li.remove();

// Step 6 · Put the button inside the li:  li.append(delBtn);

const delBtn = document.createElement("button");
delBtn.textContent = "Delete";
delBtn.addEventListener("click", () => {
li.remove();
});
