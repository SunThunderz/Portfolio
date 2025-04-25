// Toggle Dark Mode and Light Mode
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "Toggle Light Mode";
    } else {
        themeToggle.textContent = "Toggle Dark Mode";
    }
    themeToggle.style.fontWeight = "bold";
});

// Contact Form Submission
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent the default form submission

        const formData = new FormData(contactForm);

        fetch("send_message.php", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.text())
            .then((data) => {
                formMessage.textContent = data; // Display the response message
                formMessage.style.color = "green"; // Set success message color
                contactForm.reset(); // Reset the form fields
            })
            .catch((error) => {
                formMessage.textContent = "An error occurred. Please try again.";
                formMessage.style.color = "red"; // Set error message color
                console.error("Error:", error);
            });
    });
});

// Update current date
function updateDate() {
    const dateElement = document.getElementById("currentDate");
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString(undefined, options);
    dateElement.textContent = formattedDate;
}
updateDate();