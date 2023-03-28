// fetch for nav
fetch('/html/components/nav.html')
.then(response => response.text())
.then(component_html => {
  console.log(component_html);

  let list_of_elements = document.getElementsByClassName("nav-component");

  for(let element of list_of_elements) {
    element.innerHTML = component_html;

  }
  menuToggle();
});

// fetch for footer
fetch("/html/components/footer.html")
.then(response => response.text())
.then(part_html => {
  console.log(part_html);

  let list_of_parts = document.getElementsByClassName("footer-element");

  for(let part of list_of_parts) {
    part.innerHTML=part_html;
  }
});



function menuToggle() {

  const menuToggleElement = document.getElementById("menu-toggle");
  const menuItemsElement = document.getElementById("menu-items");
  menuToggleElement.addEventListener("click", (e)=> {
    menuItemsElement.classList.toggle("show-menu-items");
  });
}


// help modal
let modal = document.getElementById("myModal");

let btn = document.getElementById("myBtn");

let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}