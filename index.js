(function (){
  "use strict";
  let grid = [];
  window.addEventListener("load", initialize);
  function initialize(){
    solution();
    makeGrid();
    reveal(0,300);
    setTimeout(play, 4300);
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
        qsa("div")[x].classList.add("wait");
        if (grid[i][j] != null) {
          qsa("div")[x].setAttribute("note",grid[i][j]);
          qsa("div")[x].classList.add("cr");
          qsa("div")[x].addEventListener("click",blink);
          x++;
          ct++;
       } else {
         qsa("div")[x].addEventListener("click",blink);
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
  function reveal(i,t) {
    setTimeout(function(){
        qsa('.cr')[i].classList.add("pink");
    }, t);
    setTimeout(function(){
        qsa('.cr')[i].classList.remove("pink");
    }, t+300);
    if(i+1 < qsa('.cr').length){
      reveal(i+1,t+600);
    }
  }
  function play(){
    for(let i = 0 ; i < qsa("div").length; i++){
      qsa("div")[i].classList.remove("wait");
    }
  }
  function blink(){
    if(this.getAttribute("class") == "cursor cr"){
      this.classList.add("wait");
      this.classList.add("lime");
      setTimeout(function(){
        qs(".lime").classList.remove("lime");
        qs(".wait").classList.remove("wait")
      },1000);
    } else {
      this.classList.add("wait");
      this.classList.add("red")
      setTimeout(function(){
        qs(".red").classList.remove("red");
        qs(".wait").classList.remove("wait")
      },1000);
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
