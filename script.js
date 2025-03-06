// Projects
const projects = [
    { name: "Brent Faiyaz Random Quote Generator", description: "Generates 8 random quotes by Brent Faiyaz.", link: "brent-quote.html" },
    { name: "To-Do List App", description: "A simple task management application.", link: "#" },
    { name: "Calculator", description: "A basic calculator with arithmetic functions.", link: "#" },
    { name: "Portfolio Website", description: "A portfolio website of Mariah Carmella P. Santander, a 5th-year BS IT student, designed to showcase her projects, skills, and contact information. It features a modern interface with a dark mode toggle, a dynamic date display, and a fully functional contact form with validation. It highlights various projects, including a Brent Faiyaz Random Quote Generator, allowing visitors to explore her work and technical expertise. Additionally, it provides easy navigation and seamless access to information, enabling visitors to learn more about her background and connect through the contact form or LinkedIn.", link: "index.html" },
    { name: "MHSLEARN E-learning Website", description: "An e-learning system for Manila High School designed to support remote learning for both students and teachers, featuring access to learning materials, user profiles, dashboards, and assessment tools. It enhances the Functional Literacy Test (FLT) to better assess students’ readiness for different levels in the Alternative Learning System (ALS) by providing classification and immediate feedback on their appropriate level. Additionally, it provides reading and comprehension assessments using Automatic Speech Recognition (Speech-to-Text) technology, allowing students to practice reading and receive instant feedback to improve their comprehension skills.", link: "#" },
    { name: "PKOP Website", description: "A web-based system designed to facilitate the onboarding process for new employees. It serves as a centralized platform that guides them through company policies, job responsibilities, and essential tools used within the organization. The system provides instructional materials and interactive resources to help employees understand how to access, use, and manage these tools effectively. Additionally, it offers FAQs where new hires can seek clarification regarding company policies, their roles, and workplace tools, ensuring a seamless transition into their positions. ", link: "#" }
];

const projectList = document.getElementById("projectList");

projects.forEach(project => {
    const li = document.createElement("li");
    li.textContent = project.name;

    // "Read More" button
    const readMoreBtn = document.createElement("button");
    readMoreBtn.textContent = "Read More";
    readMoreBtn.className = "read-more-btn";

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
    visitBtn.className = "visitBtn";

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
        readMoreBtn.classList.toggle("open", isHidden);
    });

    li.appendChild(readMoreBtn);
    li.appendChild(description);
    li.appendChild(visitBtn);
    projectList.appendChild(li);
});

// Skills
const skills = [
    { name: "Figma", proficiency: 90 },
    { name: "Canva", proficiency: 90 },
    { name: "Capcut", proficiency: 90 },
    { name: "HTML", proficiency: 80 },
    { name: "CSS", proficiency: 70 },
    { name: "JavaScript", proficiency: 60 },
    { name: "Midjourney", proficiency: 50 },
    { name: "C#", proficiency: 30 },
    { name: ".NET 8.0", proficiency: 30 },
    { name: "SQL Server", proficiency: 20 }
];

const skillsList = document.getElementById("skillList");

function getSkillColor(proficiency) {
    if (proficiency <= 40) {
        return 'red';
    } else if (proficiency <= 70) {
        return 'yellow';
    } else {
        return 'green';
    }
}

skills.forEach(skill => {
    const li = document.createElement("li");
    const color = getSkillColor(skill.proficiency);
    li.innerHTML = `
        <span>${skill.name}</span>
        <div class="skill-bar">
            <div class="bar">
                <div class="progress" style="width: ${skill.proficiency}%; background-color: ${color};"><span>${skill.proficiency}%</span></div>
            </div>
        </div>
    `;
    skillsList.appendChild(li);
});

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

document.addEventListener('DOMContentLoaded', function() {
    // Slideshow functionality
    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
    }

    // Event listeners to the navigation buttons and dots
    document.querySelector('.prev').addEventListener('click', function() {
        plusSlides(-1);
    });

    document.querySelector('.next').addEventListener('click', function() {
        plusSlides(1);
    });

    var dots = document.querySelectorAll('.dot');
    dots.forEach(function(dot, index) {
        dot.addEventListener('click', function() {
            currentSlide(index + 1);
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

