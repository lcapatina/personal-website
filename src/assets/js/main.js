function adaptMenu(){
  var x = document.getElementById("menu-column");
  var navBarContainer = document.getElementById("nav-bar-container");
  var contactSection = document.getElementById("contact-section");
  if (window.innerWidth < 640) {
    x.className = "column";
    navBarContainer.className = "column";
    contactSection.className = "column";
  } else {
    x.className = "column column-25";
    navBarContainer.className = "row";
    contactSection.className = "row";
  }
}

window.addEventListener("load", adaptMenu);

window.addEventListener("resize", adaptMenu);

function addResponsiveClass() {
  var x = document.getElementById("cv-menu");
  if (x.className === "") {
    x.className += " responsive";
  } else {
    x.className = "";
  }
}

Array.from(document.getElementById('cv-menu').children).forEach(element => {
  var buttonId = element.children[0].id;
  var sectionId = buttonId.split("-")[0];
  document.getElementById(buttonId).onclick=function(){
    document.getElementById(sectionId).scrollIntoView();
    if (window.innerWidth < 640) {
      addResponsiveClass();
    }
  }
});