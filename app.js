let h3= document.querySelector('h3');
let h2= document.querySelector('h2');

let gameSeq=[];
let usrSeg=[];
let hightest = 0;
let btns = ["red","green", "orange", "blue"]
let started = false;
let level = 0;

document.addEventListener('keypress' , function() {
    if(started==false){
        console.log("Game start");
        started==true;
        levelUP();  
    }
    
});

function levelUP(){
    usrSeg=[];
    level++;
    h3.innerText=`Level ${level}`;
    
    let random = Math.floor(Math.random()*3) ;
    let randColor = btns[random];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
   

    gameFlash(randbtn);
}

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    } , 250);
}
function userFlash(btn){
    btn.classList.add("urflash");
    setTimeout(function () {
        btn.classList.remove("flash");
    } , 250);
}
function checkBtn(idx){
    
    if(usrSeg[idx] === gameSeq[idx]){
        if(usrSeg.length == gameSeq.length){
            setTimeout(levelUP , 1000);

        }
    }else{
        h3.innerHTML=`Game Over : Your score was <b>${level*10}</b> <br> Press any key for start the game again `;
          levels =`${level}`;
          if(level > hightest){
            hightest=level;
            console.log(hightest);
          }
        document.querySelector('body').style.background="red";
        setTimeout(function(){
        document.querySelector('body').style.background="white";

        },150);
        console.log("Gameover");
        h2.innerHTML=`<b>Highest Score : ${hightest}</b>`;
        reset();
}

}
function btnPress(){
    let btn = this;
    gameFlash(btn);
    usrcolor = btn.getAttribute('id');
    usrSeg.push(usrcolor)
 
    checkBtn(usrSeg.length-1);

}

let allbtns = document.querySelectorAll(".box");
for(btn of allbtns){
    btn.addEventListener("click" ,btnPress)
}

function reset (){
     gameSeq=[];
     usrSeg=[];
     started = false;
     level = 0;
}

