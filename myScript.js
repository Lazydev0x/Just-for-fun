// Get the modal
//var modal = document.getElementById("myModal");
const modal = document.querySelector("#myModal");

const waitlistButtton = document.querySelector("#joinWaitlist")

waitlistButtton.addEventListener("click", ()=>{
   modal.style.display = "block";
})

const cancelButton = document.querySelector("#closeWaitList")

cancelButton.addEventListener("click", ()=>{
    modal.style.display = "none";
})
// Get the button that opens the modal
//var btn = document.getElementById("button");

// Get the <span> element that closes the modal
//var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal


//btn.addEventlistener("click", ()=>{
   // modal.style.display = "block";
//});

// function myFunction() {

// }
// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }