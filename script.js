// Get the nav links
const links = document.querySelectorAll("nav a");

// Add click event listener to each link
links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    // Get the id of the section to scroll to
    const sectionId = e.target.getAttribute("href");
    // Get the section element
    const section = document.querySelector(sectionId);
    // Scroll to the section
    section.scrollIntoView({ behavior: "smooth" });
  });
});
