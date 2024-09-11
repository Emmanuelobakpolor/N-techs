// Smooth Scroll for Nav Links
// Get the project carousel and its elements
const projectCarousel = document.getElementById('project-carousel');
const projectCards = document.querySelectorAll('#project-carousel .col-md-4');
const prevProjectButton = document.getElementById('prev-project');
const nextProjectButton = document.getElementById('next-project');

// Set initial state for carousel
let currentProjectIndex = 0;
showProject(currentProjectIndex);

// Function to show a specific project
function showProject(index) {
    // Hide all project cards
    projectCards.forEach(card => card.style.display = 'none');

    // Show the current project card
    projectCards[index].style.display = 'block';

    // Update navigation button visibility
    if (index === 0) {
        prevProjectButton.style.display = 'none';
    } else {
        prevProjectButton.style.display = 'inline-block';
    }

    if (index === projectCards.length - 1) {
        nextProjectButton.style.display = 'none';
    } else {
        nextProjectButton.style.display = 'inline-block';
    }
}

// Event listener for previous button
prevProjectButton.addEventListener('click', () => {
    currentProjectIndex = (currentProjectIndex - 1 + projectCards.length) % projectCards.length;
    showProject(currentProjectIndex);
});

// Event listener for next button
nextProjectButton.addEventListener('click', () => {
    currentProjectIndex = (currentProjectIndex + 1) % projectCards.length;
    showProject(currentProjectIndex);
});

// Show the carousel when the user clicks on "Next"
nextProjectButton.addEventListener('click', () => {
    projectCarousel.style.display = 'flex'; // Show the carousel
});

// Remove this section after adding at least 3 project divs in the project-carousel
// Add more project divs to the project-carousel (3 or more)
// ... (add more project divs here) ...

document.getElementById('next-project').addEventListener('click', () => {
    const projectCarousel = document.getElementById('project-carousel');
    projectCarousel.scrollLeft += 300; // Adjust as necessary
});

document.getElementById('prev-project').addEventListener('click', () => {
    const projectCarousel = document.getElementById('project-carousel');
    projectCarousel.scrollLeft -= 300; // Adjust as necessary
});


    (function() {
        emailjs.init('m3tLTkhQb9nzdFpD8'); // Replace with your EmailJS user ID
    })();

    function sendEmail() {
        var templateParams = {
            name: document.getElementById('user_name').value,
            email: document.getElementById('user_email').value,
            message: document.getElementById('user_message').value
        };

        emailjs.send('service_meekqyj', 'template_r5zk44e', templateParams)
            .then(function(response) {
                alert('Message sent successfully!', response.status, response.text);
            }, function(error) {
                alert('Failed to send the message. Please try again later.', error);
            });
    }
</script>
