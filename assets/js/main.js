Array.from(document.getElementById('cv-menu').children).forEach(element => {
  var buttonId = element.children[0].id;
  var sectionId = buttonId.split("-")[0];
  document.getElementById(buttonId).onclick=function(){
    document.getElementById(sectionId).scrollIntoView();
  }
});