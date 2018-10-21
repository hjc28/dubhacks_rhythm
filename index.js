(function (){
  "use strict";
  window.addEventListener("load", initialize);
  function initialize(){
    let div = document.createElement("div");
    div.setAttribute("id","div");
    $("main").appendChild(div);
    setTimeout(a,1000);
    setTimeout(b,2000);
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
})();
