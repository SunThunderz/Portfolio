// Projects with "Read More" and "Visit Project" Buttons
const projects = [
    { name: "Brent Faiyaz Random Quote Generator", description: "Generates 8 random quotes by Brent Faiyaz.", link: "brent-quote.html" },
    { name: "To-Do List App", description: "A simple task management application.", link: "#" },
    { name: "Calculator", description: "A basic calculator with arithmetic functions.", link: "#" },
    { name: "Portfolio Website", description: "A personal portfolio showcasing projects and skills.", link: "#" },
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

    // Toggle description and button visibility
    readMoreBtn.addEventListener("click", () => {
        const isHidden = description.style.display === "none";
        description.style.display = isHidden ? "block" : "none";
        visitBtn.style.display = isHidden ? "inline-block" : "none";
        readMoreBtn.textContent = isHidden ? "Show Less" : "Read More";
    });

    // Append elements to the list item
    li.appendChild(readMoreBtn);
    li.appendChild(description);
    li.appendChild(visitBtn);
    projectList.appendChild(li);
});

// Skills
const skills = ["HTML", "CSS", "JavaScript", "Responsive Design", "C#", ".NET 8.0", "SQL Server", "Figma"];

const skillsList = document.getElementById("skillList");
skills.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;
    skillsList.appendChild(li);
});

// Toggle Dark Mode
document.getElementById("themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Function to update date
function updateDate() {
    const dateElement = document.getElementById("currentDate");
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString(undefined, options);
    dateElement.textContent = formattedDate;
}

// Update date on page load
updateDate();
