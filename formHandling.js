const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const statusMessage = document.getElementById("form-status");

if (!form || !nameInput || !emailInput) {
    throw new Error("The form inputs were not found on the page.");
}

function showError(input, message) {
    input.classList.add("error");

    const errorElement = document.getElementById(`${input.id}-error`);
    if (errorElement) {
        errorElement.textContent = message;
    }
}

function clearError(input) {
    input.classList.remove("error");

    const errorElement = document.getElementById(`${input.id}-error`);
    if (errorElement) {
        errorElement.textContent = "";
    }
}

function showSuccess(message) {
    if (statusMessage) {
        statusMessage.textContent = message;
    }
}

function isValid(data) {
    const nameIsValid = typeof data.name === "string" && data.name.trim().length >= 2;
    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email?.trim() || "");

    if (!nameIsValid) {
        showError(nameInput, "Name must be at least 2 characters");
    } else {
        clearError(nameInput);
    }

    if (!emailIsValid) {
        showError(emailInput, "Please enter a valid email");
    } else {
        clearError(emailInput);
    }

    return nameIsValid && emailIsValid;
}

nameInput.addEventListener("input", function(event) {
    const value = event.target.value;

    if (value.trim().length < 2) {
        showError(nameInput, "Name must be at least 2 characters");
    } else {
        clearError(nameInput);
    }
});

emailInput.addEventListener("input", function(event) {
    const value = event.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(value.trim())) {
        showError(emailInput, "Please enter a valid email");
    } else {
        clearError(emailInput);
    }
});

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    console.log("Form data:", data);

    if (isValid(data)) {
        showSuccess("Form submitted successfully!");
        form.reset();
    }
});