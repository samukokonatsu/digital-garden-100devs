// color picker code

document.getElementById('purple').onclick = partyPurple
document.getElementById('green').onclick = partyGreen
document.getElementById('blue').onclick = partyBlue
document.getElementById('coral').onclick = partyCoral


function partyPurple() {
  document.querySelector('body').style.backgroundColor = 'rgb(189, 92, 189)'
  document.querySelector('body').style.color = 'white'
}

function partyGreen() {
  document.querySelector('body').style.backgroundColor = 'lightgreen'
  document.querySelector('body').style.color = 'white'
}

function partyBlue() {
  document.querySelector('body').style.backgroundColor = 'rgb(94, 94, 134)'
  document.querySelector('body').style.color = 'white'
}

function partyCoral() {
    document.querySelector('body').style.backgroundColor = 'lightcoral'
    document.querySelector('body').style.color = 'white'
  }



// class, weekend, boring code

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





// simple calculator code

let total = 0

document.querySelector('#pumpkin').addEventListener('click', makeZero)
document.querySelector('#dominosPizza').addEventListener('click', jumanji)
document.querySelector('#zebra').addEventListener('click', add9)
document.querySelector('#cantThinkOfAnything').addEventListener('click', sub2)
document.querySelector('#steez').addEventListener('click', add47)

function makeZero() {
  total = 0
  document.querySelector('#placeToPutResult').innerText = total
}

function jumanji() {
  total = total + 3
  document.querySelector('#placeToPutResult').innerText = total
}

function add9() {
  total = total + 9
  document.querySelector('#placeToPutResult').innerHTML = total
}

function sub2() {
  total = total - 2
  document.querySelector('#placeToPutResult').innerHTML = total
}

function add47() {
  total = total + 47
  document.querySelector('#placeToPutResult').innerHTML = total
}
