////////////////////////////////////////////////////////
// Quiz inspired by famous TV quiz
// rf
////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', () => {
    quiz();
})

function quiz() {
    let round = 0;
    let answerstr = "";
    let clickcount = 0;
    let correctAnswers = 0;
    let chosenAnswer;
    let specialQuestions = quizdata[0].questions;
    let level = quizdata[0].levels;
    const letters = ["A", "B", "C", "D"];
    const answers = document.querySelectorAll('li');

    answers.forEach(answer => {
        answer.addEventListener('click', clicked)
    });
    displayQuestions();

    function clicked(e) {
        clickcount++;
        const answersArray = Array.from(answers);
        let index = answersArray.indexOf(e.target);

        let result = document.getElementById("result");
        let guess = document.getElementById("guess");
        if (round > 0) {
            let id = letters[index];
            if (clickcount > 1) return;
            chosenAnswer = letters[index];
            console.log("Id: " + chosenAnswer);
            let guess = document.getElementById(chosenAnswer);
            guess.parentElement.classList.add("chosen");
            setTimeout(displayAnswer, 1500);
        } else {
            //guess.style.visibility = 'visible';
            //result.style.visibility = 'visible';
            if (clickcount < 4) {
                answerstr = answerstr + letters[index] + ", ";
                guess.innerHTML = answerstr;
            } else {
                answerstr = answerstr + letters[index];
                guess.innerHTML = answerstr;
                if (answerstr == specialQuestions[0].correctAnswer) {
                    console.log("correct");
                    guess.classList.add("correct");
                } else {
                    console.log("wrong");
                    guess.classList.add("wrong");
                }
                result.innerHTML = specialQuestions[0].correctAnswer;
                round++;

                setTimeout(hideGuessResult, 1500);
            }
        }
    }

    function displayAnswer() {
        console.log("displayAnswer ");
        if (specialQuestions[round].correctAnswer == chosenAnswer) {
            correctAnswers++;
        }

        const money = document.getElementById("money");
        money.innerHTML = round + " (15)  – " + level[correctAnswers];

        console.log("Correct: " + specialQuestions[round].correctAnswer);
        var correct = document.getElementById(specialQuestions[round].correctAnswer);

        correct.parentElement.classList.remove("chosen");
        correct.parentElement.classList.add("correct");

        round++;
        if (round == 16) {
            document.getElementById("question").innerHTML = "Game over...";
            document.getElementById("questions").classList.add("invisible");
        } else {
            setTimeout(displayQuestions, 2000);
        }

    }

    function hideGuessResult() {
        document.getElementById("result").classList.add("invisible");
        document.getElementById("guess").classList.add("invisible");
        setTimeout(displayQuestions, 1500);
    }

    function displayQuestions() {
        removeClasses();
        clickcount = 0;
        console.log("round: " + round);
        document.getElementById("question").innerHTML = specialQuestions[round].question;
        document.getElementById("A").innerHTML = specialQuestions[round].answers.A;
        document.getElementById("B").innerHTML = specialQuestions[round].answers.B;
        document.getElementById("C").innerHTML = specialQuestions[round].answers.C;
        document.getElementById("D").innerHTML = specialQuestions[round].answers.D;
    }

    function removeClasses() {

        let correct = document.getElementsByClassName("correct");
        try {
            correct[0].classList.remove("correct");
        } catch (e) {}
        let chosen = document.getElementsByClassName("chosen");
        try {
            chosen[0].classList.remove("chosen");
        } catch (e) {}
    }
}
