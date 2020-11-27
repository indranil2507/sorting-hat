    //Set of questions and answers -DONE
//Give each answer an identifier -DONE
//Each identifier will increment through each question
//St the end the identifier with the highest number is the winner 
//Display the answer and rest the quiz

//pass results frm previous question to the next page usig localcache

//Randomise the background of the quiz for each questiion

//Possible - Personality Traits
// 15 -21- You Need Help
// 10 - 15 - Good Soul
// 5- 10 - Meh 
// 5 - Are You Even Real


let currentQuestion = 0;
let score = [];
let selectedAnswersData = [];
const totalQuestions =questions.length;

const container = document.querySelector('.quiz-container');
const title = document.querySelector('.title');
const questionEl = document.querySelector('.question');
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const option4 = document.querySelector('.option4')
const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous');
const restartButton = document.querySelector('.restart');
const result = document.querySelector('.result');

//Function to generate question 
function generateQuestions (index) {
    //Select each question by passing it a particular index
    const question = questions[index];
    const option1Total = questions[index].answer1Total;
    const option2Total = questions[index].answer2Total;
    const option3Total = questions[index].answer3Total;
    const option4Total = questions[index].answer4Total;
    //Populate html elements 
    questionEl.innerHTML = `${index + 1}. ${question.question}`
    option1.setAttribute('data-total', `${option1Total}`);
    option2.setAttribute('data-total', `${option2Total}`);
    option3.setAttribute('data-total', `${option3Total}`);
    option4.setAttribute('data-total', `${option4Total}`);
    option1.innerHTML = `${question.answer1}`
    option2.innerHTML = `${question.answer2}`
    option3.innerHTML = `${question.answer3}`
    option4.innerHTML = `${question.answer4}`
}


function loadNextQuestion () {
    const selectedOption = document.querySelector('input[type="radio"]:checked');
    //Check if there is a radio input checked
    if(!selectedOption) {
        alert('Please select your answer!');
        return;
    }
    //Get value of selected radio
    const answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));

    ////Add the answer score to the score array
    score.push(answerScore);

    selectedAnswersData.push()
    

    const totalScore = score.reduce((total, currentNum) => total + currentNum);

    //Finally we incement the current question number ( to be used as the index for each array)
    currentQuestion++;

        //once finished clear checked
        selectedOption.checked = false;
    //If quiz is on the final question
    if(currentQuestion == totalQuestions - 1) {
        nextButton.textContent = 'Finish';
    }
    //If the quiz is finished then we hide the questions container and show the results 
    if(currentQuestion == totalQuestions) {
        
        title.style.display = 'none';
        container.style.display = 'none';
        
        if(totalScore >= 5 && totalScore < 15 ){
            
            
            result.style.backgroundImage = 'url("hufflepuff.jpg")'
            result.innerHTML =
            `<h1 > Your Results are Here!!!</h1>
            <h2>You Are</h2>
             <div class="summary">
               
                <h1><a href="https://fontmeme.com/harry-potter-font/"><img src="https://fontmeme.com/permalink/200906/35830ca6c31ac486ce658dabcc70afa9.png" alt="harry-potter-font" border="0"></a></h1>
                <p>Hufflepuff is the most inclusive among the four houses; valuing hard work, dedication, patience, loyalty, and fair play rather than a particular aptitude in its students. Hufflepuffs are known to have a strong moral code, and a sense of right and wrong. Hufflepuffs are usually accepting of everyone.</p>
            </div>
            <button class="restart">Restart Quiz</button>`
        }
        else if(totalScore >= 15 && totalScore < 25 ){
            
            result.style.backgroundImage = 'url("raven.jpg")'
            result.innerHTML =
            `<h1 > Your Results are Here!!!</h1>
            <h2>You Are</h2>
             <div class="summary">
               
                <h1><a href="https://fontmeme.com/harry-potter-font/"><img src="https://fontmeme.com/permalink/200906/e0728d709cd85b08e5625f4907ba526d.png" alt="harry-potter-font" border="0"></a></h1>
                <p>Ravenclaws possess the traits of cleverness, wisdom, wit, intellectual ability and creativity. According to Slytherin prefect Gemma Farley, Ravenclaws are so competitive when it comes to academic success that they are known to back stab each other, and likely other students, in order to get top marks.</p>
            </div>
            <button class="restart">Restart Quiz</button>`
        }
        else if(totalScore >= 25 && totalScore < 35 ){
            
            result.style.backgroundImage = 'url("sly.jpg")'
            result.innerHTML =
            `<h1 > Your Results are Here!!!</h1>
            <h2>You Are</h2>
             <div class="summary">
               
                <h1><a href="https://fontmeme.com/harry-potter-font/"><img src="https://fontmeme.com/permalink/200906/7a8b2cc3bbb8c21e479361c50ec6bf0a.png" alt="harry-potter-font" border="0"></a></h1>
                <p> Slytherins tend to be ambitious, shrewd, cunning, strong leaders, and achievement-oriented. They also have highly developed senses of self-preservation. This means that Slytherins tend to hesitate before acting, so as to weigh all possible outcomes before deciding exactly what should be done.</p>
            </div>
            <button class="restart">Restart Quiz</button>`
        }
        else {
            
            result.style.backgroundImage = 'url("gr.jpg")'
            result.innerHTML =
            `<h1 > Your Results are Here!!!</h1>
            <h2>You Are</h2>
             <div class="summary">
               
                <h1><a href="https://fontmeme.com/harry-potter-font/"><img src="https://fontmeme.com/permalink/200906/7e4084fd496ee567d4c277f68027e061.png" alt="harry-potter-font" border="0"></a></h1>
                <p>The Gryffindor house emphasises the traits of courage as well as "daring, nerve, and chivalry," and thus its members are generally regarded as brave, though sometimes to the point of recklessness. Some Gryffindors have also been noted to be short-tempered</p>
            </div>
            <button class="restart">Restart Quiz</button>`
        }
        
        return;
    }
    generateQuestions(currentQuestion);
}

//Function to load previous question
function loadPreviousQuestion() {
    //Decrement quentions index
    currentQuestion--;
    //remove last array value;
    score.pop();
    //Generate the question
    generateQuestions(currentQuestion);
}

//Fuction to reset and restart the quiz;
function restartQuiz(e) {
    if(e.target.matches('button')) {
    //reset array index and score
    currentQuestion = 0;
    score = [];
    //Reload quiz to the start
    location.reload();
    }

}


generateQuestions(currentQuestion);
nextButton.addEventListener('click', loadNextQuestion);
previousButton.addEventListener('click',loadPreviousQuestion);
result.addEventListener('click',restartQuiz);


