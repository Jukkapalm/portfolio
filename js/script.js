const logElement = document.getElementById('system-check');
const skipBtn = document.getElementById('skip-btn');
const skipContainer = document.getElementById('skip-container');
const eyeElement = document.querySelector('.cyber-eye');

const neuralElement = document.getElementById('neural-data');
const brailleChars = "⠁⠂⠃⠄⡀⡁⡂⡃⡄⢀⢁⢂⢃⢄⣀⣁⣂⣃";
let neuralLength = 0;

const bootSequence = [
    "> POWER_CORE_STABLE... ",
    "> OPTIC_SENSORS_ACTIVE... [OK]",
    "> LINKING_CYBERNETIC_CORTEX... [CONNECTED]",
    "> INITIALIZING_SYNTHETIC_LOGIC_v8.4",
    "> DECODING_ALIEN_ARTIFACT_DATA... [ENCRYPTED]",
    "> BIOMETRIC_SIGNATURE: UNKNOWN_USER",
    "> ACCESS_LEVEL: GUEST_RESTRICTED",
    "> DOWNLOADING_EXPERIENCE_DATA... ",
    "> OVERRIDING_HUMAN_SAFETY_LIMITS",
    "> NEURAL_UPLOAD_READY",
    "> WELCOME, OPERATOR. SELECT DATA_STREAM TO BEGIN..."
];

let lineIndex = 0;
let charIndex = 0;
let currentText = "";
let typingSpeed = 40;

function updateNeuralStream() {
    if (!neuralElement || !neuralElement.classList.contains('neural-active')) return;

    if (neuralLength < 12) {
        neuralLength++;
    }

    let line1 = "";
    let line2 = "";

    for (let i = 0; i < neuralLength; i++) {
        line1 += brailleChars.charAt(Math.floor(Math.random() * brailleChars.length));
        line2 += brailleChars.charAt(Math.floor(Math.random() * brailleChars.length));
    }
    neuralElement.innerText = line1 + "\n" + line2;
    setTimeout(updateNeuralStream, 600); // Vaihtumisnopeus
}

if (skipBtn) {
    skipBtn.addEventListener('click', () => {
        typingSpeed = 2;
        logElement.style.color = "#FF003C";
        logElement.style.textShadow = "0 0 10px #FF003C";

        currentText += "<br><span style='font-weight: bold;'>[ ! ] OVERCLOCK_MODE: ACTIVE - BYPASSING_PROTOCOLS...</span><br>";

        if (skipContainer) skipContainer.style.display = "none";
    });
}

function prosenttiLataus(percent, callback) {
    if (percent <= 100) {
        logElement.innerHTML = currentText + percent + "%";
        let speed = typingSpeed < 10 ? 1 : 20;
        setTimeout(() => prosenttiLataus(percent + 2, callback), speed);
    } else {
        currentText += "100%<br>";
        callback();
    }
}

function typeWriter() {
    if (lineIndex < bootSequence.length) {
        let fullLine = bootSequence[lineIndex];

        if (fullLine.includes("DECODING_ALIEN_ARTIFACT_DATA") && charIndex === 0) {
            if (neuralElement) {
                neuralElement.classList.add('neural-active');
                updateNeuralStream();
            }
        }

        if (lineIndex === 0 && charIndex === 0 && eyeElement) {
            eyeElement.classList.add('eye-active');
        }

        if (charIndex < fullLine.length) {
            currentText += fullLine.charAt(charIndex);
            logElement.innerHTML = currentText;
            charIndex++;
            setTimeout(typeWriter, typingSpeed);
        } else {
            if (fullLine.endsWith("... ")) {
                prosenttiLataus(0, () => {
                    lineIndex++;
                    charIndex = 0;
                    setTimeout(typeWriter, typingSpeed < 10 ? 20 : 500);
                });
            } else {
                currentText += "<br>";
                lineIndex++;
                charIndex = 0;

                let pause = typingSpeed < 10 ? 20 : 500;
                setTimeout(typeWriter, pause);
            }
        }
    } else {
        if (eyeElement) {
            eyeElement.classList.add('eye-stable');
        }
    }
}

window.onload = () => {
    setTimeout(() => {
        if (skipContainer) skipContainer.style.display = "block";
        typeWriter();
    }, 1000);
}