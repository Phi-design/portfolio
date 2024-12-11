// Parallax Effect for Hero Background
document.addEventListener('DOMContentLoaded', () => {
    const heroContainer = document.querySelector('.hero-full-container');

    if (heroContainer) {
        window.addEventListener('mousemove', (e) => {
            const width = window.innerWidth;
            const height = window.innerHeight;

            const x = (e.clientX / width - 0.5) * 2; // Normalize to range [-1, 1]
            const y = (e.clientY / height - 0.5) * 2; // Normalize to range [-1, 1]

            // Scale movements to create a subtle parallax effect
            const offsetX = x * 5; // Adjust horizontal movement range
            const offsetY = y * 5; // Adjust vertical movement range

            // Apply to the background position
            heroContainer.style.backgroundPosition = `${50 + offsetX}% ${50 + offsetY}%`;
        });
    } else {
        console.error('Element with class "hero-full-container" not found.');
    }

    // Responsive Navbar Adjustment
    const navbarNav = document.querySelector('.navbar-nav');
    const dropdownNav = document.querySelector('.dropdown-nav');

    function adjustNavbar() {
        if (window.innerWidth <= 768) {
            navbarNav.style.display = 'none';
            dropdownNav.style.display = 'block';
        } else {
            navbarNav.style.display = 'flex';
            dropdownNav.style.display = 'none';
        }
    }

    // Initial adjustment on page load
    adjustNavbar();

    // Adjust on window resize
    window.addEventListener('resize', adjustNavbar);

    // Tooltip Movement for Carousel
    document.querySelectorAll('.carousel-item a').forEach(item => {
        item.addEventListener('mousemove', (e) => {
            const tooltip = item.querySelector('.tooltip');
            const rect = item.getBoundingClientRect();
            tooltip.style.left = `${e.clientX - rect.left + 5}px`;
            tooltip.style.top = `${e.clientY - rect.top + 5}px`;
        });
    });

    // Text Animation with Typed.js
    new Typed("#typed", {
        stringsElement: "#typed-strings", // Use the content from the span
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1000,
        loop: true, // Infinite loop
    });
});

// Form Handling with jQuery
$(document).ready(function () {
    // Add 'typing' class when user types in the input
    $('.form-control').on('input', function () {
        // Only add 'typing' class if there's content
        if ($(this).val().trim().length > 0) {
            $(this).addClass('typing').removeClass('error');
        } else {
            $(this).removeClass('typing');
        }
    });

    // Remove 'typing' class on blur if the input is empty
    $('.form-control').on('blur', function () {
        if (!$(this).val().trim()) {
            $(this).removeClass('typing');
        }
    });

    // Handle form submission
    $('#contactForm').on('submit', function (e) {
        e.preventDefault();
        let valid = true;

        // Validate each field
        $('.form-control').each(function () {
            if (!$(this).val().trim()) {
                $(this).addClass('error');
                valid = false;
            } else {
                $(this).removeClass('error');
            }
        });

        if (valid) {
            // Simulate successful submission
            $('#successMessage').fadeIn().delay(3000).fadeOut();
            $('#contactForm')[0].reset();
            $('.form-control').removeClass('typing');
        } else {
            $('#errorMessage').fadeIn().delay(3000).fadeOut();
        }
    });
});
