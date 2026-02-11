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

  // ---------------- GO BACK ----------------
  window.goBack = function () {
    window.history.back();
  };

});

