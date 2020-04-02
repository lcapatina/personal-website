document.getElementById("home-button").onclick=function(){
  console.log("button clicked!");
  //document.getElementById('aboutme').classList.remove("selected-section");
  //document.getElementById('home').classList.add("selected-section");
  document.getElementById('home').scrollIntoView();
}

document.getElementById("aboutme-button").onclick=function(){
  console.log("button clicked!");
  //document.getElementById('home').classList.remove("selected-section");
  //document.getElementById('aboutme').classList.add("selected-section");
  document.getElementById('aboutme').scrollIntoView();
}