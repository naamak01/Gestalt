// Targeting animals for picture scrolling (Fade-in)
// Select all elements with the class 'animating-container'
const faders = document.querySelectorAll('.animating-container');
const appearOptions = {
	threshold: 0,
	rootMargin: '0px 0px -175px 0px',
};

// Create an Intersection Observer to add the 'appear'
// class when an element is in view
const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
	entries.forEach((entry) => {
		// If the element is not intersecting, do nothing
		if (!entry.isIntersecting) {
			return;
		} else {
			// Add the 'appear' class to the target element
			entry.target.classList.add('appear');
			// Stop observing the target element to prevent re-triggering
			appearOnScroll.unobserve(entry.target);
		}
	});
}, appearOptions);

// Observe each 'animating-container' element with the Intersection Observer
faders.forEach((fader) => {
	appearOnScroll.observe(fader);
});
