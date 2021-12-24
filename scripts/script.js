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
    case "i":
      window.open(github.href, "_self");
      break;
    case "d":
      window.open(devdocs.href, "_self");
      break;
    case "o":
      window.open(theodinproject.href, "_self");
      break;
    case "f":
      window.open(freecodecamp.href, "_self");
      break;
    case "c":
      window.open(chan.href, "_self");
      break;
    case "r":
      window.open(reddit.href, "_self");
      break;
    case "h":
      this.window.open(hackernews.href, "_self");
      break;
    default:
      console.log(event.key);
      break;
  }
});
