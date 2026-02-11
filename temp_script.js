console.log("TEMP SCRIPT LOADED");

// Wait until page loads
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM READY");

  // LOGIN FUNCTION
  window.login = function () {
    const nameInput = document.getElementById("name");

    if (!nameInput) {
      alert("Input not found");
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

  // SELECT LEVEL FUNCTION
  window.selectLevel = function (level) {
    localStorage.setItem("temp_level", level);

    if (level === "degree") {
      window.location.href = "temp_degree_list.html";
    } else {
      window.location.href = "temp_tenth_list.html";
    }
  };

});

