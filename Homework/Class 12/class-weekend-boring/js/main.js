// Event Listener

document.querySelector('#check').addEventListener('click', check)

//Function

function check(){

  const day = document.querySelector('#day').value.toLowerCase();
  const placeToSee = document.querySelector('#placeToSee')

//Conditionals
  if (day === 'tuesday' || day === 'thursday') {
    placeToSee.textContent = "Class day!"
  }

  else if (day === 'saturday' || day === 'sunday') {
    placeToSee.textContent = "Weekend!"
  }

  else if (day === 'monday' || day === 'wednesday' || day === 'friday') {
    placeToSee.textContent = "Boooring!"
  }

  else {
    placeToSee.textContent = "Please enter valid day!"
  }
}

