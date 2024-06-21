let gameSeq=[];
let uesrSeq=[];

let started=false;
let level=0;
let btns=["red","orange","purple","green"];
let h2=document.querySelector('h2');

document.addEventListener('keypress',function(){
    if(started==false){
        console.log("game is started");
        started=true;
        levelUp();
    }
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },100);
}
function levelUp(){
    uesrSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnflash(randBtn);
}
function checkAns(idx){
    // console.log("curr level",level);
    if(uesrSeq[idx]===gameSeq[idx]){
        if(uesrSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML=`Game over ! Your <b>score</b> was ${level}<br>Press any key to start.`;
        document.querySelector('body').style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor="white";
        },100);
        reset();
    }
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },100);
}
function btnPress(){
    // console.log(this);
   let btn=this;
   userflash(btn);

   userColor=btn.getAttribute("id");
   uesrSeq.push(userColor);
//    console.log(userColor);
   checkAns(uesrSeq.length-1);
}

let allBtns=document.querySelectorAll('.btn');

for(btn of allBtns){
    btn.addEventListener('click',btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    uesrSeq=[];
    level=0;
}