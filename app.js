
function populate(){
	if(quiz.isEnded()){
		showScores();
	}else{
		var element = document.getElementById('id_question');
		element.innerHTML = quiz.getQuestionIndex().text;

		var choices = quiz.getQuestionIndex().choices;
		for(i=0; i<choices.length; i++){
			var element = document.getElementById('choices'+i);
			element.innerHTML = choices[i];
			guess('button'+[i], choices[i])
		}
		showProgress()
	}
}

function guess(id, guess){
	var button = document.getElementById(id);
	button.onclick = function() {
		quiz.guess(guess);
		populate();
	}
}

function showProgress(){
	var currentQuestion = quiz.questionIndex + 1 ;
	var element = document.getElementById('id_progress');
	element.innerHTML = "Question "+ currentQuestion + " of "+ quiz.questions.length;
}

function showScores () {
	var quizOverHtml = "<h1> Scores </h1>";
	quizOverHtml+="<h2 id='score'> your scores are : "+ quiz.score + "</h2>";
	var element =  document.getElementById('my_quiz');
	element.innerHTML = quizOverHtml;
}

var questions = [
	new Question("which is self closing tag in html", ["h1","b","br","strong"], "br"),
	new Question("which is self biggest heading in html", ["h1","h5","h6","h3"], "h1"),
	new Question("which is self smallest heading in html", ["h1","h5","h6","h3"], "h6")
];
var quiz = new Quiz(questions);
populate();
