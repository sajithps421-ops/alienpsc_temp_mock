console.log("TEMP SCRIPT LOADED");

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

  localStorage.setItem("temp_name", name);
  window.location.href = "temp_dashboard.html";
};


// ---------------- LEVEL SELECT ----------------
window.selectLevel = function(level) {
  console.log("Selected Level:", level);

  localStorage.setItem("temp_level", level);

  if(level === "degree"){
    window.location.href = "temp_degree_list.html";
  } else {
    window.location.href = "temp_tenth_list.html";
  }
};


// ---------------- MOCK SELECT ----------------
window.startExam = function(mockNumber){
  localStorage.setItem("mock_id", mockNumber);
  window.location.href = "temp_exam.html";
};


// ---------------- BACK BUTTON ----------------
window.goBack = function(){
  window.location.href = "temp_dashboard.html";
};

