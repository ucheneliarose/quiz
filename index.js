document.addEventListener("DOMContentLoaded", function () {
    const quizContainer = document.getElementById("quiz-container");
    const submitBtn = document.getElementById("submit-btn");
    const resultsContainer = document.getElementById("results-container");

    const questions = [
        {
            question: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "Rome"],
            answer: "Paris"
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Mars", "Jupiter", "Venus", "Mercury"],
            answer: "Mars"
        },
        {
            question: "Who wrote 'Romeo and Juliet'?",
            options: ["Charles Dickens", "Jane Austen", "William Shakespeare", "Mark Twain"],
            answer: "William Shakespeare"
        }
    ];

    submitBtn.addEventListener("click", showResults);

    function buildQuiz() {
        questions.forEach((question, index) => {
            const questionContainer = document.createElement("div");
            questionContainer.classList.add("question-container");

            questionContainer.innerHTML += `<p>${index + 1}. ${question.question}</p>`;

            question.options.forEach((option, i) => {
                questionContainer.innerHTML += `
                    <input type="radio" name="question${index}" value="${option}" id="q${index}o${i}">
                    <label for="q${index}o${i}">${option}</label>
                `;
            });

            quizContainer.appendChild(questionContainer);
        });
    }

    function showResults() {
        let score = 0;

        questions.forEach((question, index) => {
            const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);

            if (selectedOption) {
                const userAnswer = selectedOption.value;

                if (userAnswer === question.answer) {
                    score++;
                    selectedOption.parentElement.classList.add("correct");
                } else {
                    selectedOption.parentElement.classList.add("incorrect");
                }
            }
        });

        resultsContainer.innerHTML = `Your score: ${score} out of