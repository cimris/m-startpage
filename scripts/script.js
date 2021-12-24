//My Scripts
window.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "p":
      window.open(protonmail.href, "_self");
      break;
    case "g":
      window.open(gmail.href, "_self");
      break;
    case "P":
      window.open(protondrive.href, "_self");
      break;
    case "G":
      window.open(gdrive.href, "_self");
      break;
    default:
      console.log(event.key);
      break;
  }
});
