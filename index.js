document.getElementById("text").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    this.blur();
  }
});