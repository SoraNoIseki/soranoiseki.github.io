import "flowbite";

document.addEventListener("DOMContentLoaded", () => {
	// Select the toggle button and sidebar
	const toggleButton = document.getElementById("menu-toggle");
	const closeButton = document.getElementById("menu-close");
	const sidebar = document.getElementById("sidebar");
	const overlay = document.getElementById("overlay");

	const toggleSideMenu = () => {
		sidebar.classList.toggle("translate-x-full");
		sidebar.classList.toggle("open");
		overlay.classList.toggle("hidden");
		document.body.classList.toggle("overflow-hidden");
	}

	// Toggle the sidebar
	toggleButton?.addEventListener("click", () => {
		toggleSideMenu();
	});
	closeButton?.addEventListener("click", () => {
		toggleSideMenu();
	});

	// Close sidebar when clicking outside of it
	document.addEventListener('click', function (event) {
		var isClickInside = sidebar.contains(event.target) || toggleButton.contains(event.target);
	
		if (!isClickInside && sidebar.classList.contains("open")) {
			toggleSideMenu();
		}
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
