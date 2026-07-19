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
document.addEventListener('keydown', function(event) {
    // Check if the event is Ctrl+S (Cmd+S for Mac supported)
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 's') {
        event.preventDefault();  // Prevent the browser's default save dialog
        alert('Saved!');         // Show a custom alert
        console.log('Ctrl+S was pressed, saving logic executed.'); 
    }

    // Check if the Escape key is pressed
    if (event.key === 'Escape') {
        event.preventDefault();  // Prevent default escape behavior
        console.log('Escape key pressed, default action prevented.');
        // You can add custom logic for Escape here if needed
    }
});

// Usage Example:
// Open a webpage with this script and press Ctrl+S or Escape
// Ctrl+S will show "Saved!" alert
// Escape will log a message and prevent default behavior