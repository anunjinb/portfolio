// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 80, // Adjust for header height
            behavior: 'smooth'
        });
    });
});

// Dynamic year update in the footer
const footer = document.querySelector('footer p');
footer.innerHTML = `&copy; ${new Date().getFullYear()} Anunjin Batdelger. All rights reserved.`;
