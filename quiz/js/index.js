

//List of Questions and Answer Choices
var qAndA = [
  {question: '1.) What allows JavaScript to pull information from the HTML?',
   ansChoices: {
     a: 'HTML5 tags',
     b: 'DOM',
     c: 'Bo staff skills',
     d: 'The Interwebs'
   },
   correctAns: '2'
  },
  {question: '2.) What is the <em>primary</em> purpose of JavaScript?',
   ansChoices: {
     a: 'To make my life miserable',
     b: 'To give me a headache',
     c: 'To make sites more interactive',
     d: 'To make me feel better than everyone else'
   },
   correctAns: '3'
   },
  {
    question: '3.) What is the best way one learn to be better at JavaScript?',
    ansChoices: {
      a: 'Practice',
      b: 'Read about it',
      c: 'Get a certificate',
      d: 'Hire someone else to do it'
    },
    correctAns: '1'
  } 
];
//DOM from HMTL
var qContainer = document.getElementById('question');

//score tracking variables
var ansA = document.getElementById('choiceA');
var ansB = document.getElementById('choiceB');
var ansC = document.getElementById('choiceC');
var ansD = document.getElementById('choiceD');
var totQuestion = qAndA.length;
var indexCount = 0;
score = 0;

//Put Q and A into HTML
function sendForm() {
  var q = qAndA[indexCount].question;
  //load question
  qContainer.innerHTML = "";
  qContainer.innerHTML = q;

  //load answer choices
  ansA.innerHTML = qAndA[indexCount].ansChoices.a;
  ansB.innerHTML = qAndA[indexCount].ansChoices.b;
  ansC.innerHTML = qAndA[indexCount].ansChoices.c;
  ansD.innerHTML = qAndA[indexCount].ansChoices.d;
}

function read() {
  var ans = qAndA[indexCount].correctAns;
  var usrSelect = document.querySelector('input[type=radio]:checked');
  usrSelect.checked=false;
  //Left radios blank
  if (!usrSelect){
    alert('Uh-oh! You seem to have left your choice blank!');
  };
  //Correct answer
  if (usrSelect.value === ans) {
    score +=1;
    indexCount +=1;
  //Wrong answer
  }else if (usrSelect.value !== ans) {
    console.log('Wrong Answer. You should have chosen value: ' + ans + ' but instead you chose ' + usrSelect.value);
    indexCount += 1;
  //Somethings FUBAR...
  } else {
    console.log('Something went wrong');
  };
  if (indexCount === totQuestion) {
    var finish = document.getElementById('final');
    finish.innerHTML = '';
    finish.innerHTML = 'All your scores are belong to us. Your made a ' + Math.round((100*(score/totQuestion))) + '%' + '.|';
    finish.style.width = '500px';
    finish.style.margin = '200px auto';
  };
  sendForm();
 }