(function(clock) {
  function setTime() {
    var now = new Date(),
        time = (Math.round(now.getMilliseconds() / 250) * 0.25 +
                now.getSeconds() +
                now.getMinutes() * 60 +
                now.getHours() * 3600) % 43200;

    clock.style.setProperty('--time', time);
  }

  setTime(); // Set time initally on page startup
  setInterval(setTime, 250);
}(document.querySelector('.clock')));
