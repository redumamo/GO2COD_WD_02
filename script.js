const subjects = {
  "data-communication": [
    {
      question:
        "What is the primary function of a router in data communication?",
      options: [
        "To store data",
        "To forward data packets",
        "To encrypt data",
        "To backup data",
      ],
      answer: 1,
    },
    {
      question:
        "Which layer of the OSI model handles data transport reliability?",
      options: [
        "Physical Layer",
        "Network Layer",
        "Transport Layer",
        "Application Layer",
      ],
      answer: 2,
    },
    {
      question: "What is the full form of LAN?",
      options: [
        "Large Area Network",
        "Local Area Network",
        "Logical Area Network",
        "Linear Area Network",
      ],
      answer: 1,
    },
    {
      question: "Which device connects multiple devices within a network?",
      options: ["Router", "Hub", "Modem", "Switch"],
      answer: 3,
    },
    {
      question: "What does IP stand for?",
      options: [
        "Internet Protocol",
        "Internal Processing",
        "Information Packet",
        "Integrated Protocol",
      ],
      answer: 0,
    },
  ],
  programming: [
    {
      question:
        "Which programming language is known as the backbone of the web?",
      options: ["Python", "JavaScript", "Java", "C++"],
      answer: 1,
    },
    {
      question: "What does 'OOP' stand for in programming?",
      options: [
        "Object-Oriented Programming",
        "Open Operational Programming",
        "Overloaded Output Program",
        "Optimized Operating Protocol",
      ],
      answer: 0,
    },
    {
      question: "Which language is used to style web pages?",
      options: ["HTML", "CSS", "Python", "JavaScript"],
      answer: 1,
    },
    {
      question: "What is a variable in programming?",
      options: [
        "A fixed value",
        "A container for storing data",
        "An error handler",
        "A user interface element",
      ],
      answer: 1,
    },
    {
      question: "What does the 'if' statement do?",
      options: [
        "Declares variables",
        "Executes code conditionally",
        "Creates a loop",
        "Defines functions",
      ],
      answer: 1,
    },
  ],
  "cyber-security": [
    {
      question: "What is the primary goal of cybersecurity?",
      options: [
        "Data redundancy",
        "System maintenance",
        "Information protection",
        "Data analysis",
      ],
      answer: 2,
    },
    {
      question: "What does a firewall do?",
      options: [
        "Encrypt data",
        "Detect malware",
        "Monitor traffic",
        "Block unauthorized access",
      ],
      answer: 3,
    },
    {
      question: "Which type of attack involves sending fraudulent emails?",
      options: ["Phishing", "DDoS", "Ransomware", "Trojan"],
      answer: 0,
    },
    {
      question: "What does SSL stand for?",
      options: [
        "Secure Socket Layer",
        "System Security Layer",
        "Secure Software Layer",
        "Software Security Link",
      ],
      answer: 0,
    },
    {
      question: "Which of these is an example of malware?",
      options: ["Firewall", "Antivirus", "Trojan", "VPN"],
      answer: 2,
    },
  ],
  database: [
    {
      question: "What does SQL stand for?",
      options: [
        "Structured Query Language",
        "Sequential Query Logic",
        "Structured Quick Lookup",
        "System Query Language",
      ],
      answer: 0,
    },
    {
      question: "What is a primary key in a database?",
      options: [
        "A unique identifier for a record",
        "A link between two tables",
        "A type of index",
        "A backup mechanism",
      ],
      answer: 0,
    },
    {
      question: "Which type of database organizes data into tables?",
      options: ["Relational", "Hierarchical", "NoSQL", "Object-Oriented"],
      answer: 0,
    },
    {
      question: "What is a foreign key used for?",
      options: [
        "Linking two tables",
        "Encrypting data",
        "Deleting records",
        "Generating IDs",
      ],
      answer: 0,
    },
    {
      question: "What is a query in a database?",
      options: [
        "A request to retrieve data",
        "A method to compress data",
        "A way to delete records",
        "A process to organize data",
      ],
      answer: 0,
    },
  ],
};

const subjectButtons = document.querySelectorAll(".subject-btn");
let currentSubject = "";
let currentQuestionIndex = 0;
let score = 0;

function startQuiz(subject) {
  currentSubject = subject;
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  const subjectQuestions = subjects[currentSubject];
  const currentQuestion = subjectQuestions[currentQuestionIndex];

  const quizContainer = document.querySelector(".main-section");
  quizContainer.innerHTML = `
        <div class="question-container">
            <h2>${currentQuestion.question}</h2>
            <div class="options-grid">
                ${currentQuestion.options
                  .map(
                    (option, index) =>
                      `<button class="option-btn" onclick="submitAnswer(${index})">${option}</button>`
                  )
                  .join("")}
            </div>
        </div>
    `;
}

function submitAnswer(selectedOption) {
  const subjectQuestions = subjects[currentSubject];
  const currentQuestion = subjectQuestions[currentQuestionIndex];

  if (selectedOption === currentQuestion.answer) {
    score++;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < subjectQuestions.length) {
    showQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  const quizContainer = document.querySelector(".main-section");
  quizContainer.innerHTML = `
        <div class="result-container">
            <h2>Quiz Completed!</h2>
            <p>Your score is ${score}/${subjects[currentSubject].length}</p>
            <button onclick="location.reload()">Back to Home</button>
        </div>
    `;
}


subjectButtons.forEach((button) => {
  button.addEventListener("click", () => {
    startQuiz(button.dataset.subject);
  });
});
