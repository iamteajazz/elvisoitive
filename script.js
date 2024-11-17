// Select all anchor links for scrolling
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Check if the anchor's href points to an element ID (internal link)
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault(); // Prevent the default anchor behavior

            // Get the target element to scroll to
            const target = document.querySelector(href);

            if (target) {
                // Use scrollIntoView with smooth scrolling behavior
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});
