// Globaalit muuttujat
let i = 0; // Seuraa indeksiä teksteissä
let latausProsentti = 0;  // Seuraa indeksiä latausprosenteissa
let prosenttiSpeed = 20;
let kirjoitusNopeus = 28;
let pohjaTeksti = "";  // Tilapäinen muuttuja johon tallennetaan meneillään olevan phasen tekstit
let riviViive = 300;
let vaiheViive = 1000;
let statusViive = 1000;



// Tekstit tarkistuksiin jotka käynnistys sekvenssissä suoritetaan
let txt1 = "> INITIALIZING_FUSION_CELL...";
let txt2 = "> VOLTAGE_STABLE: 1.21GW";
let txt3 = "> COOLANT_FLOW: OPTIMAL";
let txt4 = "> HARDWARE_INTEGRITY:";
let txt5 = "> CONNECTING_CORTEX...";
let txt6 = "> CPU_CORES: 256_ACTIVE";
let txt7 = "> SYNAPTIC_LINKS: ESTABLISHED";
let txt8 = "> NEURAL_LATENCY:";
let txt9 = "> OPTIC_SENSORS: CALIBRATING...";
let txt10 = "> THERMAL_VISION: ONLINE";
let txt11 = "> AUDITORY_BUFFERS: CLEARED";
let txt12 = "> ENVIRONMENT_MAPPING:";
let txt13 = "> DETECTING_EXTERNAL_SIGNAL...";
let txt14 = "> ENCRYPTED_DATA_STREAM_FOUND";
let txt15 = "> ATTEMPTING_DECRYPTION...";
let txt16 = "> DECRYPTION_PROGRESS:";
let txt17 = "> LOADING_PERSONALITY_MATRIX...";
let txt18 = "> MEMORY_RECALL: ACTIVE";
let txt19 = "> SYSTEM_STABILITY:"



// Haetaan elementti id:n perusteella
const phase1Ele = document.getElementById("phase-1");
const phase2Ele = document.getElementById("phase-2");
const phase3Ele = document.getElementById("phase-3");
const phase4Ele = document.getElementById("phase-4");
const phase5Ele = document.getElementById("phase-5");



// Funktioiden ketju käynnistys sekvenssiin
function kaynnistysSekvenssi() {
    if (i === 0) paivitaBin1(1, 1);
    phase1Ele.style.visibility = "visible";

    if (i === 0) {
        phase1Ele.innerHTML += "<br><br>";
    }

    if (i < txt1.length) {
        phase1Ele.innerHTML += txt1.charAt(i);
        i++;
        setTimeout(kaynnistysSekvenssi, kirjoitusNopeus);
    } else {
        i = 0;
        phase1Ele.innerHTML += "<br>";
        setTimeout(tulostaTxt2, riviViive);
    }
}
function tulostaTxt2() {
    if (i === 0) paivitaBin2(1, 2);
    if (i < txt2.length) {
        phase1Ele.innerHTML += txt2.charAt(i);
        i++;
        setTimeout(tulostaTxt2, kirjoitusNopeus);
    } else {
        i = 0;
        phase1Ele.innerHTML += "<br>";
        setTimeout(tulostaTxt3, riviViive);
    }
}
function tulostaTxt3() {
    if (i === 0) paivitaBin1(1, 3);
    if (i < txt3.length) {
        phase1Ele.innerHTML += txt3.charAt(i);
        i++;
        setTimeout(tulostaTxt3, kirjoitusNopeus);
    } else {
        i = 0;
        phase1Ele.innerHTML += "<br>";
        setTimeout(tulostaTxt4, riviViive);
    }
}
function tulostaTxt4() {
    if (i === 0) paivitaBin2(1, 4)
    if (i < txt4.length) {
        phase1Ele.innerHTML += txt4.charAt(i);
        i++;
        setTimeout(tulostaTxt4, kirjoitusNopeus);
    }
    else {
        pohjaTeksti = phase1Ele.innerHTML;
        setTimeout(prosenttiLataus, 200);
    }
}
function prosenttiLataus() {
    if (latausProsentti <= 100) {
        phase1Ele.innerHTML = pohjaTeksti + ' ' + latausProsentti + '%';
        latausProsentti++;
        setTimeout(prosenttiLataus, prosenttiSpeed);
    } else {
        setTimeout(function() {
            latausProsentti = 0;
            i = 0;
            pohjaTeksti = "";
            paivitaBin1(1, 5);
            phase1Ele.innerHTML += "<br><b>> POWER_CORE: ONLINE</b>";
            setTimeout(siirryPhase2, vaiheViive);
        }, statusViive);
    }
}
function siirryPhase2() {
    phase1Ele.style.display = "none";
    phase2Ele.style.visibility = "visible";

    if (i === 0) paivitaBin2(2, 1);
    if (i === 0) {
        phase2Ele.innerHTML += "<br><br>";
    }

    if (i < txt5.length) {
        phase2Ele.innerHTML += txt5.charAt(i);
        i++;
        setTimeout(siirryPhase2, kirjoitusNopeus);
    } else {
        i = 0;
        phase2Ele.innerHTML += "<br>";
        setTimeout(tulostaTxt6, riviViive);
    }
}
function tulostaTxt6() {
    if (i === 0) paivitaBin1(2, 2);
    if (i < txt6.length) {
        phase2Ele.innerHTML += txt6.charAt(i);
        i++;
        setTimeout(tulostaTxt6, kirjoitusNopeus);
    } else {
        i = 0;
        phase2Ele.innerHTML += "<br>";
        setTimeout(tulostaTxt7, riviViive);
    }
}
function tulostaTxt7() {
    if (i === 0) paivitaBin2(2, 3);
    if (i < txt7.length) {
        phase2Ele.innerHTML += txt7.charAt(i);
        i++;
        setTimeout(tulostaTxt7, kirjoitusNopeus);
    } else {
        i = 0;
        phase2Ele.innerHTML += "<br>";
        setTimeout(tulostaTxt8, riviViive);
    }
}
function tulostaTxt8() {
    if (i === 0) paivitaBin1(2, 4);
    if (i < txt8.length) {
        phase2Ele.innerHTML += txt8.charAt(i);
        i++;
        setTimeout(tulostaTxt8, kirjoitusNopeus);
    } else {
        pohjaTeksti = phase2Ele.innerHTML;
        setTimeout(msLataus, 200);
    }
}
function msLataus() {
    if (latausProsentti <= 100) {
        let msArvo = (100 - (latausProsentti * 0.99)).toFixed(1) + "ms";
        phase2Ele.innerHTML = pohjaTeksti + ' ' + msArvo;
        latausProsentti++;
        setTimeout(msLataus, prosenttiSpeed);
    } else {
        setTimeout(function() {
            latausProsentti = 0;
            i = 0;
            pohjaTeksti = "";
            paivitaBin2(2, 5)
            phase2Ele.innerHTML += "<br><b>> NEURAL_LINK: STABLE</b>";
            setTimeout(siirryPhase3, vaiheViive);
        }, statusViive);
    }
}
function siirryPhase3() {
    phase2Ele.style.display = "none";
    phase3Ele.style.visibility = "visible";

    if (i === 0) paivitaBin1(3, 1);
    if (i === 0) {
        phase3Ele.innerHTML += "<br><br>";
    }

    if (i < txt9.length) {
        phase3Ele.innerHTML += txt9.charAt(i);
        i++;
        setTimeout(siirryPhase3, kirjoitusNopeus);
    } else {
        i = 0;
        phase3Ele.innerHTML += "<br>";
        setTimeout(tulostaTxt10, riviViive);
    }
}
function tulostaTxt10() {
    if (i === 0) paivitaBin2(3, 2);
    if (i < txt10.length) {
        phase3Ele.innerHTML += txt10.charAt(i);
        i++;
        setTimeout(tulostaTxt10, kirjoitusNopeus);
    } else {
        i = 0;
        phase3Ele.innerHTML += "<br>";
        setTimeout(tulostaTxt11, riviViive);
    }
}
function tulostaTxt11() {
    if (i === 0) paivitaBin1(3, 3);
    if (i < txt11.length) {
        phase3Ele.innerHTML += txt11.charAt(i);
        i++;
        setTimeout(tulostaTxt11, kirjoitusNopeus);
    } else {
        i = 0;
        phase3Ele.innerHTML += "<br>";
        setTimeout(tulostaTxt12, riviViive);
    }
}
function tulostaTxt12() {
    if (i === 0) paivitaBin2(3, 4);
    if (i < txt12.length) {
        phase3Ele.innerHTML += txt12.charAt(i);
        i++;
        setTimeout(tulostaTxt12, kirjoitusNopeus);
    } else {
        pohjaTeksti = phase3Ele.innerHTML;
        i = 0;
        setTimeout(prosenttiLataus2, riviViive);
    }
}
function prosenttiLataus2() {
    if (latausProsentti <= 100) {
        phase3Ele.innerHTML = pohjaTeksti + ' ' + latausProsentti + '%';
        latausProsentti++;
        setTimeout(prosenttiLataus2, prosenttiSpeed);
    } else {
        setTimeout(function() {
            latausProsentti = 0;
            i = 0;
            pohjaTeksti = "";
            paivitaBin1(3, 5)
            phase3Ele.innerHTML += "<br><b>> SENSORS: ACTIVE</b>";
            setTimeout(siirryPhase4, vaiheViive);
        }, statusViive);
    }
}
function siirryPhase4() {
    phase3Ele.style.display = "none";
    phase4Ele.style.visibility = "visible";

    if (i === 0) paivitaBin2(4, 1);
    if (i === 0) {
        phase4Ele.innerHTML += "<br><br>";
    }

    if (i < txt13.length) {
        phase4Ele.innerHTML += txt13.charAt(i);
        i++;
        setTimeout(siirryPhase4, kirjoitusNopeus);
    } else {
        i = 0;
        phase4Ele.innerHTML += "<br>";
        setTimeout(tulostaTxt14, riviViive);
    }
}
function tulostaTxt14() {
    if (i === 0) paivitaBin1(4, 2);
    if (i < txt14.length) {
        phase4Ele.innerHTML += txt14.charAt(i);
        i++;
        setTimeout(tulostaTxt14, kirjoitusNopeus);
    } else {
        i = 0;
        phase4Ele.innerHTML += "<br>";
        setTimeout(tulostaTxt15, riviViive);
    }
}
function tulostaTxt15() {
    if (i === 0) paivitaBin2(4, 3);
    if (i < txt15.length) {
        phase4Ele.innerHTML += txt15.charAt(i);
        i++;
        setTimeout(tulostaTxt15, kirjoitusNopeus);
    } else {
        i = 0;
        phase4Ele.innerHTML += "<br>";
        setTimeout(tulostaTxt16, riviViive);
    }
}
function tulostaTxt16() {
    if (i === 0) paivitaBin1(4, 4);
    if (i < txt16.length) {
        phase4Ele.innerHTML += txt16.charAt(i);
        i++;
        setTimeout(tulostaTxt16, kirjoitusNopeus);
    } else {
        pohjaTeksti = phase4Ele.innerHTML;
        i = 0;
        setTimeout(prosenttiLataus3, riviViive);
    }
}
function prosenttiLataus3() {
    if (latausProsentti <= 100) {
        phase4Ele.innerHTML = pohjaTeksti + ' ' + latausProsentti + '%';
        latausProsentti++;
        setTimeout(prosenttiLataus3, prosenttiSpeed);
    } else {
        setTimeout(function() {
            latausProsentti = 0;
            i = 0;
            pohjaTeksti = "";
            paivitaBin2(4, 5)
            phase4Ele.innerHTML += "<br><b>> VAULT_OPENED: PROJECT_ACCESS_GRANTED</b>";
            setTimeout(siirryPhase5, vaiheViive);
        }, statusViive);
    }
}
function siirryPhase5() {
    phase4Ele.style.display = "none";
    phase5Ele.style.visibility = "visible";

    if (i === 0) paivitaBin1(5, 1);
    if (i === 0) {
        phase5Ele.innerHTML += "<br><br>";
    }

    if (i < txt17.length) {
        phase5Ele.innerHTML += txt17.charAt(i);
        i++;
        setTimeout(siirryPhase5, kirjoitusNopeus);
    } else {
        i = 0;
        phase5Ele.innerHTML += "<br>";
        setTimeout(tulostaTxt18, riviViive);
    }
}
function tulostaTxt18() {
    if (i === 0) paivitaBin2(5, 2);
    if (i < txt18.length) {
        phase5Ele.innerHTML += txt18.charAt(i);
        i++;
        setTimeout(tulostaTxt18, kirjoitusNopeus);
    } else {
        i = 0;
        phase5Ele.innerHTML += "<br>";
        setTimeout(tulostaTxt19, riviViive);
    }
}
function tulostaTxt19() {
    if (i === 0) paivitaBin1(5, 3);
    if (i < txt19.length) {
        phase5Ele.innerHTML += txt19.charAt(i);
        i++;
        setTimeout(tulostaTxt19, kirjoitusNopeus);
    } else {
        pohjaTeksti = phase5Ele.innerHTML;
        i = 0;
        setTimeout(prosenttiLataus4, riviViive);
    }
}
function prosenttiLataus4() {
    if (latausProsentti <= 100) {
        phase5Ele.innerHTML = pohjaTeksti + ' ' + latausProsentti + '%';
        latausProsentti++;
        setTimeout(prosenttiLataus4, prosenttiSpeed);
    } else {
        setTimeout(function() {
            latausProsentti = 0;
            i = 0;
            pohjaTeksti = "";
            paivitaBin2(5, 4);
            phase5Ele.innerHTML += "<br><b>> WELCOME_USER. SELECT_PROJECT_TO_BEGIN</b>";
            enterReady();
        }, statusViive);
    }
}



// Apufunktiot paivitaBin1 ja paivitaBin2 binäärien päivittymiseen
function paivitaBin1(vaihe, rivi) {
    const b1 = document.getElementById("binaariLuvut1");
    const b2 = document.getElementById("binaariLuvut2");

    b1.textContent = vaihe.toString(2).padStart(8, '0') + "  " + rivi.toString(2).padStart(8, '0');
    b1.style.left = (Math.floor(Math.random() * 40) + 5) + "vw";
    b1.style.top = (Math.floor(Math.random() * 20) + 5) + "vh";

    b1.style.opacity = "0.5";

    if (b2) {
        b2.style.opacity = "0";
    }
}
function paivitaBin2(vaihe, rivi) {
    const b1 = document.getElementById("binaariLuvut1");
    const b2 = document.getElementById("binaariLuvut2");

    b2.textContent = vaihe.toString(2).padStart(8, '0') + " " + rivi.toString(2).padStart(8, '0');
    b2.style.left = (Math.floor(Math.random() * 40) + 5) + "vw";
    b2.style.top = (Math.floor(Math.random() * 20) + 5) + "vh";

    b2.style.opacity = "0.5";

    if (b1) {
        b1.style.opacity = "0";
    }
}



// Funktio joka käynnistys sekvenssin jälkeen muuttaa overclock button niin
// että painalluksen jälkeen avautuu pääsisältö
function enterReady() {
    const overclockBtn = document.getElementById("overclock-hint");

    if (overclockBtn) {
        overclockBtn.innerText = "ESTABLISH NEURAL LINK";
        overclockBtn.classList.add("ready-to-enter");

        overclockBtn.onclick = () => {
            overclockBtn.style.backgroundColor = "#00FF9F";
            overclockBtn.style.color = "#000";
            avaaMainHud();
        }
    }
}



// Pääsisältö ja sen funktio joka piilottaa käynnistyksen silmän ja boot-screenin
// sekä tuo pääsisällön näkyviin
function avaaMainHud() {
    const bootScreen = document.getElementById("boot-screen");
    const mainContent = document.getElementById("main-content");
    const cyberEye = document.querySelector(".cyber-eye");

    cyberEye.style.animation = "none";
    cyberEye.style.opacity = "1";

    setTimeout(() => {
        const fadeOut = "opacity 1.5s ease-out";
        bootScreen.style.transition = fadeOut;
        cyberEye.style.transition = fadeOut;

        requestAnimationFrame(() => {
            cyberEye.style.opacity = "0";
            bootScreen.style.opacity = "0";
        });
    }, 50);


    setTimeout(() => {
        bootScreen.style.display = "none";
        cyberEye.style.display = "none";
        
        mainContent.style.display = "block";

        setTimeout(() => {
            mainContent.style.visibility = "visible";
            mainContent.style.opacity = "1";

            kaynnistaHudElementit();
        }, 50);
    }, 1600);
}



// Pääsisällön animaatiot (flickerit)
function kaynnistaHudElementit() {
    const header = document.getElementById("main-header");
    const footer = document.querySelector(".footer-container");
    const title = document.querySelector(".header-center-title");
    const navbarBrand = document.querySelector(".navbar-brand");
    const sivusto = document.querySelector(".sivusto");

    if (header) {
        header.classList.add("is-active");
        title.classList.add("system-flicker");
        navbarBrand.classList.add("system-flicker");
        sivusto.classList.add("system-flicker");
    }

    updateBraille();

    if (footer) {
        footer.style.opacity = "1";
        footer.style.visibility = "visible";
        footer.style.transition = "opacity 1s ease-out";
    }
}


// Päivitetään braille headerissa
function updateBraille() {
    const brailleChars = "⠁⠂⠃⠄⡀⡁⡂⡃⡄⢀⢁⢂⢃⢄⣀⣁⣂⣃⠃⠗⠁⠊⠇⠵⠴⠷⠦";
    const left = document.getElementById("braille-left");
    const right = document.getElementById("braille-right");

    const generate = (len) => Array.from({length: len}, () =>
        brailleChars[Math.floor(Math.random() * brailleChars.length)]).join('');

    if (left && right) {
        left.innerText = generate(20);
        right.innerText = generate(20);
    }
    setTimeout(updateBraille, Math.random() * 2000 + 500);
}

document.addEventListener("DOMContentLoaded", () => {
    const unit01 = document.getElementById("unit-01");

    unit01.addEventListener("click", function() {
        if (this.classList.contains("extracted")) {
            this.classList.add("sliding-out");

            console.log("Kortti poistettu. avataan data-ikkuna...");
            return;
        }

        if (this.classList.contains("decrypting")) return;
        
        this.classList.add("decrypting");
        const statusText = this.querySelector(".status-text");
        const actionText = this.querySelector(".unit-action");

        let progress = 0;
        const targetName = "WASTELAND_JOURNAL";

        const interval = setInterval(() => {
            progress += Math.floor(Math.random() * 5) + 2;

            if (progress <= 100) {
                statusText.innerText = `DECRYPTING...${progress}%`;
                actionText.innerText = "> ACCESSING_DATA_STREAM";
            } else {
                clearInterval(interval);
                finalizeDecryption(statusText, actionText, targetName, this);
            }
        }, 40);
    });

    function finalizeDecryption(element, actionElement, finalName, card) {
        const chars = "⠁⠂⠃⠄⡀⡁⡂⡃⡄⢀⢁⢂⢃⢄⣀⣁⣂⣃⠃⠗⠁⠊⠇⠵⠴⠷⠦";
        let iteration = 0;

        const scrambleInterval = setInterval(() => {
            const scrabmledPart = finalName
                .split("")
                .map((_, index) => {
                    if (index < iteration) return finalName[index];
                    return chars[Math.floor(Math.random() * chars.length)];
                })
                .join("");

            element.innerText = `Project: ${scrabmledPart}`;
                
            if (iteration >= finalName.length) {
                clearInterval(scrambleInterval);
                element.style.color = "#FFF";
                actionElement.innerText = "> EXTRACT_UNIT";
                actionElement.style.color = "#FFAE00";
                card.classList.remove("decrypting");
                card.classList.add("extracted");
            }
            iteration += 1 / 3;
        }, 30);
    }
});


// Tapahtuma ketju sivuun latauksen yhteydessä
window.onload = () => {

    // Kellotus nappi ilmestyy 1 sek käynnistyksen jälkeen
    const overclockBtn = document.getElementById("overclock-hint");
    setTimeout(() => {
        if (overclockBtn) overclockBtn.style.display = "block";
    }, 1000);

    // Jos overclock buttinia painetaan niin muuttaa tekstit ja buttonin punaiseksi
    if (overclockBtn) {
        overclockBtn.onclick = () => {
            kirjoitusNopeus = 5;
            prosenttiSpeed = 5;
            riviViive = 5;
            vaiheViive = 5;
            statusViive = 5;
            overclockBtn.classList.add('overclock-active');
            overclockBtn.innerText = "SYSTEM_OVERCLOCKED";
            overclockBtn.style.color = "#FF0000";
            overclockBtn.style.borderColor = "#FF0000";

            const binaari1 = document.getElementById("binaariLuvut1");
            const binaari2 = document.getElementById("binaariLuvut2");
            binaari1.style.color = "#FF0000";
            binaari1.style.textShadow = "0 0 5px #FF0000";
            binaari2.style.color = "#FF0000";
            binaari2.style.textShadow = "0 0 5px #FF0000";

            const phaseElements = [phase1Ele, phase2Ele, phase3Ele, phase4Ele, phase5Ele];
            phaseElements.forEach(el => {
                el.style.color = "#FF0000";
                el.style.textShadow = "0 0 5px #FF0000";
                el.style.borderColor = "#FF0000";
            })

            const eyeEle = document.querySelector(".cyber-eye");
            if (eyeEle) {
                eyeEle.style.animation = "eye-pulse 2s linear infinite";
                eyeEle.style.opacity = "1";
            }
        };
    };

    // Kutsutaan funktioiden ketjua kaynnistys sekvenssiin
    //kaynnistysSekvenssi();
    avaaMainHud();
};