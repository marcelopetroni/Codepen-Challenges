const button = document.getElementById('button');
const button2= document.getElementById('button2');
const image = document.getElementById('image');
const image2 = document.getElementById('image2');
let filterOn = false;

button.addEventListener('click', () => {
  filterOn = !filterOn;
  if (filterOn) {
    image.style.filter = 'sepia(100%)';
    button.textContent = 'Remove Filter';
  } else {
    image.style.filter = 'none';
    button.textContent = 'Apply Filter';
  }
});

button2.addEventListener('click', () => { 
	filterOn = !filterOn;
	if(filterOn) {
		image2.style.filter = 'blur(3px)';
		button2.textContent = 'Remove Filter';
	}
	else{
		image2.style.filter = 'none';
		button2.textContent = 'Apply Filter';
	}
});