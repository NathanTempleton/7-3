document.getElementById('button').addEventListener('click', rating)
let age = 0

function rating () {
  age = document.getElementById('age-input').value
  age = parseInt(age)

  if (age > 17) {
    age = document.getElementById('result').innerHTML = 'You are old enough to go see R rated movies alone.'
  } else if (age > 13) {
    age = document.getElementById('result').innerHTML = 'You may attend PG-13 movies alone.'
  } else if (age > 5) {
    age = document.getElementById('result').innerHTML = 'You may attend G and PG movies alone.'
  } else {
    age = document.getElementById('result').innerHTML = 'You are to young to go see movies.'
  } document.getElementById('result').style.display = 'block'
}
