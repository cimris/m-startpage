//My Scripts
//Random Image Load
//There Must Be A Better Way To Set Up This Array, Apparently This Requires Server Side Knowledge
function imageSelect() {
  const imgArea = document.getElementsByClassName(".gif");
  const possibleImage = [
    "images/dark-souls-solaire.gif",
    "images/diapidated-streets.gif",
    "images/earthbound-moonshen.gif",
    "images/ffvii-mythril-cave-moonshen.gif",
    "images/flooded-city.gif",
    "images/kirokaze-ashes.gif",
    "images/kirokaze-burning-eye.gif",
    "images/kirokaze-hangar.gif",
    "images/kirokaze-lonely-nights.gif",
    "images/kirokaze-midnight-metal.gif",
    "images/kirokaze-office-day.gif",
    "images/kirokaze-photo-group.gif",
    "images/kirokaze-pilotlink.gif",
    "images/kirokaze-rainandmetal.gif",
    "images/kirokaze-ronin.gif",
    "images/kirokaze-signs.gif",
    "images/kirokaze-standpoint.gif",
    "images/kirokaze-stillon.gif",
    "images/sotn-moonshen.gif",
    "images/supermetroid-moonshen.gif",
    "images/abiogenesis.gif",
    "images/burundi.gif",
    "images/neptune-eclipse.gif",
    "images/turnthepage.gif",
    "images/unconsciousness.gif",
    "images/stargazing.gif",
  ];
  const imgSrc =
    possibleImage[Math.floor(Math.random() * possibleImage.length)];
  document.getElementById("drawn-image").src = imgSrc;
}

imageSelect();
//Key Press Sends User To Website
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
    case "b":
      window.open(chan.href, "_self");
      break;
    case "r":
      window.open(reddit.href, "_self");
      break;
    case "h":
      window.open(hackernews.href, "_self");
      break;
    case "y":
      window.open(youtube.href, "_self");
      break;
    case "n":
      window.open(netflix.href, "_self");
      break;
    case "x":
      window.open(plex.href, "_self");
      break;
    case "m":
      window.open(whatbox.href, "_self");
      break;
    case "t":
      window.open(twitch.href, "_self");
      break;
    default:
      console.log(event.key);
      break;
  }
});
