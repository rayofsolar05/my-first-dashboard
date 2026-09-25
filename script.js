function updateTime() {
  const now = new Date();

  // Yangon (UTC+6:30)
  let yangon = new Date(now.getTime() + (6.5 - now.getTimezoneOffset()/60) * 3600 * 1000);
  document.getElementById("time-yangon").textContent = yangon.toLocaleTimeString();

  // Chiang Mai (UTC+7)
  let chiangmai = new Date(now.getTime() + (7 - now.getTimezoneOffset()/60) * 3600 * 1000);
  document.getElementById("time-chiangmai").textContent = chiangmai.toLocaleTimeString();

  // Seoul (UTC+9)
  let seoul = new Date(now.getTime() + (9 - now.getTimezoneOffset()/60) * 3600 * 1000);
  document.getElementById("time-seoul").textContent = seoul.toLocaleTimeString();
}

setInterval(updateTime, 1000);
updateTime();
