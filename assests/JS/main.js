document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const dropdownMenu = document.getElementById("dropdownMenu");

  // Click event to toggle the dropdown menu visibility
  hamburger.addEventListener("click", function () {
    dropdownMenu.classList.toggle("active");
  });

  // Optionally, click outside to close dropdown
  document.addEventListener("click", function (event) {
    if (
      !hamburger.contains(event.target) &&
      !dropdownMenu.contains(event.target)
    ) {
      dropdownMenu.classList.remove("active");
    }
  });
});
