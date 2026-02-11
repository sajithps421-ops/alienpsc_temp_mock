// ---------------- LOGIN ----------------
window.login = function () {
  const name = document.getElementById("name").value.trim();
  if (!name) {
    alert("Enter name");
    return;
  }

  localStorage.setItem("temp_name", name);
  window.location.href = "temp_dashboard.html";
};

// ---------------- LEVEL SELECTION ----------------
window.selectLevel = function (level) {
  localStorage.setItem("temp_level", level);
  window.location.href = "temp_mock_list.html";
};

// ---------------- MOCK LIST PAGE ----------------
document.addEventListener("DOMContentLoaded", () => {

  if (document.getElementById("mockList")) {

    const level = localStorage.getItem("temp_level");
    const title = document.getElementById("mockTitle");
    const list = document.getElementById("mockList");

    title.innerText =
      level === "degree"
        ? "Degree Level Mocks"
        : "10th & LGS Level Mocks";

    // Demo 3 mock tests
    for (let i = 1; i <= 3; i++) {
      const btn = document.createElement("button");
      btn.innerText = "Mock Test " + i;
      btn.style.marginBottom = "10px";
      btn.onclick = () => startMock(i);
      list.appendChild(btn);
    }
  }

  // ---------------- EXAM PAGE LOAD ----------------
  if (document.getElementById("examTitle")) {
    const mockNo = localStorage.getItem("temp_mock_no");
    const level = localStorage.getItem("temp_level");

    document.getElementById("examTitle").innerText =
      (level === "degree" ? "Degree" : "10th & LGS")
      + " - Mock Test " + mockNo;

    loadQuestion();
  }

  // ---------------- RESULT PAGE ----------------
  if (document.getElementById("scoreText")) {
    document.getElementById("scoreText").innerText =
      "Score : " + (localStorage.getItem("score") || 0);
  }
});

// ---------------- START MOCK ----------------
window.startMock = function (mockNo) {
  localStorage.setItem("temp_mock_no", mockNo);
  localStorage.setItem("score", 0);
  index = 0;
  score = 0;
  window.location.href = "temp_exam.html";
};

window.goBack = function () {
  window.location.href = "temp_dashboard.html";
};

// ---------------- EXAM QUESTIONS ----------------
let index = 0;
let score = 0;

const questions = [
  {
    q: "Who was the first European to reach Kerala?",
    options: ["Vasco da Gama", "Columbus", "Magellan", "Marco Polo"],
    correct: 0
  },
  {
    q: "Capital of Kerala?",
    options: ["Kochi", "Thiruvananthapuram", "Kozhikode", "Thrissur"],
    correct: 1
  }
];

function loadQuestion() {
  const q = questions[index];
  document.getElementById("qText").innerText = q.q;

  const box = document.getElementById("options");
  box.innerHTML = "";

  q.options.forEach((o, i) => {
    const d = document.createElement("div");
    d.className = "option";
    d.innerText = o;
    d.onclick = () => {
      document.querySelectorAll(".option")
        .forEach(x => x.classList.remove("selected"));
      d.classList.add("selected");
      d.dataset.sel = i;
    };
    box.appendChild(d);
  });
}

window.next = function () {
  const sel = document.querySelector(".option.selected");
  if (!sel) {
    alert("Select answer");
    return;
  }

  if (parseInt(sel.dataset.sel) === questions[index].correct)
    score++;

  index++;

  if (index >= questions.length) {
    localStorage.setItem("score", score);
    window.location.href = "temp_result.html";
  } else {
    loadQuestion();
  }
};

window.goRank = function () {
  window.location.href = "temp_rank.html";
};
