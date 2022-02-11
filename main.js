
function myMove() {
  let id = null;
  const elem = document.getElementById("animate");
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 35) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + "px";
      elem.style.left = pos + "px";
    }
  }
}

function myFunction() {
  var x = document.getElementById("myInput").value;
  document.getElementById("demo").innerHTML =
    "The person who wrote this is stupid: " +
    x +
    "bla bla bla This is so stupid";
}

// Koala
function mOver(obj) {
  obj.innerHTML = "I REALLY hate you"
}

function mOut(obj) {
  obj.innerHTML = "Don't Mouse Over Me Stupid"
}


/* random move*/

let object1 = document.querySelector(".randomMove1");

object1.onmouseover=function(){

  let x = Math.floor(Math.random() * 50);
  let y = Math.floor(Math.random() * -40);
  object1.style.top = x + 'px';
  object1.style.left = y + 'px';
};

let object2 = document.querySelector(".randomMove2");

object2.onmouseover=function(){

  let x = Math.floor(Math.random() * 30);
  let y = Math.floor(Math.random() * -30);
  object2.style.top = x + 'px';
  object2.style.left = y + 'px';
};

let object3 = document.querySelector(".randomMove3");

object3.onmouseover=function(){

  let x = Math.floor(Math.random() * 50);
  let y = Math.floor(Math.random() * -40);
  object3.style.top = x + 'px';
  object3.style.left = y + 'px';
};



let object4 = document.querySelector(".randomMove4");

object4.onmouseover=function(){

  let x = Math.floor(Math.random() * 50);
  let y = Math.floor(Math.random() * -40);
  object4.style.top = x + 'px';
  object4.style.left = y + 'px';
};

let object5 = document.querySelector(".randomMove5");

object5.onmouseover=function(){

  let x = Math.floor(Math.random() * 50);
  let y = Math.floor(Math.random() * -40);
  object5.style.top = x + 'px';
  object5.style.left = y + 'px';
};


let object6 = document.querySelector(".randomMove6");

object6.onmouseover=function(){


  let x = Math.floor(Math.random() * 50);
  let y = Math.floor(Math.random() * -40);
  object6.style.top = x + 'px';
  object6.style.left = y + 'px';
};


let object7 = document.querySelector(".randomMove7");

object7.onmouseover=function(){

  let x = Math.floor(Math.random() * 50);
  let y = Math.floor(Math.random() * -40);
  object7.style.top = x + 'px';
  object7.style.left = y + 'px';
};



let object8 = document.querySelector(".randomMove8");

object8.onmouseover=function(){

  let x = Math.floor(Math.random() * 50);
  let y = Math.floor(Math.random() * -40);
  object8.style.top = x + 'px';
  object8.style.left = y + 'px';
};



let object9 = document.querySelector(".randomMove9");

object9.onmouseover=function(){

  let x = Math.floor(Math.random() * 50);
  let y = Math.floor(Math.random() * -40);
  object9.style.top = x + 'px';
  object9.style.left = y + 'px';
};


let object10 = document.querySelector(".randomMove10");

object10.onmouseover=function(){

  let x = Math.floor(Math.random() * 50);
  let y = Math.floor(Math.random() * -40);
  object10.style.top = x + 'px';
  object10.style.left = y + 'px';
};


/*Octo smoothy*/


setInterval(smoothyPop, 15000);

function smoothyPop() {



  document.querySelector(".popup1").innerHTML = "<h1>Try this!!</h1><img src='images/octo-smoothy.jpg' alt= 'smoothy'>";


}

setInterval(smoothyPop2, 18000);

function smoothyPop2() {


  document.querySelector(".popup1").innerHTML = "<h1></h1>";


}

/*smoothy 2*/

setInterval(secondSmoothyPopOne, 25000);

function secondSmoothyPopOne() {



  document.querySelector(".popup2").innerHTML = "<h1>Try this!!</h1><img src='images/monkey-smoothy.jpg' alt= 'smoothy'>";


}

setInterval(secondSmoothyPopOne2, 28000);

function secondSmoothyPopOne2() {


  document.querySelector(".popup2").innerHTML = "<h1></h1>";


}
