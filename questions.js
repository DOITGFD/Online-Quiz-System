var defaultQuestions = [

{
question:"Which language is used for web development?",
options:["Python","Java","HTML","C++"],
answer:"3"
},

{
question:"Which data structure uses FIFO?",
options:["Stack","Queue","Tree","Graph"],
answer:"2"
},

{
question:"Java is a ______ language",
options:["Object Oriented","Machine","Assembly","Functional"],
answer:"1"
}

];

if(!localStorage.getItem("questions")){
localStorage.setItem("questions",JSON.stringify(defaultQuestions));
}