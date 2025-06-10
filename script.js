window.addEventListener("DOMContentLoaded", () => {
  const overallLevelEl = document.getElementById("overallLevel");

  // Load levels from localStorage for each quiz; default to 0 if not set
  const monthsLevel = parseInt(localStorage.getItem("months_level")) || 0;
  const subjectsLevel = parseInt(localStorage.getItem("subjects_level")) || 0;

  // Calculate overall level as sum of levels from quizzes
  const overallLevel = monthsLevel + subjectsLevel;

  // Display the overall level
  overallLevelEl.textContent = `Overall Level: ${overallLevel}`;
});
