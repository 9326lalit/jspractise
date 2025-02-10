// 🔹 Event Delegation in JavaScript
// Event delegation is a technique where a single
// event listener is added to a parent element
// instead of multiple listeners on individual
// child elements. It leverages event bubbling,
// allowing the parent to handle events for
// its children, even if they are dynamically added later.

// ✅ Why Use Event Delegation?
// ✔ Efficient – Fewer event listeners improve performance.
// ✔ Works for dynamically added elements.
// ✔ Reduces memory consumption.

// 🔹 Example: Without Event Delegation (Inefficient)
document.querySelectorAll(".item").forEach(item => {
    item.addEventListener("click", () => {
      console.log("Item clicked:", item.textContent);
    });
  });
  

// 🔹 Example: With Event Delegation (Efficient)
document.querySelector("#list").addEventListener("click", (event) => {
    if (event.target.classList.contains("item")) {
      console.log("Item clicked:", event.target.textContent);
    }
  });
  

//   🔹 When to Use Event Delegation?
//   ✅ Lists, tables, or menus with many items.
//   ✅ Handling user interactions efficiently.
//   ✅ When dynamically adding elements.