const toggleBtn = document.getElementById("open-btn");
const container = document.getElementById("links-container");

toggleBtn.addEventListener("click", () => {
  if (container.style.visibility === "hidden") {
    container.style.visibility = "visible";
  } else {
    container.style.visibility = "hidden";
  }
});
