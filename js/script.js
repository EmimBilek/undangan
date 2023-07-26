var trigger = false;
window.addEventListener("scroll", function () {
  var button = document.getElementById("toTopButton");
  if (window.scrollY > 600) {
    // Adjust the scroll position where the button should appear
    button.style.animation = "myAnimation 0.5s ease-out forwards";
    trigger = true;
    console.log(trigger);
    // Show the button
  } else if (window.scrollY <= 600 && trigger) {
    // Hide the button
    button.style.animation = "myAnimation2 0.5s ease-in forwards";
  }
});

var audio = document.getElementById("background-music");
var playPauseButton = document.getElementById("play-pause-button");
var playIcon = document.getElementById("play-icon");
var pauseIcon = document.getElementById("pause-icon");

playPauseButton.addEventListener("click", function() {
  if (audio.paused) {
    audio.play();
    playIcon.style.display = "none";
    pauseIcon.style.display = "inline";
  } else {
    audio.pause();
    pauseIcon.style.display = "none";
    playIcon.style.display = "inline";
  }
});


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

document.getElementById("toTopButton").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// function handleScroll() {
//   var scrollY = window.scrollY;
//   console.log(scrollY); // You can do whatever you want with the scrollY value here
// }

// window.onbeforeunload = function () {
//   window.scrollTo(0, 0);
// };

// Attach the scroll event listener
// window.addEventListener("scroll", handleScroll);

const countdownDate = new Date("2023-9-11").getTime();
const countdownDate2 = new Date("2023-9-13").getTime();

// Update the countdown every second
const countdownTimer = setInterval(() => {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the time remaining
  const timeRemaining = countdownDate - now;

  // Calculate the days, hours, minutes, and seconds
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById(
    "countdown"
  ).innerHTML = `<span id="waktu">${days}</span>d <span id="waktu">${hours}</span>h <span id="waktu">${minutes}</span>m <span id="waktu">${seconds}</span>s`;

  // If the countdown is finished, display a message
  if (timeRemaining < 0) {
    clearInterval(countdownTimer);
    document.getElementById("countdown").innerHTML = "Countdown is finished!";
  }
}, 1000);

const countdownTimer2 = setInterval(() => {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the time remaining
  const timeRemaining = countdownDate2 - now;

  // Calculate the days, hours, minutes, and seconds
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById(
    "countdown2"
  ).innerHTML = `<span id="waktu">${days}</span>d <span id="waktu">${hours}</span>h <span id="waktu">${minutes}</span>m <span id="waktu">${seconds}</span>s`;

  // If the countdown2 is finished, display a message
  if (timeRemaining < 0) {
    clearInterval(countdown2Timer);
    document.getElementById("countdown2").innerHTML = "Countdown is finished!";
  }
}, 1000);
