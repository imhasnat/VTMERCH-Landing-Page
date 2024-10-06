document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const dropdownMenu = document.getElementById("dropdownMenu");

  hamburger.addEventListener("click", function () {
    dropdownMenu.classList.toggle("active");
  });

  document.addEventListener("click", function (event) {
    if (
      !hamburger.contains(event.target) &&
      !dropdownMenu.contains(event.target)
    ) {
      dropdownMenu.classList.remove("active");
    }
  });
});
