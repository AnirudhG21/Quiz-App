# Mock Test Platform

The **Mock Test Platform** is a web-based application that allows users to take mock tests online. It includes features like user registration, login, a countdown timer during the test, and automatic scoring after the test submission.

## Features

- **User Signup and Login**: Users can register and log in to their accounts.
- **Google Sign-In**: Users can log in using their Google account.
- **Test Instructions**: After login, users are directed to a test instructions page before starting the test.
- **Single Question Per Page**: Only one question is shown on the screen at a time.
- **Time Limit**: A countdown timer is displayed during the test.
- **Automatic Scoring**: After test submission, the user's score is displayed on a results page.
- **Responsive Design**: The platform is fully responsive and works on all device sizes.
  
## Technologies Used

### Frontend:
- **HTML5**
- **CSS3**
- **JavaScript (Vanilla JS)**
  
### Backend:
- **PHP** (using XAMPP)
- **MySQL** for storing user data and test questions
  
### Libraries/Frameworks:
- **Google Fonts**
- **Fetch API** for asynchronous HTTP requests
- **Node.js** for local development (optional)
  
### Tools:
- **XAMPP**: For local backend development
- **MySQL**: To store user details and test questions

## Getting Started

### Prerequisites

- XAMPP or any PHP and MySQL server installed.
- Modern web browser.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/mock-test-platform.git
   cd mock-test-platform
Set up the MySQL database:

Import the questions.sql file into your MySQL database to create the questions table and insert sample questions.
You can do this via PHPMyAdmin or the MySQL command line:
CREATE DATABASE mock_test_platform;
USE mock_test_platform;
SOURCE /path/to/questions.sql;
Set up XAMPP:

Place your project folder inside htdocs (e.g., C:\xampp\htdocs\mock-test-platform).
Start Apache and MySQL in the XAMPP Control Panel.
Configure Database:

In backend/db.php, update the database connection settings:
$host = 'localhost';
$db_name = 'mock_test_platform';
$username = 'root';
$password = '';
Run the Project:

Open http://localhost/mock-test-platform/ in your browser.
File Structure
mock-test-platform/
│
├── backend/               # Backend PHP scripts
│   ├── db.php             # Database connection file
│   ├── login.php          # User login script
│   ├── signup.php         # User signup script
│   ├── fetch_questions.php# Fetch questions for the test
│   ├── submit_test.php    # Handle test submission
│
├── sql/                   # SQL files
│   ├── questions.sql      # SQL script to insert questions into the database
│
├── css/                   # Stylesheets
│   └── style.css          # Main stylesheet
│
├── js/                    # JavaScript files
│   └── script.js          # Main JavaScript file
│
├── images/                # Image assets (e.g., logo)
├── index.html             # Home page
├── login.html             # Login page
├── signup.html            # Signup page
├── instructions.html      # Instructions page
├── test.html              # Test page
└── result.html            # Results page
How It Works
1. User Registration & Login:
Users sign up using their email, phone, and password. Data is stored in a MySQL database.
Users can also log in using Google authentication.
2. Test Instructions:
After logging in, users are directed to a page with test instructions. From here, they can proceed to the actual test.
3. Test Taking:
Questions are fetched dynamically from the backend (MySQL database) and displayed one by one.
A timer is shown during the test. If time runs out, the test is automatically submitted.
4. Test Submission & Results:
After the test is submitted, answers are evaluated, and the user is shown their score on the results page.
Future Enhancements
Question Randomization: Randomize the order of questions to prevent cheating.
Leaderboard: Display top scorers to encourage competition.
Test Review: Allow users to review their answers after submission.
Contributing
Feel free to submit issues and pull requests to contribute to the project.

License
This project is licensed under the MIT License - see the LICENSE file for details.

This `README.md` provides a clear overview of the project, instructions for setup, and details about the technologies used. It can be adjusted based on additional features or changes made to the project.
