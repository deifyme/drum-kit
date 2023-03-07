//Detecting Button Press
var numberOfDrumButtons = document.querySelectorAll('.drum').length;
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll('.drum')[i].addEventListener('click', function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
  });
}
//Detecting Keyboard Press
document.addEventListener('keydown', function (event) {
  // when a keydown is detected it will start the function event and event.key will connect - function makeSound(key){..}
  makeSound(event.key);
});

//Makes the sound of the key or click pressed.
function makeSound(key) {
  switch (key) {
    case 'w':
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case 'a':
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case 's':
      var tom1 = new Audio('sounds/tom-3.mp3');
      tom1.play();
      break;

    case 'd':
      var tom2 = new Audio('sounds/tom-4.mp3');
      tom2.play();
      break;

    case 'j':
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case 'k':
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

    case 'l':
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
  }
}
