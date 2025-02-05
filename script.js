const images = [
    "valentine1.JPG",
    "valentine2.JPG",
    "valentine3.JPG",
    "valentine4.JPG"
];

const questions = [
    "girl ... 🤨",
    "THINK 😺",
    "Try again 😧",
    "sweetheart, cmon now 😟",
    "girl, click the damn button, it's big 😔"
];

let currentIndex = 0;
let noClickCount = 0;
let yesSize = 100;

function changeQuestion() {
    let yesBtn = document.getElementById("yesBtn");

    // Change question text
    document.getElementById("question").innerText = questions[currentIndex];

    // Change image
    document.getElementById("valentineIMG").src = images[currentIndex];

    // Count "No" clicks
    noClickCount++;

    // After 5 "No" clicks, make "Yes" button take over
    if (noClickCount >= 5) {
        yesBtn.style.position = "fixed";
        yesBtn.style.top = "0";
        yesBtn.style.left = "0";
        yesBtn.style.width = "100vw";
        yesBtn.style.height = "100vh";
        yesBtn.style.fontSize = "80px";
        yesBtn.innerText = "girl, click the damn button, it's big 😔";
        yesBtn.style.transition = "all 0.5s ease-in-out";

        // Hide everything else
        document.getElementById("question").style.display = "none";
        document.getElementById("valentineIMG").style.display = "none";
        document.getElementById("noBtn").style.display = "none";
        document.body.style.backgroundColor = "#ff4d4d";
    } else {
        // Grow "Yes" button gradually
        yesSize *= 1.5;
        yesBtn.style.width = `${yesSize}px`;
        yesBtn.style.height = `${yesSize}px`;
        yesBtn.style.fontSize = `${yesSize / 6}px`;
    }

    // Loop through questions
    if (currentIndex < questions.length - 1) {
        currentIndex++;
    }
}

function sayYes() {
    let yesBtn = document.getElementById("yesBtn");

    // Make the "Yes" button cover the whole website instantly
    yesBtn.style.position = "fixed";
    yesBtn.style.top = "0";
    yesBtn.style.left = "0";
    yesBtn.style.width = "100vw";
    yesBtn.style.height = "100vh";
    yesBtn.style.fontSize = "100px";
    yesBtn.innerText = "YAY! YOU'RE MY VALENTINE! 💖";

    // Hide everything else
    document.getElementById("question").style.display = "none";
    document.getElementById("valentineIMG").style.display = "none";
    document.getElementById("noBtn").style.display = "none";

    // Change background for full effect
    document.body.style.backgroundColor = "#ff4d4d";
}
