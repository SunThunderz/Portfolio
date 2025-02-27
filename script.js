// Add Projects Dynamically with "Read More" Button
const projects = [
    { name: "Brent Faiyaz Random Quote Generator", description: "Generates 8 random quotes by Brent Faiyaz." },
    { name: "To-Do List App", description: "A simple task management application." },
    { name: "Calculator", description: "A basic calculator with arithmetic functions." },
    { name: "Portfolio Website", description: "A personal portfolio showcasing projects and skills." },
    { name: "MHSLEARN Website", description: "MHSLEARN is an E- Learning System with Functional Literacy Test and Automatic Recognition Technology for Manila High School." },
    { name: "PKOP Website", description: "Paramount Key Operational Procedures is a web-based system designed to facilitate the onboarding process for new employees. It serves as a centralized platform that guides them through company policies, job responsibilities, and essential tools used within the organization. The system provides instructional materials and interactive resources to help employees understand how to access, use, and manage these tools effectively. Additionally, it offers FAQs where new hires can seek clarification regarding company policies, their roles, and workplace tools, ensuring a seamless transition into their positions. " }
];

const projectList = document.getElementById("projectList");

projects.forEach(project => {
    const li = document.createElement("li");
    li.textContent = project.name;

    // Create "Read More" button
    const readMoreBtn = document.createElement("button");
    readMoreBtn.textContent = "Read More";
    readMoreBtn.style.marginLeft = "10px";
    readMoreBtn.style.cursor = "pointer";

    // Create a description element (initially hidden)
    const description = document.createElement("p");
    description.textContent = project.description;
    description.style.display = "none"; // Hide description initially
    description.style.marginTop = "5px";

    // Toggle description on button click
    readMoreBtn.addEventListener("click", () => {
        description.style.display = description.style.display === "none" ? "block" : "none";
        readMoreBtn.textContent = description.style.display === "none" ? "Read More" : "Show Less";
    });

    // Append elements to the list item
    li.appendChild(readMoreBtn);
    li.appendChild(description);
    projectList.appendChild(li);
});

// Add Skills Dynamically
const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Responsive Design",
    "C#",
    ".NET 8.0",
    "SQL Server",
    "Figma"
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

// Function to update footer with current date
function updateFooterDate() {
    const footer = document.querySelector("footer p");
    const currentDate = new Date();

    // Get month, day, and year
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);

    // Update footer text
    footer.innerHTML = `&copy; ${formattedDate} | Mariah Carmella Santander's Portfolio | All Rights Reserved`;
}

// Call the function on page load
document.addEventListener("DOMContentLoaded", updateFooterDate);
   

