// Projects
const projects = [
    { name: "Brent Faiyaz Random Quote Generator", description: "Generates 8 random quotes by Brent Faiyaz.", link: "brent-quote.html" },
    { name: "To-Do List App", description: "A simple task management application.", link: "#" },
    { name: "Calculator", description: "A basic calculator with arithmetic functions.", link: "#" },
    { name: "Portfolio Website", description: "A personal portfolio showcasing projects and skills.", link: "index.html" },
    { name: "MHSLEARN Website", description: "MHSLEARN is an E-Learning System for Manila High School.", link: "#" },
    { name: "PKOP Website", description: "A web-based system to facilitate onboarding for new employees.", link: "#" }
];

const projectList = document.getElementById("projectList");

projects.forEach(project => {
    const li = document.createElement("li");
    li.textContent = project.name;

    // "Read More" button
    const readMoreBtn = document.createElement("button");
    readMoreBtn.textContent = "Read More";
    readMoreBtn.style.marginLeft = "10px";
    readMoreBtn.style.cursor = "pointer";
    readMoreBtn.style.textDecoration = "none";
    readMoreBtn.style.color = "white";
    readMoreBtn.style.backgroundColor = "#33a83c";
    readMoreBtn.style.padding = "5px 10px";
    readMoreBtn.style.borderRadius = "5px";
    readMoreBtn.style.border = "none";

    // Description
    const description = document.createElement("p");
    description.textContent = project.description;
    description.style.display = "none";
    description.style.marginTop = "5px";

    // "Visit Project" button
    const visitBtn = document.createElement("a");
    visitBtn.textContent = "Visit Project";
    visitBtn.href = project.link;
    visitBtn.target = "_blank";
    visitBtn.style.display = "none";
    visitBtn.style.marginLeft = "10px";
    visitBtn.style.textDecoration = "none";
    visitBtn.style.color = "white";
    visitBtn.style.backgroundColor = "#007bff";
    visitBtn.style.padding = "5px 10px";
    visitBtn.style.borderRadius = "5px";
    visitBtn.style.border = "none";

    // Handle "Visit Project" button click
    visitBtn.addEventListener("click", (event) => {
        if (project.link === "#") {
            event.preventDefault();
            alert("Currently in progress! Stay tuned!");
        } else {
            window.open(project.link, "_blank");
        }
    });

    // Toggle description and button visibility
    readMoreBtn.addEventListener("click", () => {
        const isHidden = description.style.display === "none";
        description.style.display = isHidden ? "block" : "none";
        visitBtn.style.display = isHidden ? "inline-block" : "none";
        readMoreBtn.textContent = isHidden ? "Show Less" : "Read More";
        readMoreBtn.style.backgroundColor = isHidden ? "red" : "#33a83c";
    });

    li.appendChild(readMoreBtn);
    li.appendChild(description);
    li.appendChild(visitBtn);
    projectList.appendChild(li);
});

// Skills
const skills = ["HTML", "CSS", "JavaScript", "Responsive Design", "C#", ".NET 8.0", "SQL Server", "Figma", "Canva", "Capcut", "Midjourney"];

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
    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "Toggle Light Mode";
    } else {
        themeToggle.textContent = "Toggle Dark Mode";
    }
    themeToggle.style.fontWeight = "bold";
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

// Update current date
function updateDate() {
    const dateElement = document.getElementById("currentDate");
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString(undefined, options);
    dateElement.textContent = formattedDate;
}
updateDate();
