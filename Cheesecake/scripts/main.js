let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/cheesecake.jpeg') {
      myImage.setAttribute('src','images/cheesecake2.jpeg');
    } else {
      myImage.setAttribute('src','images/cheesecake.jpeg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

/*function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Enjoy this creamy Cheesecake, ' + myName + '!';
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Enjoy this creamy Cheesecake, ' + storedName + '!';
  }
  myButton.onclick = function() {
    setUserName();
  } */

  function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = `Enjoy this creamy Cheesecake, ${myName}!`;
    }
  }
  myButton.onclick = function() {
    setUserName();
  }