// const numStars = 200; // You can adjust the number of stars
// const starsContainer = document.querySelector('.stars-container');

// for (let i = 0; i < numStars; i++) {
// 	const star = document.createElement('div');
// 	star.classList.add('star');

// 	// Randomize position and size of each star
// 	const size = Math.random() * 3 + 1; // size between 1 and 4px
// 	const xPosition = Math.random() * window.innerWidth;
// 	const yPosition = Math.random() * window.innerHeight;

// 	star.style.width = `${size}px`;
// 	star.style.height = `${size}px`;
// 	star.style.left = `${xPosition}px`;
// 	star.style.top = `${yPosition}px`;

// 	starsContainer.appendChild(star);
// }


const sections = document.querySelectorAll('.scroll-section');

const observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('active');
		} else {
			entry.target.classList.remove('active');
		}
	});
}, { threshold: 0.3 }); // triggers when 30% of section is visible

sections.forEach(section => observer.observe(section));



const numStars = 150; // Adjust number of stars
const container = document.querySelector('.explosive-stars');

for (let i = 0; i < numStars; i++) {
	const star = document.createElement('div');
	star.classList.add('star');

	// Randomize position
	const x = Math.random() * window.innerWidth;
	const y = Math.random() * window.innerHeight;

	star.style.left = `${x}px`;
	star.style.top = `${y}px`;

	// Randomize animation delay and duration
	const delay = Math.random() * 5;
	const duration = 2 + Math.random() * 3; // 2–5s
	star.style.animationDuration = `${duration}s`;
	star.style.animationDelay = `${delay}s`;

	container.appendChild(star);
}
