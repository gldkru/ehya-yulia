const form = document.getElementById('form-subscribe')

form.addEventListener('submit', function (event) {
	event.preventDefault()

	const input = document.querySelector('[name="subscribe-email"]')

	console.log(input)
	console.log(input.value)
})