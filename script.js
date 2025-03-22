// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = {
        projects: document.getElementById('projects'),
        experiences: document.getElementById('experiences'),
        contact: document.getElementById('contact')
    };

    const navButtons = document.querySelectorAll('.nav-btn');

    // Function to show a section and hide others
    function showSection(sectionId) {
        // Hide all sections first with fade out
        Object.values(sections).forEach(section => {
            if (section) {
                section.style.opacity = '0';
                section.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    section.style.display = 'none';
                }, 400); // Match the transition duration
            }
        });

        // Show the selected section with animation
        const selectedSection = sections[sectionId];
        if (selectedSection) {
            setTimeout(() => {
                selectedSection.style.display = 'flex';
                // Trigger reflow
                selectedSection.offsetHeight;
                selectedSection.style.opacity = '1';
                selectedSection.style.transform = 'translateY(0)';
            }, 400); // Wait for fade out to complete
        }

        // Update button states
        navButtons.forEach(btn => {
            const isActive = btn.dataset.section === sectionId;
            btn.classList.toggle('active', isActive);
            btn.setAttribute('aria-selected', isActive);
        });
    }

    // Add click event listeners to navigation buttons
    navButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = btn.dataset.section;
            showSection(sectionId);
        });
    });

    // Show projects section by default
    showSection('projects');

    // Add scroll reveal animation
    window.addEventListener('scroll', () => {
        const elements = document.querySelectorAll('.project-card, .about-content, .contact-content');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    });
}); 