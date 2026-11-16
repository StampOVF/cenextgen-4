// 4-3 · Read what users type with input.value

const input = document.querySelector("#age");
const btn = document.querySelector("#btn");
const result = document.querySelector("#result");

btn.addEventListener("click", () => {
  const age = Number(input.value);
  if (age >= 18) {
    result.textContent = "You are an adult."
  } else {
    result.textContent = `${18 - age} years to go.`
  }
})