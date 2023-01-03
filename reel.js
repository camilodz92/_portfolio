
//Get the button
let mybutton = document.getElementById("rp");

function scrollFunction() {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", goDown);

function goDown() {
  document.body.scrollTop = 880;
  document.documentElement.scrollTop = 880;
}






//Get the button
let mybutton2 = document.getElementById("pr");

function scrollFunction() {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
mybutton2.addEventListener("click", goUp);

function goUp() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }





