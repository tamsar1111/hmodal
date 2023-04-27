function HModal( options ) {
	// Default properties
	this.default = {
		isShown : false,
		isStatic : false,
		staticModeClass: 'hmodal-static',
		btnInitSelector: '.hmodal-button',
		btnCloseSelector: '.hmodal-close',
		showClass: '.show',
	};

	// Create an empty object if no options are passed
	options = options || {};
	// Merging default settings with custom ones
	this.options = Object.assign({}, this.default, options );

	// Declaring a variable to refer to an object
	const modalObject = this;

	// Declaring a variable for the modal call button node and checking for Its Existence
	const modalBtn = document.querySelector( this.options.btnInitSelector );
	if (!modalBtn) {
		console.error('Modal button not found');
		return;
	}

	// Declaring a Variable for the Modal Window Node and Checking for Its Existence
	const modalTarget = document.querySelector( modalBtn.getAttribute('data-hmodal-target') );
	if (!modalTarget) {
		console.error('Modal target not found');
		return;
	}

	// Declaring a variable for the modal close button
	const btnClose = modalTarget.querySelectorAll( this.options.btnCloseSelector );

	// Function to show modal window
	function showModal() {
		modalObject.options.isShown = true;
		modalTarget.classList.add( modalObject.options.showClass.slice(1) )
	}

	// Function to hide modal window
	function hideModal() {
		modalObject.options.isShown = false;
		modalTarget.classList.remove( modalObject.options.showClass.slice(1) )
	}

	// Show modal window on button click
	modalBtn.addEventListener('click', function () {
		showModal();
	})

	// Hide the modal window on clicking to the "close" button
	btnClose.forEach(function(close) {
		close.addEventListener('click', function () {
			hideModal();
		})
	})


	// Hiding a modal window when clicking on an empty area outside the window
	modalTarget.addEventListener('click', function (e) {
		if ( e.target === modalTarget && !modalObject.options.isStatic ) {
			hideModal();
		}

		// Window animation when clicking on darkened area in static mode
		if ( e.target === modalTarget && modalObject.options.isStatic && !modalTarget.classList.contains( modalObject.options.staticModeClass ) ) {
			modalTarget.classList.add( modalObject.options.staticModeClass )

			setTimeout(function () {
				modalTarget.classList.remove( modalObject.options.staticModeClass )
			}, 1000)
		}
	})
}
