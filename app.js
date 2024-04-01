let gameSeq = [];
let userSeq = [];
let maxScore=0;
let highScore=document.queryselector('#HighScore');
let btns = ["blue", "green", "yellow", "red"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game started");
    started = true;
    document.querySelector('body').style.backgroundColor="#B2FFB233";
    levelUp();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 300);
}
function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 300);
}

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  let randIndx = Math.floor(Math.random() * 3);
  let randColor = btns[randIndx];
  let randbtn = document.querySelector(`.${randColor}`);
  // console.log(randColor);
  gameSeq.push(randColor);
  console.log(gameSeq);
  gameFlash(randbtn);
}

function checkAns(indx) {
  //  console.log(`current level ${level}`);
  //let indx=level-1;
  if (gameSeq[indx] == userSeq[indx]) {
    // console.log("same value");
    if (gameSeq.length == userSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `Game over! your score is<b> ${level}</b> </br> press any key to start.`;
     maxScore=Math.max(`${level}`,maxScore);
    highScore.innerHTML=`Highscore:`+ maxScore;
    document.querySelector("body").style.backgroundColor="red";
    reset();
  }
}

function btnPress() {
  let btn = this;
  console.log(this);
  userFlash(btn);

  let userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  console.log(userSeq);
  console.log("button was pressed");
  checkAns(userSeq.length - 1);
  //levelUp();
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  gameSeq = [];
  userSeq = [];
  level = 0;
  started = false;
}
