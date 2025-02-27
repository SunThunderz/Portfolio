// script.js

// Add Projects Dynamically
const projects = [
    "Random Quote Generator",
    "To-Do List App",
    "Calculator",
    "Portfolio Website"
];

const projectList = document.getElementById("projectList");
projects.forEach(project => {
    const li = document.createElement("li");
    li.textContent = project;
    projectList.appendChild(li);
});

// Add Skills Dynamically
const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Responsive Design"
];

const skillsList = document.getElementById("skillList");
skills.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;
    skillsList.appendChild(li);
});

// Toggle Dark Mode
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Contact Form Validation
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        formMessage.textContent = "Thank you for your message!";
        formMessage.style.color = "green";
        contactForm.reset();
    } else {
        formMessage.textContent = "Please fill out all fields.";
        formMessage.style.color = "red";
    }
    
});
   

