let game_Sequence = []
let user_Sequence = []
let high_score = []
let btns = ["div1", "div2", "div3", "div4"]
let started = false
let level = 0
h2 = document.querySelector("h2");
document.addEventListener("keypress", function () {
    if (started = false) {
        console.log("game is started");
        started = true;
    }
    levelup();
})

function levelup() {
    user_Sequence = [];
    level++;
    h2.innerText = `level ${level}`;
    let randind = Math.floor(Math.random() * 4);
    let randdiv = btns[randind];
    let randbtn = document.querySelector(`.${randdiv}`)
    game_Sequence.push(randdiv);
    console.log(game_Sequence);
    // console.log(randind)
    // console.log(randdiv)
    // console.log(randbtn)
    gameFlash(randbtn)
}

function gameFlash(btn) {
    btn.classList.add("flash")
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 1000)
}
function userbtnFlash(btn) {
    btn.classList.add("userflash")
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 1000)
}
function btnpress() {
    let btn = this;
    userdiv = btn.getAttribute("id")
    user_Sequence.push(userdiv);
    userbtnFlash(btn);
    checkAns(user_Sequence.length - 1)
}
let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
    btn.addEventListener("click", btnpress);
}

function checkAns(index) {
    if (user_Sequence[index] == game_Sequence[index]) {
        if (user_Sequence.length == game_Sequence.length) {
            setTimeout(levelup, 1000)
        }
    }
    else {
        h2.innerHTML = `Game Over! Your Score was <b>${level} </b> <br>Press Any key to Start`;
        high_score.push(level);
        body = document.querySelector("body")
        body.style.backgroundColor = "red"
        setTimeout(() => {
            body.style.backgroundColor = "white"
        }, 150)
        reset_game()
    }
}

function reset_game() {
    started == false;
    game_Sequence = []
    user_Sequence = []
    level = 0
    highest_score()
}

function highest_score() {
    const high = Math.max(...high_score);
    const h3 = document.createElement("h3");
    h3.innerHTML = `Highest Score of all time is ${high}`;
    h3.classList.add("heading");
    h3.tabIndex = 0;
    document.body.appendChild(h3);

    h3.addEventListener("keydown", function () {
        h3.remove();
    });

    setTimeout(() => {
        h3.remove();
    }, 3000);
}