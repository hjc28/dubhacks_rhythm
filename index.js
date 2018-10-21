(function (){
  "use strict";
  let grid = [];
  window.addEventListener("load", initialize);
  function initialize(){
    solution();
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
        if (grid[i][j] != null) {
         let n = i*j;
         document.querySelectorAll
        }
      }
      //$("main").appendChild("br");

    }
  }
  function solution(){
    grid = [["Cq","Cq",null,null,null],
            [null, "Gq", null, null, null ],
            [null,"Gq","Aq",null,null],
            [null,"Gh","Aq",null,null,],
            [null,null,null,null,null]]
  }
})();
