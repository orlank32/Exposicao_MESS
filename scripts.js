document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll("section");
  
    links.forEach(function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
  
        const targetId = link.getAttribute("href").substring(1);
        sections.forEach(function (section) {
          section.classList.remove("active");
        });
  
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.classList.add("active");
        }
      });
    });
  });
  