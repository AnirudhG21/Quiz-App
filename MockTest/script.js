// Handle signup form submission
document.getElementById('signupForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const phone = document.getElementById('signupPhone').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    const response = await fetch('backend/signup.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, email, password })
    });

    const data = await response.json();
    document.getElementById('signupError').innerText = data.message;
});

// Handle login form submission
document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const response = await fetch('backend/login.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    if (data.success) {
        window.location.href = 'instructions.html'; // Redirect to the index page (home page)
    } else {
        document.getElementById('loginError').innerText = data.message;
    }
});

// Mock Test Functionality
let timer;
let timeLeft = 15 * 60; // 15 minutes in seconds

async function fetchQuestions() {
    try {
        const response = await fetch('backend/fetch_questions.php');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const questions = await response.json();
        return questions;
    } catch (error) {
        console.error('Error fetching questions:', error);
        alert('Failed to load questions. Please try again later.');
    }
}

async function startTest() {
    const questions = await fetchQuestions();
    const container = document.getElementById('questionsContainer');

    // Clear the container before adding new questions
    container.innerHTML = '';

    questions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.innerHTML = `
            <h3>${index + 1}. ${question.question}</h3>
            <label><input type="radio" name="question${index}" value="A">${question.option_a}</label><br>
            <label><input type="radio" name="question${index}" value="B">${question.option_b}</label><br>
            <label><input type="radio" name="question${index}" value="C">${question.option_c}</label><br>
            <label><input type="radio" name="question${index}" value="D">${question.option_d}</label><br>
        `;
        container.appendChild(questionDiv);
    });

    startTimer();
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        document.getElementById('timeLeft').innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            submitTest();
        }
    }, 1000);
}

// Handle test form submission
document.getElementById('testForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    await submitTest();
});

async function submitTest() {
    clearInterval(timer);
    const formData = new FormData(document.getElementById('testForm'));
    const responses = {};

    formData.forEach((value, key) => {
        responses[key] = value;
    });

    const response = await fetch('backend/submit_test.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(responses)
    });

    const data = await response.json();

    // Redirect to results page with the score as a URL parameter
    window.location.href = `results.html?score=${data.score}`;
}

// Start the test when the page loads
if (document.getElementById('questionsContainer')) {
    startTest();
}

// Start Test Button click event
document.getElementById('startTestButton')?.addEventListener('click', () => {
    window.location.href = 'test.html'; // Redirect to the test page
});

// Handle restart test button click
document.getElementById('restartTestButton')?.addEventListener('click', () => {
    window.location.reload(); // Reload the page to restart the test
});
