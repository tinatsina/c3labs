// Get the modal
var modal = document.getElementById('id01');
var modal2 = document.getElementById('id02');
var modal3 = document.getElementById('id03');
var modal4 = document.getElementById('id04');
var modal5 = document.getElementById('id05');
var modal6 = document.getElementById('id06');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function closeOnClick(event) {
  if (event.target.className === "w3-modal") {
    event.target.style.display = "none";
  }
}
