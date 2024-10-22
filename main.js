const toggleLampBtn = document.getElementById("toggleLampBtn");

const toggleLamp = () => {
  const lamps = document.querySelectorAll("img.lamp");

  lamps.forEach((lamp) => (lamp.hidden = !lamp.hidden));

  const isTurnOn = toggleLampBtn.getAttribute("data-turn-on") === "true";

  const attr = isTurnOn ? "false" : "true";

  toggleLampBtn.setAttribute("data-turn-on", attr);

  toggleLampBtn.innerText = isTurnOn ? "Spegni" : "Accendi";
};

toggleLampBtn.addEventListener("click", toggleLamp);
