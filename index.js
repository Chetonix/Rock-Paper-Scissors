const btns = document.querySelectorAll(".btn");
let pScore = 0;
let compScore = 0;
let gameReset = false;
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    // console.log(e.target.value);
    // let button = e.target;
    // console.log(button.value);
    // let cloneBtn = e.target.cloneNode(true);
    // let playerBoard = document.querySelector("playerBoard");

    let playerChoice = document.querySelector(".playerChoice");
    let computerChoice = document.querySelector(".computerChoice");
    let rock = document.querySelector(".Rock");
    let paper = document.querySelector(".Paper");
    let scissor = document.querySelector(".Scissors");
    let pChoice = Number(e.target.getAttribute("value"));
    let pScoreDisplay = document.querySelector(".playerScore");
    let compScoreDisplay = document.querySelector(".computerScore");
    let resultHeading = document.querySelector("h2");
    if (gameReset) {
      resultHeading.textContent = "First to score 5 wins the Game!";
      resultHeading.classList.remove("result");
    }
    // playerChoice.classList.add("none");
    // playerChoice.replaceWith(cloneBtn);
    playerChoice.textContent = e.target.textContent;
    let aiChoice = Math.floor(Math.random() * 3);
    if (aiChoice === 0 && pChoice === 0) {
      computerChoice.textContent = rock.textContent;
      pScore++;
      compScore++;
      pScoreDisplay.textContent = pScore;
      compScoreDisplay.textContent = compScore;
    }
    if (aiChoice === 0 && pChoice === 1) {
      computerChoice.textContent = rock.textContent;
      pScore++;
      compScore += 0;
      pScoreDisplay.textContent = pScore;
      compScoreDisplay.textContent = compScore;
    }

    if (aiChoice === 0 && pChoice === 2) {
      computerChoice.textContent = rock.textContent;
      pScore += 0;
      compScore++;
      pScoreDisplay.textContent = pScore;
      compScoreDisplay.textContent = compScore;
    }

    if (aiChoice === 1 && pChoice === 0) {
      computerChoice.textContent = paper.textContent;
      pScore += 0;
      compScore++;
      pScoreDisplay.textContent = pScore;
      compScoreDisplay.textContent = compScore;
    }
    if (aiChoice === 1 && pChoice === 1) {
      computerChoice.textContent = paper.textContent;
      pScore++;
      compScore++;
      pScoreDisplay.textContent = pScore;
      compScoreDisplay.textContent = compScore;
    }
    if (aiChoice === 1 && pChoice === 2) {
      computerChoice.textContent = paper.textContent;
      pScore++;
      compScore += 0;
      pScoreDisplay.textContent = pScore;
      compScoreDisplay.textContent = compScore;
    }
    if (aiChoice === 2 && pChoice === 0) {
      computerChoice.textContent = scissor.textContent;
      pScore++;
      compScore += 0;
      pScoreDisplay.textContent = pScore;
      compScoreDisplay.textContent = compScore;
    }
    if (aiChoice === 2 && pChoice === 1) {
      computerChoice.textContent = scissor.textContent;
      pScore += 0;
      compScore++;
      pScoreDisplay.textContent = pScore;
      compScoreDisplay.textContent = compScore;
    }
    if (aiChoice === 2 && pChoice === 2) {
      computerChoice.textContent = scissor.textContent;
      pScore++;
      compScore++;
      pScoreDisplay.textContent = pScore;
      compScoreDisplay.textContent = compScore;
    }
    if (pScore === 5 || compScore === 5) {
      gameReset = true;

      resultHeading.classList.add("result");
      if (pScore === compScore) {
        resultHeading.textContent = "It's a Tie!";
      } else if (pScore > compScore) {
        resultHeading.textContent = "You Won!";
      } else if (pScore < compScore) {
        resultHeading.textContent = "You Lose!";
      }
      pScore = 0;
      compScore = 0;
    }
  });
});
