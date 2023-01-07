const scoreDisplay = document.getElementById("score-display")
const questionDisplay = document.getElementById("question-display")

const questions = [
    {
        quiz : ["value", "estimate", "evaluate"],
        options: ["bananas", "assess"],
        correct: 1
    },
    {
        quiz : ["close", "near", "next"],
        options: ["adjacent", "old"],
        correct: 0
    },
    {
        quiz : ["foreign", "ethnic", "national"],
        options: ["hungry", "exotic"],
        correct: 1
    },
    {
        quiz : ["fast", "quick", "prompt"],
        options: ["rapid", "bicycle"],
        correct: 0
    },
    {
        quiz : ["Lamborghini", "McLaren", "Aston Martin"],
        options: ["Sandwiches", "BMW"],
        correct: 1
    },
]

let score = 0
let clicked = []

scoreDisplay.textContent = score

function populateQuestions() {
    questions.forEach(question => {
        const questionBox = document.createElement('div')
        questionBox.classList.add('question-box')
        const logoDisplay = document.createElement('h1')
        logoDisplay.textContent = '✏'
        questionBox.append(logoDisplay)
        question.quiz.forEach(tip => {
            const tipText = document.createElement("p")
            tipText.textContent = tip
            questionBox.append(tipText)
        }) 

        const questionButtons = document.createElement('div')
        questionButtons.classList.add('question-buttons')
        questionBox.append(questionButtons)

        question.options.forEach((option,  optionIndex) => {
            const questionButton = document.createElement('button')
            questionButton.classList.add('question-button')
            questionButton.textContent = option

            questionButton.addEventListener('click', () => checkAnswer(questionBox, questionButton, option, optionIndex, question.correct))

            questionButtons.append(questionButton)
        })

        const answerDisplay = document.createElement('div')
        answerDisplay.classList.add('answer-display')

        questionBox.append(answerDisplay)
        questionDisplay.append(questionBox)
    })
}

populateQuestions()


function checkAnswer(questionBox, questionButton, option, optionIndex, correctAnswer){
    console.log("option", option)
    console.log("optionIndex", optionIndex)

    if (optionIndex == correctAnswer) {
        score++
        scoreDisplay.textContent = score
        addResult(questionBox, "Correct!", 'correct')
    } else {
        score--
        scoreDisplay.textContent = score
        addResult(questionBox, "Wrong!", 'wrong')
    }
    clicked.push(option)
    questionButton.disabled = clicked.includes(option)
}

function addResult(questionBox, answer, className) {
    const answerDisplay = questionBox.querySelector('.answer-display')
    answerDisplay.classList.remove('wrong')
    answerDisplay.classList.remove('correct')
    answerDisplay.classList.add(className)
    answerDisplay.textContent = answer
}