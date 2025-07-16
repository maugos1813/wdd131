// Footer info
const yearSpan = document.getElementById("year");
const lastModifiedSpan = document.getElementById("lastModified");

yearSpan.textContent = new Date().getFullYear();
lastModifiedSpan.textContent = document.lastModified;

// Weather Wind Chill
const temp = parseFloat(document.getElementById("temp").textContent);
const speed = parseFloat(document.getElementById("speed").textContent);
const chillSpan = document.getElementById("chill");

function calculateWindChill(t, s) {
  return (
    35.74 +
    0.6215 * t -
    35.75 * Math.pow(s, 0.16) +
    0.4275 * t * Math.pow(s, 0.16)
  ).toFixed(1);
}

if (temp <= 50 && speed > 3) {
  chillSpan.textContent = `${calculateWindChill(temp, speed)} °F`;
} else {
  chillSpan.textContent = "N/A";
}
