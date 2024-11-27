import "flowbite";

document.addEventListener("DOMContentLoaded", () => {
	// Select the toggle button and sidebar
	const toggleButton = document.getElementById("menu-toggle");
	const closeButton = document.getElementById("menu-close");
	const sidebar = document.getElementById("sidebar");

	// Add click event listener
	toggleButton?.addEventListener("click", () => {
		sidebar.classList.toggle("translate-x-full");
	});
	closeButton?.addEventListener("click", () => {
		sidebar.classList.toggle("translate-x-full");
	});

	// Replace the data-email attribute with a mailto link
	const emailLinks = document.querySelectorAll("[data-email]");
	emailLinks.forEach(function (link) {
		const encoded = link.getAttribute("data-email");
		const email = atob(encoded);
		link.setAttribute("href", "mailto:" + email);
		link.setAttribute("title", email);

		// If the link is empty, set the email as the text content
		if (!link.textContent.trim()) {
			link.textContent = email;
		}
	});
});
