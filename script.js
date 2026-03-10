var name = localStorage.getItem("username");

document.getElementById("welcome").innerHTML =
"Welcome " + name;

var questions = JSON.parse(localStorage.getItem("questions"));

var quizForm = document.getElementById("quizForm");

questions.forEach((q,index)=>{

var html = "<p>"+(index+1)+". "+q.question+"</p>";

q.options.forEach((opt,i)=>{

html +=
'<input type="radio" name="q'+index+'" value="'+(i+1)+'">'+opt+'<br>';

});

quizForm.innerHTML += html + "<br>";

});


var time = 60;

var timer = setInterval(function(){

time--;
document.getElementById("timer").innerHTML = "Time: "+time;

if(time<=0){
clearInterval(timer);
submitQuiz();
}

},1000);


function submitQuiz(){

clearInterval(timer);

var score = 0;

questions.forEach((q,index)=>{

var ans =
document.querySelector('input[name="q'+index+'"]:checked');

if(ans && ans.value == q.answer){
score++;
}

});

document.getElementById("result").innerHTML =
"Your Score: "+score+" / "+questions.length;

}