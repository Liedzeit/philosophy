var curQuestion = 0;
var rounds = [50,100,200,500,1000,2000,4000,8000,16000,32000,64000,125000,250000,500000,1000000];
var correctAnswers = 0;
var philQuestions = [
  {
    question: "Der Krieg ist nach Heraklit der Vater aller ",
    answers: {
      a: "Soldaten",
      b: "Freuden",
      c: "Dinge",
      d: "Gewalt"
    },
    correctAnswer: "c"
  },
  {
    question: "Wer warnte die offene Gesellschaft vor ihren Feinden?",
    answers: {
      a: "Punks",
      b: "Popper",
      c: "Rocker",
      d: "Mods"
    },
    correctAnswer: "b"
  },
  {
    question: "Wenn Russell angesichts seiner Antinomien einen über den Durst trinkt, dann ist",
    answers: {
      a: "John speiübel",
      b: "Stan liebenswert beschwipst",
      c: "Ed gar nicht nüchtern",
      d: "Bert randvoll"
    },
    correctAnswer: "d"
  },
  {
    question: "Wer die Güte und Allmacht Gottes mit den Übeln in der Welt vereinbaren will, der betreibt",
    answers: {
      a: "Annadasbeyn",
	b: "Leaderkhnie",
	c: "Theodizee",
	d: "Marademfus"
    },
    correctAnswer: "c"
  },
  {
    question: "Den logischen Schluß, in der die Voraussetzungen und der Schluß allgemein affirmativ sind, merkt man sich seit dem Mittelalter mit",
    answers: {
      a: "Barbara",
      b: "Claudia",
	c: "Katharina",
	d: "Joachim"
    },
    correctAnswer: "a"
  },
  {
    question: "Das kontradiktorische Urteil zu »Alle Menschen sind sterblich« lautet",
    answers: {
      a: "Kein Mensch ist sterblich",
      b: "Manche Menschen sind sterblich",
	c: "Mindestens ein Mensch ist nicht sterblich",
	d: "Alle Menschen sind unsterblich"
    },
    correctAnswer: "c"
  },
  {
    question: "Die Forderung »Pluralitas non est ponenda sine neccessiate« ging in die Philosophiegeschichte ein als",
    answers: {
      a: "Occhams Rasiermesser",
      b: "Aquins Wärmflasche",
	  c: "Canterburys Zahnbürste",
	  d: "Bacons Hammer"
    },
    correctAnswer: "a"
  },
  {
    question: "Nach Kant ist Aufklärung der Ausgang des Menschen aus seiner ",
    answers: {
      a: "selbstverschuldeten Unmündigkeit",
      b: "gesellschaftsbestimmten Pietät",
	  c: "zwangsgesetzten Urteilslosigkeit",
	  d: "sinnlichen Apperzeption"
    },
    correctAnswer: "a"
  },
  {
    question: "Welcher Philosoph beschäftigte sich eingehend mit einem Teil seines Namens?",
    answers: {
      a: "Schopenhauer",
      b: "Wittgenstein",
	  c: "Fichte",
	  d: "Habermas"
    },
    correctAnswer: "c"
  },
    {
    question: "Samuel Johnson widerlegte Bischof Berkeleys Idealismus, indem er ",
    answers: {
      a: "darauf verwies, dass eine materielose Welt die Allmacht Gottes außer Acht lässt",
      b: "Aristoteles Argumente gegen Zenon aufnahm und erweiterte",
	  c: "die auch subjektive Inkohärenz eines subsistenten Materiebegriffs zu bedenken gab",
	  d: "mit seinem Fuß gegen einen Stein trat"
    },
    correctAnswer: "d"
  },
      {
    question: "Wer nannte seine Philosophie absichtlich hässlich »Pragmatizismus«?",
    answers: {
      a: "John Dewey",
      b: "Ralph Waldo Emerson",
	  c: "Charles S. Peirce",
	  d: "Josiah Royce"
    },
    correctAnswer: "c"
  },
  {
    question: "Welcher Thrillerautor schrieb einen Roman, der genauso heißt wie Wittgensteins Hauptwerk?",
    answers: {
      a: "Tom Clancy",
      b: "Philip Kerr",
	  c: "Michael Ridpath",
	  d: "Ken Follet"
    },
    correctAnswer: "b"
  },
  {
    question: "Wer vom Sein auf das Sollen schließt, der begeht einen",
    answers: {
      a: "naturalistischen Fehlschluß",
      b: "ontologischen Fehlschluß",
	  c: "ethischen Fehlschluß",
	  d: "kontinentalen Fehlschluß"
    },
    correctAnswer: "a"
  },
  {
    question: "Yin und Yang bedeuten ursprünglich",
    answers: {
      a: "Frau – Mann",
      b: "schwarz – weiß",
	  c: "dunkle Seite des Hügels - helle Seite des Hügels",
	  d: "kalter Regen – warmer Regen"
    },
    correctAnswer: "a"
  },
  {
    question: "Adorno verwendet welches Zitat von Francis Bradley als Motto in seinen Minima Moralia?",
    answers: {
      a: "Metaphysik besteht darin, schlechte Gründe dafür zu finden, was wir instinktiv glauben",
      b: "Wo alles schlecht ist, muss es gut sein, das Schlimmste zu kennen",
	  c: "Manche mögen alles Nackte nicht und so finden sie auch die nackte Wahrheit unanständig",
	  d: "Alles, weniger als das Universum ist eine Abstraktion"
    },
    correctAnswer: "b"
  }
   
]



window.onload = function() {
    /* Add your logic here */
    //var question = philQuestions[0].question;

    qContainer = $(".question");
    displayQuestion(0)
    
}


function displayQuestion(num)
{
	var question = philQuestions[num].question;
	$("#round").text("€"+rounds[num]);
	qContainer = $(".question");
	qContainer.text(question)
	var answers = philQuestions[num].answers;
	var a = $("#a1");
	var b = $("#a2");
	var c = $("#a3");
	var d = $("#a4");
	a.text("(A) " + answers.a);
	b.text("(B) " + answers.b);
	c.text("(C) " + answers.c);
	d.text("(D) " + answers.d);
}

function next()
{
	curQuestion ++;
	displayQuestion(curQuestion)
}

function check(tip)
{
	var pos = tip.charCodeAt()-96;
	console.log(pos);
	if (tip ==  philQuestions[curQuestion].correctAnswer)
		{
			correctAnswers ++;
			$("#sum").text(correctAnswers);
			console.log("#a"+pos);
			//$("#a"+pos).css("background-color","green");

			/*var $el = $("#a"+pos),
			    x = 3000,
			    originalColor = $el.css("background");
				$el.css("background", "green");
				setTimeout(function(){
				  $el.css("background", "blue");
				}, x);*/
		}
		else
		{
			//console.log("#a"+tip);
			//$("#a"+pos).css("background-color","red");
			/*var $el = $("#a"+pos),
			    x = 3000,
			    originalColor = $el.css("background");
				$el.css("background-color", "red");
				setTimeout(function(){
				  $el.css("background-color", "blue");
				}, x);*/
		}
}

function hilite(el,color)
{

}

/*function buildQuiz(){
	console.log("building");
	console.log(myQuestions.length);
  // variable to store the HTML output
  const output = [];

  // for each question...
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      // variable to store the list of possible answers
      const answers = [];

      // and for each available answer...
      for(letter in currentQuestion.answers){
      	//console.log(letter);
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );
  //console.log(output[1]);
  // finally combine our output list into one string of HTML and put it on the page
  //const quizContainer = document.getElementById('quiz');
  
  var x = output.join('')
  quizContainer.innerHTML = x ; //output.join('');
  console.log(x);
}*/












function showResults(){

  // gather answer containers from our quiz
  const answerContainers = quizContainer.querySelectorAll('.answers');

  // keep track of user's answers
  let numCorrect = 0;

  // for each question...
  myQuestions.forEach( (currentQuestion, questionNumber) => {

    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if(userAnswer === currentQuestion.correctAnswer){
      // add to the number of correct answers
      numCorrect++;

      // color the answers green
      answerContainers[questionNumber].style.color = 'lightgreen';
    }
    // if answer is wrong or blank
    else{
      // color the answers red
      answerContainers[questionNumber].style.color = 'red';
    }
  });

  // show number of correct answers out of total
  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

// display quiz right away






//const quizContainer = document.getElementById('quiz');

const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');




// on submit, show results
//submitButton.addEventListener('click', showResults);


