

const elem = document.getElementById("solar-system");
let xAxis = 500;
let yAxis = 500;
elem.style.top = yAxis + "px";
elem.style.left = xAxis + "px";
let fuggvenyFut = true

function downMove() {
  let id = null;
  clearInterval(id);
  id = setInterval(frame, 7);
  function frame() {
     if (fuggvenyFut == false) {
        clearInterval(id);
        fuggvenyFut = true;
       return fuggvenyFut;
      } else {
        yAxis++; 
        elem.style.top = yAxis + "px";
        return yAxis;
        } 
  }
  
  return yAxis;
}
  
function stopMove() {
  fuggvenyFut = false;
  const elem = document.getElementById("solar-system");
  elem.style.top = yAxis + "px";
  elem.style.left = xAxis + "px";
  console.log("működik a stopMove");
  return fuggvenyFut
}




function upMove() {
  let id = null;
  const elem = document.getElementById("solar-system");   
  clearInterval(id);
  id = setInterval(frame, 7);
  function frame() {
     if (fuggvenyFut == false) {
        clearInterval(id);
        fuggvenyFut = true;
       return fuggvenyFut;
      } else {
        yAxis--; 
        elem.style.top = yAxis + "px"; 
        /*elem.style.left = yAxis + "px";*/
        return yAxis;
        } 
  }
  
  return yAxis;
}
  
function rightMove() {
  let id = null;
  const elem = document.getElementById("solar-system");   
  clearInterval(id);
  id = setInterval(frame, 7);
  function frame() {
     if (fuggvenyFut == false) {
        clearInterval(id);
        fuggvenyFut = true;
       return fuggvenyFut;
      } else {
        xAxis++;  
        elem.style.left = xAxis + "px";
        return xAxis;
        } 
  }
  
  return xAxis;
}
  
    
function leftMove() {
  let id = null;
  const elem = document.getElementById("solar-system");   
  clearInterval(id);
  id = setInterval(frame, 7);
  function frame() {
     if (fuggvenyFut == false) {
        clearInterval(id);
        fuggvenyFut = true;
       return fuggvenyFut;
      } else {
        xAxis--;  
        elem.style.left = xAxis + "px";
        return xAxis;
        } 
  }
  
  return xAxis;
}
  
function upRightMove() {
  let id = null;
  const elem = document.getElementById("solar-system");   
  clearInterval(id);
  id = setInterval(frame, 7);
  function frame() {
     if (fuggvenyFut == false) {
        clearInterval(id);
        fuggvenyFut = true;
       return fuggvenyFut;
      } else {
        xAxis++;
        yAxis--;
        elem.style.left = xAxis + "px";
        elem.style.top = yAxis + "px";
        return xAxis;
        return yAxis;
        } 
  }
  
  return xAxis;
  return yAxis;
}
  
function downRightMove() {
  let id = null;
  const elem = document.getElementById("solar-system");   
  clearInterval(id);
  id = setInterval(frame, 7);
  function frame() {
     if (fuggvenyFut == false) {
        clearInterval(id);
        fuggvenyFut = true;
       return fuggvenyFut;
      } else {
        xAxis++;
        yAxis++;
        elem.style.left = xAxis + "px";
        elem.style.top = yAxis + "px";
        return xAxis;
        return yAxis;
        } 
  }
  
  return xAxis;
  return yAxis;
}
  
function downLeftMove() {
  let id = null;
  const elem = document.getElementById("solar-system");   
  clearInterval(id);
  id = setInterval(frame, 7);
  function frame() {
     if (fuggvenyFut == false) {
        clearInterval(id);
        fuggvenyFut = true;
       return fuggvenyFut;
      } else {
        xAxis--;
        yAxis++;
        elem.style.left = xAxis + "px";
        elem.style.top = yAxis + "px";
        return xAxis;
        return yAxis;
        } 
  }
  
  return xAxis;
  return yAxis;
}
  
function upLeftMove() {
  let id = null;
  const elem = document.getElementById("solar-system");   
  clearInterval(id);
  id = setInterval(frame, 7);
  function frame() {
     if (fuggvenyFut == false) {
        clearInterval(id);
        fuggvenyFut = true;
       return fuggvenyFut;
      } else {
        xAxis--;
        yAxis--;
        elem.style.left = xAxis + "px";
        elem.style.top = yAxis + "px";
        return xAxis;
        return yAxis;
        } 
  }
  
  return xAxis;
  return yAxis;
}



let up = document.getElementById("up");
let down = document.getElementById("down");
let left = document.getElementById("left");
let right = document.getElementById("right");
let upRight = document.getElementById("upRight");
let downRight = document.getElementById("downRight");
let downLeft = document.getElementById("downLeft");
let upLeft = document.getElementById("upLeft");

$(document).ready(function() {
  function setController() {
  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;
  up.style.width = windowWidth-200 + "px";
  up.style.height = windowHeight/5 + "px";
  up.style.bottom = windowHeight - windowHeight/5 + "px";
  down.style.width = windowWidth-200 + "px";
  down.style.height = windowHeight/5 + "px";
  down.style.bottom = 0 + "px";
  left.style.height = windowHeight-200 + "px";
  left.style.width = windowWidth/8 + "px";
  right.style.height = windowHeight-200 + "px";
  right.style.width = windowWidth/8 + "px";
  right.style.left = windowWidth-windowWidth/8 + "px";
  upRight.style.height = windowHeight/3 + "px";
  upRight.style.width = windowHeight/3 + "px";
  upRight.style.bottom = windowHeight-windowHeight/3 + "px";
  upRight.style.left = windowWidth-windowHeight/3 + "px";
  downRight.style.width = windowHeight/3 + "px";
  downRight.style.height = windowHeight/3 + "px";
  downRight.style.bottom = 0 + "px";
  downRight.style.left = windowWidth-windowHeight/3 + "px";
  downLeft.style.width = windowHeight/3 + "px";
  downLeft.style.height = windowHeight/3 + "px";
  downLeft.style.bottom = 0 + "px";
  downLeft.style.left = 0 + "px";
  upLeft.style.width = windowHeight/3 + "px";
  upLeft.style.height = windowHeight/3 + "px";
  upLeft.style.bottom = windowHeight-windowHeight/3 + "px";
  
};
setController();
$(window).resize(function(){
  setController()
});
});



$(document).ready(function() {
    $("#down").hover(upMove,stopMove);
    $("#up").hover(downMove,stopMove);
    $("#right").hover(leftMove,stopMove);
    $("#left").hover(rightMove,stopMove);
    $("#upRight").hover(downLeftMove,stopMove);
    $("#downRight").hover(upLeftMove,stopMove);
    $("#downLeft").hover(upRightMove,stopMove);
    $("#upLeft").hover(downRightMove,stopMove);
  });