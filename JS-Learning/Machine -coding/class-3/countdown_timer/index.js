let borderFlowInterval = null;
let borderStep = 0;

const borderColors = [
  "rgb(75,139,207)", // top
  "#76c893", // right
  "#a594f9", // bottom
  "#dd2d4a", // left
];

const btnStart = document.querySelector("#start");
const btnPause = document.querySelector("#pause");
const btnContinue = document.querySelector("#continue");
const btnReset = document.querySelector("#reset");
const hrsInput = document.querySelector("#hrs");
const minsInput = document.querySelector("#mins");
const secsInput = document.querySelector("#secs");
const container = document.querySelector(".container");
const motivations = document.querySelector(".texts");
const musicStart = document.querySelector(".music_start");
const musicStop = document.querySelector(".music_stop");
const bgMusic = document.querySelector("#bgMusic");
const mainHeading = document.querySelector("#main_heading");
let saveTimeLeft = 0;
let counterId;
let startInterval;
const texts = [
  "Believe in yourself 💪",
  "Small steps every day 🚶‍♂️",
  "Consistency beats talent 🔥",
  "Don’t stop until you’re proud 😌",
  "Hard work always pays off 💼",
  "Dream big, act bigger 🚀",
  "Focus on progress, not perfection 🎯",
  "Your future needs you today ⏳",
  "Success is built daily 🧱",
  "You are stronger than you think ⚡",
];
const musicList = [
  "./music/start.mp3",
  "./music/music1.mp3",
  "./music/music2.mp3",
  "./music/music3.mp3",
  "./music/music4.mp3",
  "./music/music5.mp3",
  "./music/music6.mp3",
  "./music/end.mp3",
];
let currentMusicIndex = 0;
let musicIntervalId;
const textEl = document.querySelector(".texts");
let index = 0;
const divider1 = document.querySelector(".divider1_input");
const divider2 = document.querySelector(".divider2_input");
btnStart.addEventListener("click", () => {
  // validation,transformation
  const mins = parseInt(minsInput.value) || 0;
  const hrs = parseInt(hrsInput.value) || 0;
  const secs = parseInt(secsInput.value) || 0;
  const result = validateInputs(mins, hrs, secs);
  if (result == false) {
    return;
  }
  const { transformhrs, transformmins, transformsecs } = transformInputs(
    mins,
    hrs,
    secs,
  );
  const totalTimeInSeconds =
    transformhrs * 60 * 60 + transformmins * 60 + transformsecs;
  timer(totalTimeInSeconds);
  btnStart.style.display = "none";
  btnPause.style.display = "block";
  container.style.borderColor = "rgb(75, 139, 207)";
  container.style.boxShadow = "0 0 20px rgba(75,139,207,0.7)";
  defineInterval();
  motivations.style.boxShadow = `
  0 0 5px   rgb(75, 139, 207),
  0 0 15px  rgb(75, 139, 207),
  0 0 30px  rgb(75, 139, 207),
  0 0 60px  rgb(75, 139, 207)
`;
  motivations.style.color = "rgb(75, 139, 207)";
  hrsInput.style.color = "rgb(75, 139, 207)";
  minsInput.style.color = "rgb(75, 139, 207)";
  secsInput.style.color = "rgb(75, 139, 207)";
  divider1.style.color = "rgb(75, 139, 207)";
  divider2.style.color = "rgb(75, 139, 207)";
  startBorderFlow();
});
btnPause.addEventListener("click", () => {
  stopBorderFlow();
  btnPause.style.display = "none";
  btnContinue.style.display = "block";
  container.style.borderColor = "#a594f9";
  container.style.boxShadow = "0 0 20px rgba(165,148,249,0.7)";

  motivations.style.boxShadow = `
  0 0 5px   #a594f9,
  0 0 15px  #a594f9,
  0 0 30px  #a594f9,
  0 0 60px  #a594f9
`;
  motivations.style.color = "#a594f9";
  hrsInput.style.color = "#a594f9";
  minsInput.style.color = "#a594f9";
  secsInput.style.color = "#a594f9";
  divider1.style.color = "#a594f9";
  divider2.style.color = "#a594f9";
  clearInterval(counterId);
});

btnContinue.addEventListener("click", () => {
  timer(saveTimeLeft);
  startBorderFlow();
  btnContinue.style.display = "none";
  btnPause.style.display = "block";
  container.style.borderColor = "#76c893";
  container.style.boxShadow = "0 0 20px rgba(118,200,147,0.7)";
  motivations.style.boxShadow = `
  0 0 5px   #76c893,
  0 0 15px  #76c893,
  0 0 30px  #76c893,
  0 0 60px  #76c893
`;

  motivations.style.color = "#76c893";
  hrsInput.style.color = "#76c893";
  minsInput.style.color = "#76c893";
  secsInput.style.color = "#76c893";
  divider1.style.color = "#76c893";
  divider2.style.color = "#76c893";
});
btnReset.addEventListener("click", () => {
  saveTimeLeft = 0;
  clearInterval(counterId);
  stopBorderFlow();
  currentMusicIndex = 0;
  secsInput.value = "00";
  minsInput.value = "00";
  hrsInput.value = "00";
  btnContinue.style.display = "none";
  btnPause.style.display = "none";
  btnStart.style.display = "block";
  btnReset.style.display = "block";
  clearInterval(startInterval);
  minsInput.style.color = "#dd2d4a";
  secsInput.style.color = "#dd2d4a";
  hrsInput.style.color = "#dd2d4a";
  container.style.boxShadow = "0 0 20px rgba(221,45,74,0.7)";
  motivations.textContent = "";
  divider1.style.color = "#dd2d4a";
  divider2.style.color = "#dd2d4a";
  musicStart.style.display = "block";
  musicStop.style.display = "none";
  isMusicMuted = false;
  stopMusicRotation();
  musicIntervalId = null;
  bgMusic.pause();
  bgMusic.currentTime = 0;
  bgMusic.src = "";
});
musicStart.addEventListener("click", () => {
  if (counterId) {
     startBorderFlow();
    isMusicMuted = false;
    musicStart.style.display = "none";
    musicStop.style.display = "block";
    motivations.style.borderColor = "red";
    motivations.style.boxShadow = `
  0 0 5px   #76c893,
  0 0 15px  #76c893,
  0 0 30px  #76c893,
  0 0 60px  rgba(118, 200, 147, 0.9)
`;

    motivations.style.color = "#76c893";
    container.style.borderColor = "#76c893";
    container.style.boxShadow = "0 0 20px #76c893";
    hrsInput.style.color = "#76c893";
    minsInput.style.color = "#76c893";
    secsInput.style.color = "#76c893";
    divider1.style.color = "#76c893";
    divider2.style.color = "#76c893";
    startMusicRotation();
  }
});
musicStop.addEventListener("click", () => {
  if (counterId) {
    stopBorderFlow();
    musicStart.style.display = "block";
    musicStop.style.display = "none";
    motivations.style.borderColor = "red";
    motivations.style.boxShadow = `
  0 0 5px   red,
  0 0 15px  red,
  0 0 30px  red,
  0 0 60px  red
`;
    motivations.style.color = "red";
    container.style.borderColor = "red";
    container.style.boxShadow = "0 0 20px red";
    hrsInput.style.color = "red";
    minsInput.style.color = "red";
    secsInput.style.color = "red";
    divider1.style.color = "red";
    divider2.style.color = "red";

    stopMusicRotation();
  }
});

container.addEventListener("mouseenter", () => {
  container.style.borderBottomColor = "#76c893";
  container.style.boxShadow = "0 12px 20px rgba(118,200,147,0.7)";
  container.style.borderLeftColor = "#a594f9";
  container.style.boxShadow = "-12px 0 20px rgba(165,148,249,0.7)";
  container.style.borderRightColor = "#dd2d4a";
  container.style.boxShadow = "12px 0 20px rgba(221,45,74,0.7)";
  container.style.borderTopColor = "rgb(75, 139, 207)";
  container.style.boxShadow = "0 -12px 20px rgba(75,139,207,0.7)";
});
container.addEventListener("mouseleave", () => {
  container.style.borderBottomColor = "#76c893";
  container.style.boxShadow = "0 12px 20px rgba(118,200,147,0.7)";
  container.style.borderLeftColor = "#a594f9";
  container.style.boxShadow = "-12px 0 20px rgba(165,148,249,0.7)";
  container.style.borderRightColor = "#dd2d4a";
  container.style.boxShadow = "12px 0 20px rgba(221,45,74,0.7)";
  container.style.borderTopColor = "rgb(75, 139, 207)";
  container.style.boxShadow = "0 -12px 20px rgba(75,139,207,0.7)";
});
motivations.addEventListener("mouseover", () => {
  motivations.style.width = "43rem";
  motivations.style.fontSize = "2.5rem";
});
motivations.addEventListener("mouseleave", () => {
  motivations.style.width = "33rem";
  motivations.style.fontSize = "2rem";
});

function playCurrentMusic() {
  bgMusic.pause();
  bgMusic.src = musicList[currentMusicIndex];
  bgMusic.load();
  bgMusic.currentTime = 0;
  bgMusic.play().catch(() => {
    console.log("User interaction required");
  });
}
function getRandomMusicIndex() {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * musicList.length);
  } while (randomIndex === currentMusicIndex);
  return randomIndex;
}
function startMusicRotation() {
  stopMusicRotation();

  currentMusicIndex = getRandomMusicIndex();
  playCurrentMusic();

  musicIntervalId = setInterval(() => {
    currentMusicIndex = getRandomMusicIndex();
    playCurrentMusic();
  }, 500000);
}
function stopMusicRotation() {
  clearInterval(musicIntervalId);
  musicIntervalId = null;
  bgMusic.pause();
  bgMusic.currentTime = 0;
}
function timer(countDownTime) {
  counterId = setInterval(() => {
    updateUIEverySec(countDownTime);
    countDownTime--;
    saveTimeLeft = countDownTime;
  }, 1000);
}
function updateUIEverySec(countDownTime) {
  if (countDownTime === 0) {
    clearInterval(counterId);
    stopMusicRotation();
    currentMusicIndex = 0;
    bgMusic.src = "";
    secsInput.value = "00";
    minsInput.value = "00";
    hrsInput.value = "00";
    btnContinue.style.display = "none";
    btnPause.style.display = "none";
    btnStart.style.display = "block";
    btnReset.style.display = "block";
    musicStart.style.display = "block";
    musicStop.style.display = "none";
    return;
  }
  let hrs = Math.floor(countDownTime / 3600);
  let mins = Math.floor((countDownTime % 3600) / 60);
  let secs = countDownTime % 60;
  if (secs > 0) {
    secs--;
    secsInput.value = secs < 10 ? `0${secs}` : `${secs}`;
    minsInput.value = mins;
    hrsInput.value = hrs;
    return;
  }
  if (mins > 0) {
    mins--;
    minsInput.value = mins < 10 ? `0${mins}` : `${mins}`;
    secsInput.value = 59;
    hrsInput.value = hrs;
    return;
  }
  if (hrs > 0) {
    hrs--;
    minsInput.value = 59;
    secsInput.value = 59;
    hrsInput.value = hrs < 10 ? `0${hrs}` : `${hrs}`;
    return;
  }
}
function validateInputs(mins, hrs, secs) {
  if (mins === 0 && hrs === 0 && secs === 0) {
    alert("please enter valid time");
    return false;
  }
  if (hrs > 24 || hrs < 0 || secs < 0 || mins < 0) {
    alert("Hours more than 24hrs/negatives not allowed");
    return false;
  }
  const { transformmins, transformhrs, transformsecs } = transformInputs(
    mins,
    hrs,
    secs,
  );
  const totalTime = transformhrs * 60 * 60 + transformmins * 60 + transformsecs;
  if (totalTime > 86400) {
    alert("total time > 24hrs not allowed");
    return false;
  }
  return true;
}
function transformInputs(mins, hrs, secs) {
  if (secs >= 60) {
    mins++;
    secs = secs % 60;
  }
  if (mins >= 60) {
    hrs++;
    mins = mins % 60;
  }
  return {
    transformsecs: secs,
    transformmins: mins,
    transformhrs: hrs,
  };
}

function defineInterval() {
  motivations.textContent = texts[index];
  startInterval = setInterval(() => {
    index = (index + 1) % texts.length;
    textEl.textContent = texts[index];
  }, 10000);
}

function startBorderFlow() {
  stopBorderFlow(); // safety

  borderFlowInterval = setInterval(() => {
    // reset all sides
    container.style.borderTopColor = "transparent";
    container.style.borderRightColor = "transparent";
    container.style.borderBottomColor = "transparent";
    container.style.borderLeftColor = "transparent";

    // activate ONE side at a time
    switch (borderStep) {
      case 0:
        container.style.borderTopColor = borderColors[0];
        container.style.boxShadow = "0 -8px 20px rgba(75,139,207,0.7)";
        break;
      case 1:
        container.style.borderRightColor = borderColors[1];
        container.style.boxShadow = "8px 0 20px rgba(118,200,147,0.7)";
        break;
      case 2:
        container.style.borderBottomColor = borderColors[2];
        container.style.boxShadow = "0 8px 20px rgba(165,148,249,0.7)";
        break;
      case 3:
        container.style.borderLeftColor = borderColors[3];
        container.style.boxShadow = "-8px 0 20px rgba(221,45,74,0.7)";
        break;
    }

    borderStep = (borderStep + 1) % 4;
  }, 300); // speed (lower = faster)
}

function stopBorderFlow() {
  clearInterval(borderFlowInterval);
  borderFlowInterval = null;
}