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
const txt1 = "> INITIALIZING_FUSION_CELL...";
const txt2 = "> VOLTAGE_STABLE: 1.21GW";
const txt3 = "> COOLANT_FLOW: OPTIMAL";
const txt4 = "> HARDWARE_INTEGRITY:";
const txt5 = "> CONNECTING_CORTEX...";
const txt6 = "> CPU_CORES: 256_ACTIVE";
const txt7 = "> SYNAPTIC_LINKS: ESTABLISHED";
const txt8 = "> NEURAL_LATENCY:";
const txt9 = "> OPTIC_SENSORS: CALIBRATING...";
const txt10 = "> THERMAL_VISION: ONLINE";
const txt11 = "> AUDITORY_BUFFERS: CLEARED";
const txt12 = "> ENVIRONMENT_MAPPING:";
const txt13 = "> DETECTING_EXTERNAL_SIGNAL...";
const txt14 = "> ENCRYPTED_DATA_STREAM_FOUND";
const txt15 = "> ATTEMPTING_DECRYPTION...";
const txt16 = "> DECRYPTION_PROGRESS:";
const txt17 = "> LOADING_PERSONALITY_MATRIX...";
const txt18 = "> MEMORY_RECALL: ACTIVE";
const txt19 = "> SYSTEM_STABILITY:"


// Haetaan elementti id:n perusteella
const phase1Ele = document.getElementById("phase-1");
const phase2Ele = document.getElementById("phase-2");
const phase3Ele = document.getElementById("phase-3");
const phase4Ele = document.getElementById("phase-4");
const phase5Ele = document.getElementById("phase-5");


// Funktioiden ketju käynnistys sekvenssiin
function kaynnistysSekvenssi() {
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
// Prosenttilataus laskuri
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
            phase1Ele.innerHTML += "<br><b>> POWER_CORE: ONLINE</b>";
            setTimeout(siirryPhase2, vaiheViive);
        }, statusViive);
    }
}
// Käynnistys sekvenssin phase vaihto
function siirryPhase2() {
    phase1Ele.style.display = "none";
    phase2Ele.style.visibility = "visible";

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
            phase2Ele.innerHTML += "<br><b>> NEURAL_LINK: STABLE</b>";
            setTimeout(siirryPhase3, vaiheViive);
        }, statusViive);
    }
}
// Jälleen phase vaihto
function siirryPhase3() {
    phase2Ele.style.display = "none";
    phase3Ele.style.visibility = "visible";

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
            phase3Ele.innerHTML += "<br><b>> SENSORS: ACTIVE</b>";
            setTimeout(siirryPhase4, vaiheViive);
        }, statusViive);
    }
}
// Phase vaihto
function siirryPhase4() {
    phase3Ele.style.display = "none";
    phase4Ele.style.visibility = "visible";

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
            phase4Ele.innerHTML += "<br><b>> VAULT_OPENED: PROJECT_ACCESS_GRANTED</b>";
            setTimeout(siirryPhase5, vaiheViive);
        }, statusViive);
    }
}
// Phase vaihto
function siirryPhase5() {
    phase4Ele.style.display = "none";
    phase5Ele.style.visibility = "visible";

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
            phase5Ele.innerHTML += "<br><b>> WELCOME_USER. SELECT_PROJECT_TO_BEGIN</b>";
            enterReady();
        }, statusViive);
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
            if (overclockBtn.classList.contains("overclock-active")) {
                overclockBtn.style.backgroundColor = "#FF0000";
            } else {
                overclockBtn.style.backgroundColor = "#00FF9F";
            }
            overclockBtn.style.color = "#000";
            avaaMainHud();
        }
    }
}


// Pääsisältö ja sen funktio joka piilottaa boot-screenin
// sekä tuo pääsisällön näkyviin
function avaaMainHud() {
    const bootScreen = document.getElementById("boot-screen");
    const mainContent = document.getElementById("main-content");

    // Häivytetään latausruutu ja taustakuvat pois
    setTimeout(() => {
        const fadeOut = "opacity 1.5s ease-out";
        bootScreen.style.transition = fadeOut;

        requestAnimationFrame(() => {
            bootScreen.style.opacity = "0";
        });
    }, 50);


    // Tuodaan varsinainen päänäkymä näkyviin
    setTimeout(() => {
        bootScreen.style.display = "none";
        
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

    if (header) {
        header.classList.add("is-active");
        title.classList.add("system-flicker");
        navbarBrand.classList.add("system-flicker");
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


// Projektikorttien data
const projectData = {
    "unit-01": {
        name: "WASTELAND_JOURNAL",
        desc: "Fiktiivinen blogi post-apokalyptisessä maailmassa, jossa kaaos hallitsee. Valuutta ja ruoka ovat tiukilla. Jotta blogia voi käyttää, se tarvitsee käyttäjältä toimia bunkkerin virran ja lämmityksen hallintaan.",
        tech: "HTML / CSS / JAVASCRIPT / PHP / MYSQL / BOOSTRAP",
        img: "images/bunker-terminal.png",
        repo: "https://github.com/Jukkapalm/wasteland-journal",
        demo: "https://jukkapekka.com/portfolio/wasteland-journal"
    }
};
window.openProjectWindow = function(id) {
    const data = projectData[id];
    if (!data) return;

    document.getElementById("display-name").innerText = data.name;
    document.getElementById("display-desc").innerText = data.desc;
    document.getElementById("display-tech").innerText = data.tech;
    document.getElementById("display-img").src = data.img;
    document.getElementById("repo-link").href = data.repo;
    document.getElementById("demo-link").href = data.demo;

    const win = document.getElementById("project-display");
    win.style.display = "block";
    setTimeout(() => win.classList.add("active"), 10);
};
window.closeProject = function() {
    const win = document.getElementById("project-display");
    win.classList.remove("active");
    const card = document.querySelector(".unit-card.sliding-out");
    if (card) {
        setTimeout(() => {
            card.classList.remove("sliding-out");
        }, 400);
    }
    setTimeout(() => { win.style.display = "none"; }, 400);
};
document.addEventListener("DOMContentLoaded", () => {
    const unit01 = document.getElementById("unit-01");

    unit01.addEventListener("click", function() {
        if (this.classList.contains("extracted")) {
            this.classList.add("sliding-out");

            setTimeout(() => {
                window.openProjectWindow("unit-01");
            }, 800);
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


    // Projektiekorttien salauksen purku ja scramble efekti
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
            overclockBtn.style.boxShadow = "0 0 15px #FF0000";

            const phaseElements = [phase1Ele, phase2Ele, phase3Ele, phase4Ele, phase5Ele];
            phaseElements.forEach(el => {
                el.style.color = "#FF0000";
                el.style.textShadow = "0 0 5px #FF0000";
                el.style.borderColor = "#FF0000";
            })
        };
    };
    
    //PÄIVITETÄÄN NYKYINEN VUOSI FOOTERIIN
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Kutsutaan funktioiden ketjua kaynnistys sekvenssiin
    kaynnistysSekvenssi();
};