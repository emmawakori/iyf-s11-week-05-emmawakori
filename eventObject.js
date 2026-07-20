document.addEventListener("click", function(event) {
    // The element that was clicked
    console.log("Target:", event.target);
    
    // The element the listener is attached to
    console.log("Current Target:", event.currentTarget);
    
    // Event type
    console.log("Type:", event.type);
    
    // Mouse position
    console.log("Position:", event.clientX, event.clientY);
    
    // Prevent default behavior
    event.preventDefault();
    
    // Stop propagation (bubbling)
    event.stopPropagation();
});

// Keyboard events
document.addEventListener("keydown", function(event) {
    console.log("Key:", event.key);       // "a", "Enter", "Escape"
    console.log("Code:", event.code);     // "KeyA", "Enter", "Escape"
    console.log("Shift:", event.shiftKey);
    console.log("Ctrl:", event.ctrlKey);
    console.log("Alt:", event.altKey);
});

// JavaScript
// This code listens for keydown events to implement custom keyboard shortcuts
// Ctrl+S will show a "Saved!" alert and prevent default save dialog
// Escape will prevent certain default actions (for demonstration, no action shown)

// Attach an event listener to the whole document
 document.addEventListener("keydown", function (event) {
    // Ctrl+S → Show "Saved!" alert
    if (event.ctrlKey && event.key.toLowerCase() === "s") {
      event.preventDefault(); // prevent browser save dialog
      alert("Saved!");
    }

    // Escape → Clear all form inputs
    if (event.key === "Escape") {
      const form = document.querySelector("form");
      if (form) form.reset();
    }

    // Ctrl+Enter → Submit form
    if (event.ctrlKey && event.key === "Enter") {
      const form = document.querySelector("form");
      if (form) form.requestSubmit(); // modern way to trigger submit
    }
  });