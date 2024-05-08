// // Select specific containers
// const introSection = document.getElementById('intro');
// const aboutSection = document.getElementById('about');
// const polarizeSection = document.getElementById('polarize');

// // Set initial offset values for each container
// let offset1 = 0;
// let offset2 = 0;
// let offset3 = 0;

// // Your smoothScroll function
// function smoothScroll() {
// 	// Calculate offsets for each container (customize as needed)
// 	offset1 += (window.scrollY - offset1) * 0.02; // Adjusted multiplier for smoother effect
// 	offset2 += (window.scrollY - offset2) * 0.02; // Adjusted multiplier for smoother effect
// 	offset3 += (window.scrollY - offset3) * 0.02; // Adjusted multiplier for smoother effect

// 	// Limit the maximum offset to 5rem (assuming 1rem = 16px, 5rem = 80px)
// 	const maxOffset = 80; // 5rem in pixels
// 	offset1 = Math.min(offset1, maxOffset);
// 	offset2 = Math.min(offset2, maxOffset);
// 	offset3 = Math.min(offset3, maxOffset);

// 	// Apply transformations to each container
// 	introSection.style.transform = `translateY(-${offset1}px) translateZ(0)`;
// 	aboutSection.style.transform = `translateY(-${offset2}px) translateZ(0)`;
// 	polarizeSection.style.transform = `translateY(-${offset3}px) translateZ(0)`;

// 	// Request the next animation frame
// 	requestAnimationFrame(smoothScroll);
// }

// // Call smoothScroll initially
// smoothScroll();
