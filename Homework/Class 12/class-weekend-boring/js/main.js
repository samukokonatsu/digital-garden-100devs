document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase();
  const placeToSee = document.querySelector('#placeToSee');

  //Conditionals go here
  if (day === 'tuesday' || day === 'thursday') {
    placeToSee.textContent = 'Class Day!'
  }
    
  else if (day === 'saturday' || day === 'sunday') {
    placeToSee.textContent = 'Weekend!'
  }
    
  else {
    placeToSee.textContent = 'Boooring!'
  }
}

