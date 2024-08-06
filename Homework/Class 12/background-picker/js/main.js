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