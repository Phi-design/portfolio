document.addEventListener('DOMContentLoaded', () => {
    function toggleInvertBackground() {
        const body = document.body;
        const isFilterOn = body.style.filter === 'invert(1)';

        if (isFilterOn) {
            body.style.filter = 'none';
            invertButton.style.backgroundColor = 'white';
        } else {
            body.style.filter = 'invert(1)';
            invertButton.style.backgroundColor = '#390653';
        }
    }

    const invertButton = document.createElement('button');
    invertButton.id = 'invert-button';

    invertButton.addEventListener('click', toggleInvertBackground);

    document.body.appendChild(invertButton);

    // Prevent button from moving on click
    invertButton.addEventListener('mousedown', (event) => {
        event.preventDefault();
    });
});