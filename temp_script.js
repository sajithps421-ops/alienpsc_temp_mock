// 🔥 MAKE FUNCTIONS GLOBAL
window.login = function () {
  const name = document.getElementById("name").value.trim();
  if (!name) {
    alert("Enter name");
    return;
  }
  localStorage.setItem("temp_name", name);
  window.location.href = "temp_exam.html";
};

let lang = "en";
let index = 0;
let score = 0;

const questions = [
  {
    q_en: "Who was the first European to reach Kerala?",
    q_ml: "കേരളത്തിലെത്തിയ ആദ്യ യൂറോപ്യൻ ആര്?",
    options_en: ["Vasco da Gama", "Columbus", "Magellan", "Marco Polo"],
    options_ml: ["വാസ്കോ ഡ ഗാമ", "കൊളംബസ്", "മഗെല്ലൻ", "മാർക്കോ പോളോ"],
    correct: 0
  },
  {
    q_en: "Capital of Kerala?",
    q_ml: "കേരളത്തിന്റെ തലസ്ഥാനം?",
    options_en: ["Kochi", "Thiruvananthapuram", "Kozhikode", "Thrissur"],
    options_ml: ["കൊച്ചി", "തിരുവനന്തപുരം", "കോഴിക്കോട്", "തൃശ്ശൂർ"],
    correct: 1
  }
];

window.loadQuestion = function () {
  const q = questions[index];
  document.getElementById("qText").innerText =
    lang === "en" ? q.q_en : q.q_ml;

  const opts = lang === "en" ? q.options_en : q.options_ml;
  const box = document.getElementById("options");
  box.innerHTML = "";

  opts.forEach((o, i) => {
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
};

window.next = function () {
  const sel = document.querySelector(".option.selected");
  if (!sel) {
    alert("Select answer");
    return;
  }
  if (parseInt(sel.dataset.sel) === questions[index].correct) score++;

  index++;
  if (index >= questions.length) {
    localStorage.setItem("score", score);
    window.location.href = "temp_result.html";
  } else {
    loadQuestion();
  }
};

window.toggleLang = function () {
  lang = lang === "en" ? "ml" : "en";
  loadQuestion();
};

window.goRank = function () {
  window.location.href = "temp_rank.html";
};

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("qText")) loadQuestion();
  if (document.getElementById("scoreText")) {
    document.getElementById("scoreText").innerText =
      "Score : " + (localStorage.getItem("score") || 0);
  }
});

