    const quizForm = document.querySelector('#quiz-form');
    quizForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let score = 0;
    const answers = ['a', 'a'];
    const userAnswers = [quizForm.q1.value, quizForm.q2.value];
    userAnswers.forEach((answer, index) => {
        if (answer === answers[index]) {
        score++;
        }
    });
    alert(`You scored ${score}/${answers.length}`);
    });