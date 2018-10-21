(function (){
  "use strict";
  let grid = [];
  window.addEventListener("load", initialize);
  function initialize(){
    solution();
    makeGrid();
    blink(0,1000);
    //let div = document.createElement("div");
    //div.setAttribute("id","div");
    //$("main").appendChild(div);
    //setTimeout(a,1000);
    //setTimeout(b,2000);
  }

  function makeGrid() {
    let x = 0;
    let ct = 0;
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        let div = document.createElement("div");
        div.setAttribute("id", "div");
        $("main").appendChild(div);
        qsa("div")[x].classList.add("cursor");
        if (grid[i][j] != null) {
          qsa("div")[x].setAttribute("note",grid[i][j]);
          qsa("div")[x].classList.add("cr");
          x++;
          ct++;
       } else {
         x++;
       }
      }
      $("main").appendChild(document.createElement("br"));

    }
  }
  function solution(){
    grid = [["Cq","Cq",null,null,null],
            [null, "Gq", null, null, null ],
            [null,"Gq","Aq",null,null],
            [null,"Gh","Aq",null,null,],
            [null,null,null,null,null]]
  }
  function blink(i,t) {
    setTimeout(function(){
        qsa('.cr')[i].classList.add("pink");
    }, t);
    setTimeout(function(){
        qsa('.cr')[i].classList.remove("pink");
    }, t+1000);
    if(i < qsa('.cr').length){
      blink(i+1,t+2000);
    }
  }

  function $(id){
    return document.getElementById(id);
  }
  function qs(tag) {
		return document.querySelector(tag);
	}
	function qsa(tag) {
		return document.querySelectorAll(tag);
	}
})();
