// Don't change or delete this line! It waits until the DOM has loaded, then calls 
// the start function. More info: 
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  bindEventListeners(document.getElementsByClassName('board')[0].children)
}

function bindEventListeners (dots) {
    for (var i = 0; i < dots.length; i++) {
            dots[i].addEventListener('click', makeBlue)
        dots[i].addEventListener('contextmenu', makeGreen)
        dots[i].addEventListener('dblclick', hide)
  }
}

function makeGreen (evt) {
  evt.preventDefault()
  evt.target.classList.toggle('green')
  updateCounts()
}

// CREATE FUNCTION makeBlue HERE
function makeBlue(evt) {
    evt.preventDefault()
    evt.target.classList.toggle('blue')
    updateCounts()
}
// CREATE FUNCTION hide HERE
function hide(evt) {
    evt.preventDefault()
    evt.target.classList.toggle('invisible')
    updateCounts()
}

function updateCounts() {
    var eleBlue = document.getElementsByClassName("blue");
    var eleGreen = document.getElementsByClassName("green");
    var eleHidden = document.getElementsByClassName("invisible");
    var totals = {
        blue: eleBlue.length,
        green: eleGreen.length,
        invisible: eleHidden.length
    }
    displayTotals(totals)
    console.log
    console.log('blue =' + totals.blue.length + ', green = ' + totals.green.length +  ',hidden =' + totals.invisible.length)
    }
// WRITE CODE HERE TO COUNT BLUE, GREEN, AND INVISIBLE DOTS
  // Once you've done the counting, this function will update the display


function displayTotals (totals) {
  for (var key in totals) {
    document.getElementById(key + '-total').innerHTML = totals[key]
    }
    bindEventListeners(90);
}

displayTotals(updateCounts())
