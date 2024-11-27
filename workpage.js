document.addEventListener('DOMContentLoaded', function () {
    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-button');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove active class from all buttons
            filterButtons.forEach(btn => {
                btn.classList.remove('btn-dark');
                btn.classList.add('btn-outline-dark');
            });

            // Add active class to clicked button
            this.classList.remove('btn-outline-dark');
            this.classList.add('btn-dark');

            const filter = this.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Modal functionality
    const portfolioModal = document.getElementById('portfolioModal');
    const modalVideo = document.getElementById('modalVideo');

    portfolioModal.addEventListener('show.bs.modal', function (event) {
        const button = event.relatedTarget;
        const videoUrl = button.getAttribute('data-video-url');
        modalVideo.src = videoUrl;
    });

    portfolioModal.addEventListener('hide.bs.modal', function () {
        modalVideo.src = '';
    });
});
