var modal= document.getElementById("hidden_modal");
var closeButton= document.querySelector(".close-button");

var timer = function(){
  modal.setAttribute('style', 'display:block');
};

setTimeout(timer, 1000)

closeButton.addEventListener("click", function(){
  modal.setAttribute('style', 'display:none');
  modal.style.display = 'none'
});


document.setAttribute('style', 'display:block');

function checkThisModal() {
  var email = document.querySelector("#email").value;

  if (true) {
    alert("Welcome Aboard");
  } else {
    alert("Invalid")
  }
};
