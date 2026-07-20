const toggleButton = document.getElementById("darkModeToggle");

if (toggleButton) {
    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark");
    });
}
