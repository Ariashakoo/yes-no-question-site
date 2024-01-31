const questions = [
    'Do you prefer a race to another race?',
    'Are you willing to do a sacrifice for greater things?(like killing)',
    'Do you beleive in equality between all the people of a community?',
    'Do you prefer a religion to another?',
    'Do you want to increase your land ownings?',
    'Do you like to make all the people know about your culture?',
    'Do you like to make laws?',
    'Do you prefer to go the same way as your ancestors did?',
    'Do you learn from your previous mistakes?',
    'Would you do anything to make yourself happy?',
    // Add more questions here
];

window.onload = function () {
    const quizForm = document.getElementById('quiz-form');

    for (let i = 0; i < questions.length; i++) {
        const questionContainer = document.createElement('div');
        questionContainer.innerHTML = `
            <p>${questions[i]}</p>
            <label>
                <input type="radio" name="question${i}" value="yes" required> Yes
            </label>
            <label>
                <input type="radio" name="question${i}" value="no" required> No
            </label>
        `;
        quizForm.appendChild(questionContainer);
    }
}

function calculateResult() {
    const answers = [];
    const quizForm = document.getElementById('quiz-form');

    for (let i = 0; i < questions.length; i++) {
        const answer = quizForm['question' + i].value === 'yes';
        answers.push(answer);
    }

    const result = calculateCharacter(answers);
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = `<h2>Your character is: ${result}</h2>`;
}

function calculateCharacter(answers) {
    // Write your logic here to calculate the character based on the answers

    // Example logic: If first two answers are true, return 'Harry Potter'
    if (answers[0] && answers[1] && answers[3]) {
        return 'Adolf Hitler';
    }
    else if (answers[0] && answers[1] && !answers[3]) {
        return 'Mao Zedong';
    }
    else if (answers[0] && !answers[1] && answers[4]) {
        return 'Xerxes';
    }
    else if (answers[0] && !answers[1] && !answers[4]) {
        return 'Sadegh hedayat';
    }
    else if (!answers[0] && answers[2] && answers[5] && answers[6]) {
        return 'Cyrus the Great';
    }
    else if (!answers[0] && answers[2] && answers[5] && !answers[6] && answers[7]) {
        return 'Cambyses';
    }
    else if (!answers[0] && answers[2] && answers[5] && !answers[6] && !answers[7]) {
        return 'Ferdowsi';
    }
    else if (!answers[0] && answers[2] && !answers[5] && answers[8]) {
        return 'Anthony of Rome';
    }
    else if (!answers[0] && answers[2] && !answers[5] && !answers[8]) {
        return 'Louis the Pious';
    }
    else if (!answers[0] && !answers[2] && answers[9]) {
        return 'Joseph Stalin';
    }
    else if (!answers[0] && !answers[2] && !answers[9]) {
        return 'Osama bin laden';
    }

    else
        // Add more character logic here

        // If no character matches the answers, return 'Unknown'
        return 'Unknown';
}
