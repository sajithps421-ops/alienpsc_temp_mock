console.log("TEMP SCRIPT LOADED");

document.addEventListener("DOMContentLoaded", function () {

  console.log("DOM READY");

  // ---------------- LOGIN ----------------
  window.login = function () {
    const nameInput = document.getElementById("name");

    if (!nameInput) return;

    const name = nameInput.value.trim();

    if (!name) {
      alert("Enter your name");
      return;
    }

    localStorage.setItem("temp_name", name);
    window.location.href = "temp_dashboard.html";
  };

  // ---------------- SELECT LEVEL ----------------
  window.selectLevel = function (level) {
    localStorage.setItem("temp_level", level);

    if (level === "degree") {
      window.location.href = "temp_degree_list.html";
    } else {
      window.location.href = "temp_tenth_list.html";
    }
  };

  // ---------------- START EXAM ----------------
  window.startExam = function (mockNumber) {
    localStorage.setItem("mock_id", mockNumber);
    window.location.href = "temp_exam.html";
  };
// ---------------- SAMPLE QUESTIONS ----------------
  const questions = [
    {
      question: "What is the capital of India?",
      options: ["Mumbai", "Delhi", "Chennai", "Kolkata"],
      answer: 1
    },
    {
      question: "Who is known as Father of Indian Constitution?",
      options: ["Nehru", "Gandhi", "Ambedkar", "Rajendra Prasad"],
      answer: 2
    }
  ];

  let currentQuestion = 0;
  let selectedAnswer = null;

  function loadQuestion() {
    const questionText = document.getElementById("questionText");
    const optionsContainer = document.getElementById("optionsContainer");
    const questionNumber = document.getElementById("questionNumber");

    if (!questionText) return; // not exam page

    const q = questions[currentQuestion];

    questionNumber.innerText = "Question " + (currentQuestion + 1);
    questionText.innerText = q.question;

    optionsContainer.innerHTML = "";

    q.options.forEach((option, index) => {
      const div = document.createElement("div");
      div.className = "option";
      div.innerText = option;

      div.onclick = function () {
        selectedAnswer = index;

        document.querySelectorAll(".option").forEach(o =>
          o.classList.remove("selected")
        );

        div.classList.add("selected");
      };

      optionsContainer.appendChild(div);
    });
  }

  window.nextQuestion = function () {
    if (currentQuestion < questions.length - 1) {
      currentQuestion++;
      loadQuestion();
    } else {
      alert("Exam Finished!");
      window.location.href = "temp_result.html";
    }
  };

  // Auto load if exam page
  loadQuestion();


  // ---------------- GO BACK ----------------
  window.goBack = function () {
    window.history.back();
  };

});

