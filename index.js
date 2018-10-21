(function (){
  "use strict";
  window.addEventListener("load", initialize);
  function initialize(){
    makeGrid();
    //let div = document.createElement("div");
    //div.setAttribute("id","div");
    //$("main").appendChild(div);
    //setTimeout(a,1000);
    //setTimeout(b,2000);
  }
  function a(){
    div.classList.add("pink")
  }
  function b(){
    div.classList.remove("pink")
  }
  function $(id){
    return document.getElementById(id);
  }
  function makeGrid() {

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        let div = document.createElement("div");
        div.setAttribute("id", "div");
        $("main").appendChild(div);

      }
      //$("main").appendChild("br");

    }
  } 
})();
