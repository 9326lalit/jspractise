// Event propagation refers to the process of how events propagate or travel
// trough DOM(Document Object Model) hierarchy.
// In JS,there are two phases of event propagation:capturing phase and bubbling phase.
// Capturing Phase:: (top to bottom) The event starts from the root of the DOM and goes down to the target element.
// Bubbling Phase::(bottom to top) The event starts from the target element bubbles up to the root of the DOM.


// Event Propagation in JavaScript: Capturing Phase vs. Bubbling Phase
// In JavaScript, when an event occurs on an element, it propagates through three phases:
// 1️⃣ Capturing Phase (Trickling Down) → The event moves from the root to the target element.
// 2️⃣ Target Phase → The event reaches the element where it was triggered.
// 3️⃣ Bubbling Phase (Propagating Up) → The event moves from the target element back to the root.

// 🔹 Example: Capturing Phase vs. Bubbling Phase

document.querySelector("#grandparent").addEventListener("click", () => {
    console.log("Grandparent clicked");
  }, true); // 👈 'true' enables capturing phase
  
  document.querySelector("#parent").addEventListener("click", () => {
    console.log("Parent clicked");
  }, true); // 👈 'true' enables capturing phase
  
  document.querySelector("#child").addEventListener("click", () => {
    console.log("Child clicked");
  }, true); // 👈 'true' enables capturing phase
// output
// Grandparent clicked
// Parent clicked
// Child clicked



// 🔹 Bubbling Phase (Default Behavior)
document.querySelector("#grandparent").addEventListener("click", () => {
    console.log("Grandparent clicked");
  }, false); // 👈 'false' enables bubbling phase (default)
  
  document.querySelector("#parent").addEventListener("click", () => {
    console.log("Parent clicked");
  }, false); // 👈 'false' enables bubbling phase (default)
  
  document.querySelector("#child").addEventListener("click", () => {
    console.log("Child clicked");
  }, false); // 👈 'false' enables bubbling phase (default)
  
// output
// Child clicked
// Parent clicked
// Grandparent clicked

// 🔹 Stopping Event Propagation
document.querySelector("#child").addEventListener("click", (event) => {
    event.stopPropagation();
    console.log("Child clicked, but event won't propagate");
  });
  