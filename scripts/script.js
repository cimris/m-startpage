//My Scripts
window.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "p":
      window.open(protonmail.href, "_self");
      break;
    default:
      this.alert("Invalid input.");
      break;
  }
});
