(function (){
  "use strict";

  const NOTE = ["C3","D3","E3","F3","G3","A3","B3",
                "C4","D4","E4","F4","G4","A4","B4",
                "C5","D5","E5","F5","G5","A5","B5"];

  const TWINKLE_LITTLE_STARS = ["C4","C4","G4","G4","A4","A4","G4",
                                "F4","F4","E4","E4","D4","D4","C4",
                                "G4","G4","F4","F4","E4","E4","D4",
                                "G4","G4","F4","F4","E4","E4","D4",
                                "C4","C4","G4","G4","A4","A4","G4",
                                "F4","F4","E4","E4","D4","D4","C4"];

  window.addEventListener("load", initialize);
  function initialize(){
    makeGrid();
    reveal(0,300);
    setTimeout(play, 4300);
  }

  function makeGrid() {
    let solution = getSolution();
    let x = 0;
    let y = 0;
    for (let i = 0; i < 6; i++) {
      y = x;
      for (let j = 0; j <10; j++) {
        let note_index = Math.floor(Math.random() * 21);
        let div = document.createElement("div");
        div.setAttribute("id", "div");
        $("main").appendChild(div);
        qsa("div")[x].classList.add("cursor");
        qsa("div")[x].classList.add("wait");
        qsa("div")[x].setAttribute("note",NOTE[note_index]);
        if(solution.get(NOTE[note_index]) > 0){
          qsa("div")[x].setAttribute("cr",0);
        }
        qsa("div")[x].addEventListener("click",blink);
        x++;
      }
      let list = [];
      let diff = x-y;
      x = x-diff;
      for(let j = 0; j <10; j++){
          list[j] = qsa("div")[x].getAttribute("note");
          x++;
      }
      let check = false;
      for(let i = 0; i < list.length; i++){
        if(solution.get(i) > 0){
          check = true;
        }
      }
      if(!check){
        let index = Math.floor(Math.random() * diff)+y;
        let only_correct = Math.floor(Math.random()*7) + 6;
        qsa("div")[index].setAttribute("note",NOTE[only_correct]);
      }
      $("main").appendChild(document.createElement("br"));
    }
  }
  function getSolution(){
    let solution = new Map();

    for(let i = 0; i < NOTE.length; i++){
      solution.set(NOTE[i],0);
    }

    for(let i  = 0; i < TWINKLE_LITTLE_STARS.length; i++){
      solution.set(TWINKLE_LITTLE_STARS[i],
        solution.get(TWINKLE_LITTLE_STARS[i])+1);
    }
    return solution;
  }
  function reveal(i,t) {
    setTimeout(function(){
        qsa('[cr]')[i].classList.add("pink");
    }, t);
    setTimeout(function(){
        qsa('[cr]')[i].classList.remove("pink");
    }, t+300);
    if(i+1 < qsa('[cr]').length){
      reveal(i+1,t+600);
    }
  }
  function play(){
    for(let i = 0 ; i < qsa("div").length; i++){
      qsa("div")[i].classList.remove("wait");
    }
  }
  function blink(){
    if(this.hasAttribute("cr")){
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
