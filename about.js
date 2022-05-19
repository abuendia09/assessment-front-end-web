console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	// console.log('form submit');
	alert('the form has been submitted')
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

const catPhoto = document.querySelector('img');

catPhoto.addEventListener('mouseover', () => {
	alert('you are beautiful')
})

