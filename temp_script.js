// ---------------- LOGIN ----------------
window.login = function () {
  const nameInput = document.getElementById("name");

  if (!nameInput) {
    console.error("Name input not found");
    return;
  }

  const name = nameInput.value.trim();

  if (!name) {
    alert("Enter your name");
    return;
  }
  function startExam(mockNumber) {
    localStorage.setItem("mock_id", mockNumber);
    window.location.href = "temp_exam.html";
}

function goBack() {
    window.location.href = "temp_dashboard.html";
}

  localStorage.setItem("temp_name", name);
  window.location.href = "temp_dashboard.html";
};
