// 4-1 · My first event 

// 1 · Select the button and the message (querySelector)
const btn = document.querySelector("#btn");
const msg = document.querySelector("#msg");

// 2 · Listen for "click" and log to the Console
//   btn.addEventListener("click", () => {
//     console.log("Clicked!");
//   });
btn.addEventListener("click", () => {
    console.log("Clicked!");
    msg.textContent = "You clicked!";
    });

// 3 · Change the page instead: put "You clicked!" in #msg
msg.textContent = "You clicked!";
// 4 · Count the clicks with a variable:  Clicked 3 times

let clickCount = 0;
btn.addEventListener("click", () => {
    clickCount++;
    msg.textContent = `You clicked! (${clickCount} times)`;
});
