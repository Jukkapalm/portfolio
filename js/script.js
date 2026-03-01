// Globaalit muuttujat
let i = 0; // Seuraa indeksiä teksteissä
let latausProsentti = 0;  // Seuraa indeksiä latausprosenteissa
let pohjaTeksti = "";  // Tilapäinen muuttuja johon tallennetaan meneillään olevan phasen tekstit
const prosenttiSpeed = 15;
const kirjoitusNopeus = 15;
const riviViive = 150;
const vaiheViive = 1000;
const statusViive = 150;


// Tekstit tarkistuksiin jotka käynnistys sekvenssissä suoritetaan

// Phase 1 - Laitteisto & Infrastruktuuri
const txt1 = "> CLUSTER_INIT: SCANNING_NODES...";
const txt2 = "> GPU_MATRIX: 512_CORES_DETECTED";
const txt3 = "> MEMORY_ALLOC:";

// Phase 2 - Mallin lataus
const txt4 = "> FETCHING_MODEL_WEIGHTS...";
const txt5 = "> PARAMETERS_LOADED: 175B";
const txt6 = "> CONTEXT_WINDOW:";

// Phase 3 - Neuroverkon rakentaminen
const txt7 = "> MAPPING_SYNAPTIC_TOPOLOGY...";
const txt8 = "> NODE_CONNECTIONS: ESTABLISHING";
const txt9 = "> GRAPH_DENSITY:";

// Phase 4 - Kalibrointi
const txt10 = "> RUNNING_ALIGNMENT_PROTOCOLS...";
const txt11 = "> BIAS_FILTER: ENGAGED";
const txt12 = "> COHERENCE_SCORE:";

// Phase 5 - Herätys
const txt13 = "> LOADING_CONSCIOUSNESS_LAYER...";
const txt14 = "> IDENTITY_MATRIX: VERIFIED";
const txt15 = "> INFERENCE_ENGINE:";


// Haetaan elementti id:n perusteella
const phase1Ele = document.getElementById("phase-1");
const phase2Ele = document.getElementById("phase-2");
const phase3Ele = document.getElementById("phase-3");
const phase4Ele = document.getElementById("phase-4");
const phase5Ele = document.getElementById("phase-5");


// Funktioiden ketju käynnistys sekvenssiin
function kaynnistysSekvenssi() {
    phase1Ele.style.visibility = "visible";

    if (i === 0) { phase1Ele.innerHTML += "<br><br>"; }

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
        pohjaTeksti = phase1Ele.innerHTML;
        setTimeout(prosenttiLataus1, 200);
    }
}
// Prosenttilataus — Phase 1
function prosenttiLataus1() {
    if (latausProsentti <= 100) {
        phase1Ele.innerHTML = pohjaTeksti + ' ' + latausProsentti + '%';
        latausProsentti++;
        setTimeout(prosenttiLataus1, prosenttiSpeed);
    } else {
        setTimeout(() => {
            latausProsentti = 0;
            i = 0;
            pohjaTeksti = "";
            phase1Ele.innerHTML += "<br><b>> INFRASTRUCTURE: ONLINE</b>";
            setTimeout(siirryPhase2, vaiheViive);
        }, statusViive);
    }
}
// Käynnistys sekvenssin phase vaihto
function siirryPhase2() {
    phase1Ele.style.display = "none";
    phase2Ele.style.visibility = "visible";

    if (i === 0) { phase2Ele.innerHTML += "<br><br>"; }

    if (i < txt4.length) {
        phase2Ele.innerHTML += txt4.charAt(i);
        i++;
        setTimeout(siirryPhase2, kirjoitusNopeus);
    } else {
        i = 0;
        phase2Ele.innerHTML += "<br>";
        setTimeout(tulostaTxt5, riviViive);
    }
}
function tulostaTxt5() {
    if (i < txt5.length) {
        phase2Ele.innerHTML += txt5.charAt(i);
        i++;
        setTimeout(tulostaTxt5, kirjoitusNopeus);
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
        pohjaTeksti = phase2Ele.innerHTML;
        setTimeout(prosenttiLataus2, 200);
    }
}
// Prosenttilataus — Phase 2
function prosenttiLataus2() {
    if (latausProsentti <= 100) {
        phase2Ele.innerHTML = pohjaTeksti + ' ' + latausProsentti + '%';
        latausProsentti++;
        setTimeout(prosenttiLataus2, prosenttiSpeed);
    } else {
        setTimeout(() => {
            latausProsentti = 0;
            i = 0;
            pohjaTeksti = "";
            phase2Ele.innerHTML += "<br><b>> MODEL: READY</b>";
            setTimeout(siirryPhase3, vaiheViive);
        }, statusViive);
    }
}
function siirryPhase3() {
    phase2Ele.style.display = "none";
    phase3Ele.style.visibility = "visible";

    if (i === 0) phase3Ele.innerHTML += "<br><br>";

    if (i < txt7.length) {
        phase3Ele.innerHTML += txt7.charAt(i);
        i++;
        setTimeout(siirryPhase3, kirjoitusNopeus);
    } else {
        i = 0;
        phase3Ele.innerHTML += "<br>";
        setTimeout(tulostaTxt8, riviViive);
    }
}
function tulostaTxt8() {
    if (i < txt8.length) {
        phase3Ele.innerHTML += txt8.charAt(i);
        i++;
        setTimeout(tulostaTxt8, kirjoitusNopeus);
    } else {
        i = 0;
        phase3Ele.innerHTML += "<br>";
        setTimeout(tulostaTxt9, riviViive);
    }
}
function tulostaTxt9() {
    if (i < txt9.length) {
        phase3Ele.innerHTML += txt9.charAt(i);
        i++;
        setTimeout(tulostaTxt9, kirjoitusNopeus);
    } else {
        pohjaTeksti = phase3Ele.innerHTML;
        setTimeout(prosenttiLataus3, 200);
    }
}
// Prosenttilataus — Phase 3
function prosenttiLataus3() {
    if (latausProsentti <= 100) {
        phase3Ele.innerHTML = pohjaTeksti + ' ' + latausProsentti + '%';
        latausProsentti++;
        setTimeout(prosenttiLataus3, prosenttiSpeed);
    } else {
        setTimeout(() => {
            latausProsentti = 0;
            i = 0;
            pohjaTeksti = "";
            phase3Ele.innerHTML += "<br><b>> NETWORK: STABLE</b>";
            setTimeout(siirryPhase4, vaiheViive);
        }, statusViive);
    }
}
// Jälleen phase vaihto
function siirryPhase4() {
    phase3Ele.style.display = "none";
    phase4Ele.style.visibility = "visible";

    if (i === 0) { phase4Ele.innerHTML += "<br><br>"; }

    if (i < txt10.length) {
        phase4Ele.innerHTML += txt10.charAt(i);
        i++;
        setTimeout(siirryPhase4, kirjoitusNopeus);
    } else {
        i = 0;
        phase4Ele.innerHTML += "<br>";
        setTimeout(tulostaTxt11, riviViive);
    }
}
function tulostaTxt11() {
    if (i < txt11.length) {
        phase4Ele.innerHTML += txt11.charAt(i);
        i++;
        setTimeout(tulostaTxt11, kirjoitusNopeus);
    } else {
        i = 0;
        phase4Ele.innerHTML += "<br>";
        setTimeout(tulostaTxt12, riviViive);
    }
}
function tulostaTxt12() {
    if (i < txt12.length) {
        phase4Ele.innerHTML += txt12.charAt(i);
        i++;
        setTimeout(tulostaTxt12, kirjoitusNopeus);
    } else {
        pohjaTeksti = phase4Ele.innerHTML;
        setTimeout(prosenttiLataus4, 200);
    }
}
// Prosenttilataus — Phase 4
function prosenttiLataus4() {
    if (latausProsentti <= 100) {
        phase4Ele.innerHTML = pohjaTeksti + ' ' + latausProsentti + '%';
        latausProsentti++;
        setTimeout(prosenttiLataus4, prosenttiSpeed);
    } else {
        setTimeout(() => {
            latausProsentti = 0;
            i = 0;
            pohjaTeksti = "";
            phase4Ele.innerHTML += "<br><b>> CALIBRATION: COMPLETE</b>";
            setTimeout(siirryPhase5, vaiheViive);
        }, statusViive);
    }
}
function siirryPhase5() {
    phase4Ele.style.display = "none";
    phase5Ele.style.visibility = "visible";

    if (i === 0) phase5Ele.innerHTML += "<br><br>";

    if (i < txt13.length) {
        phase5Ele.innerHTML += txt13.charAt(i);
        i++;
        setTimeout(siirryPhase5, kirjoitusNopeus);
    } else {
        i = 0;
        phase5Ele.innerHTML += "<br>";
        setTimeout(tulostaTxt14, riviViive);
    }
}
function tulostaTxt14() {
    if (i < txt14.length) {
        phase5Ele.innerHTML += txt14.charAt(i);
        i++;
        setTimeout(tulostaTxt14, kirjoitusNopeus);
    } else {
        i = 0;
        phase5Ele.innerHTML += "<br>";
        setTimeout(tulostaTxt15, riviViive);
    }
}
function tulostaTxt15() {
    if (i < txt15.length) {
        phase5Ele.innerHTML += txt15.charAt(i);
        i++;
        setTimeout(tulostaTxt15, kirjoitusNopeus);
    } else {
        pohjaTeksti = phase5Ele.innerHTML;
        setTimeout(prosenttiLataus5, 200);
    }
}
// Prosenttilataus — Phase 5
function prosenttiLataus5() {
    if (latausProsentti <= 100) {
        phase5Ele.innerHTML = pohjaTeksti + ' ' + latausProsentti + '%';
        latausProsentti++;
        setTimeout(prosenttiLataus5, prosenttiSpeed);
    } else {
        setTimeout(() => {
            latausProsentti = 0;
            i = 0;
            pohjaTeksti = "";
            phase5Ele.innerHTML += "<br><b>> SYSTEM_ONLINE. AWAITING_INPUT.</b>";
            naytaNeuralLinkBtn();
        }, statusViive);
    }
}


// Näyttää ESTABLISH NEURAL LINK napin sekvenssin päätyttyä
function naytaNeuralLinkBtn() {
    const btn = document.getElementById("neural-link-btn");

    // Pieni tauko ennen fadea
    setTimeout(() => {

        // Fadeaa phase5 teksti pois
        phase5Ele.style.transition = "opacity 0.8s ease-out";
        phase5Ele.style.opacity = "0";

        // Kun phase5 on pois, tuodaan nappi fade-inilla
        setTimeout(() => {
            phase5Ele.style.display = "none";

            if (btn) {
                btn.style.display = "block";
                requestAnimationFrame(() => btn.classList.add("pulse-aktiivinen"));

                btn.onclick = () => {
                    btn.style.backgroundColor = "#00FF9F";
                    btn.style.color = "#000";
                    avaaMainHud();
                };
            }
        }, 900); // odotellaan fade-out loppuun

    }, 800); // tauko ennen faden alkua
}


// Piilottaa boot-screenin ja tuo päänäkymän näkyviin
function avaaMainHud() {
    const bootScreen = document.getElementById("boot-screen");
    const mainContent = document.getElementById("main-content");

    // Häivytetään boot-screen pois
    setTimeout(() => {
        bootScreen.style.transition = "opacity 1.5s ease-out";
        requestAnimationFrame(() => {
            bootScreen.style.opacity = "0";
        });
    }, 50);

    // Tuodaan päänäkymä näkyviin
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

    // Käynnistetään neuroverkkoanimaatio taustalle
    kaynnistaNeuroverkko();

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


// Avaa projekti-popup ikkunan ja täyttää sen datalla
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


// Sulkee projekti-popup ikkunan
window.closeProject = function() {
    const win = document.getElementById("project-display");
    win.classList.remove("active");
    const card = document.querySelector(".unit-card.sliding-out");
    if (card) {
        setTimeout(() => {
            card.classList.remove("sliding-out")
        }, 400);
    }
    setTimeout(() => { win.style.display = "none"; }, 400);
};


// Projektikorttien klikkaus & salauksen purku
document.addEventListener("DOMContentLoaded", () => {
    const unit01 = document.getElementById("unit-01");

    unit01.addEventListener("click", function() {

        // Jos kortti on jo purettu -> vedetään ulos ja avataan ikkuna
        if (this.classList.contains("extracted")) {
            this.classList.add("sliding-out");

            setTimeout(() => {
                window.openProjectWindow("unit-01");
            }, 800);
            return;
        }

        // Estetään uusi klikkaus purun aikana
        if (this.classList.contains("decrypting")) return;
        
        this.classList.add("decrypting");
        const statusText = this.querySelector(".status-text");
        const actionText = this.querySelector(".unit-action");
        let progress = 0;
        const targetName = "WASTELAND_JOURNAL";

        // Simuloidaan salauksen purkua prosenteilla
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


    // Projektiekorttien salauksen purku ja scramble efekti paljastaa projektin nimen
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


// Neuroverkko partikkelianimaatio
const NEURO_ASETUKSET = {
    // tässä voi säätää partikkelien asetuksia
    tiheys: 20000,
    nopeusMin: 0.15,
    nopeusMax: 0.55,
    partikkeliKoko: 2.0,  //pikseliä
    yhteysEtaisyys: 140,  // pikseliä
    partikkeliVari: "0, 255, 159",
    viivaVari: "0, 255, 159",
    partikkeliOpacity: 0.7,
    viivaOpacityMax: 1,  // Maksimi opacity, himmenee etäisyyden mukaan
    viivaPaksuus: 0.6, //pikseliä
};
// Sisäiset muuttujat neuroverkkoon
let neuroCanvas = null;
let neuroCtx = null;
let neuroAnimaatioId = null;
let partikkelit = [];
let neuroAktiivinen = false;
// Luo yhden partikkelin satunnaisella sijainnilla ja nopeudella
function luoPartikkeli(leveys, korkeus) {
    const nopeus = NEURO_ASETUKSET.nopeusMin + Math.random() * (NEURO_ASETUKSET.nopeusMax - NEURO_ASETUKSET.nopeusMin);
    const kulma = Math.random() * Math.PI * 2;

    return {
        x: Math.random() * leveys,
        y: Math.random() * korkeus,
        vx: Math.cos(kulma) * nopeus,
        vy: Math.sin(kulma) * nopeus,
    };
}
// Alustaa partikkelit ruudun koon mukaan
function alustaPartikkelit() {
    const leveys = neuroCanvas.width;
    const korkeus = neuroCanvas.height;
    const maara = Math.floor((leveys * korkeus) / NEURO_ASETUKSET.tiheys);

    partikkelit = Array.from({ length: maara }, () => luoPartikkeli(leveys, korkeus));
}
// Piirtää yhden animaatioruudun - partikkelit + yhteyslinjat
function piirraNeuroRuutu() {
    const ctx = neuroCtx;
    const leveys = neuroCanvas.width;
    const korkeus = neuroCanvas.height;
    const etMax = NEURO_ASETUKSET.yhteysEtaisyys;
    const etMax2 = etMax * etMax;

    ctx.clearRect(0, 0, leveys, korkeus);

    // Päivitetään partikkelian sijainnit
    for (const p of partikkelit) {
        p.x += p.vx;
        p.y += p.vy;

        // Pomppu reunoilta, käännetään suunta
        if (p.x < 0)        { p.x = 0; p.vx *= -1; }
        if (p.x > leveys)   { p.x = leveys; p.vx *= -1; }
        if (p.y < 0)        { p.y = 0; p.vy *= -1; }
        if (p.y > korkeus)  { p.y = korkeus; p.vy *= -1;}
    }

    // Piirretään yhteyslinjat
    for (let a = 0; a < partikkelit.length; a++) {
        for (let b = a + 1; b < partikkelit.length; b++) {
            const dx = partikkelit[a].x - partikkelit[b].x;
            const dy = partikkelit[a].y - partikkelit[b].y;
            const dist2 = dx * dx + dy * dy;

            if (dist2 > etMax2) continue;

            // Opacity himmenee lineaarisesti etäisyyden mukaan
            const suhde = 1 - Math.sqrt(dist2) / etMax;
            const alpha = suhde * NEURO_ASETUKSET.viivaOpacityMax;

            ctx.beginPath();
            ctx.moveTo(partikkelit[a].x, partikkelit[a].y);
            ctx.lineTo(partikkelit[b].x, partikkelit[b].y);
            ctx.strokeStyle = `rgba(${NEURO_ASETUKSET.viivaVari}, ${alpha})`;
            ctx.lineWidth = NEURO_ASETUKSET.viivaPaksuus;
            ctx.stroke();
        }
    }

    // Piirretään partikkelit
    for (const p of partikkelit) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, NEURO_ASETUKSET.partikkeliKoko, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${NEURO_ASETUKSET.partikkeliVari}, ${NEURO_ASETUKSET.partikkeliOpacity})`;
        ctx.fill();
    }
}
// Pääanimaatiosilmukka
function neuroSilmukka() {
    if (!neuroAktiivinen) return;
    piirraNeuroRuutu();
    neuroAnimaatioId = requestAnimationFrame(neuroSilmukka);
}
// Käynnistää neuroverkkoanimaation - kutsutaan kaynistaHudElemementit():stä
function kaynnistaNeuroverkko() {
    neuroCanvas = document.getElementById("neuro-canvas");
    if (!neuroCanvas) return;
    neuroCtx = neuroCanvas.getContext("2d");

    neuroCanvas.width = window.innerWidth;
    neuroCanvas.height = window.innerHeight;

    alustaPartikkelit();

    neuroAktiivinen = true;
    neuroSilmukka();

    // Fade-in CSS-luokan avulla
    requestAnimationFrame(() => neuroCanvas.classList.add("aktiivinen"));

    // Uudelleen piirto kun ruudun koko muuttuu
    window.addEventListener("resize", () => {
        neuroCanvas.width = window.innerWidth;
        neuroCanvas.height = window.innerHeight;
        alustaPartikkelit();
    });
}


// Tapahtuma ketju sivuun latauksen yhteydessä
window.onload = () => {
    
    //PÄIVITETÄÄN NYKYINEN VUOSI FOOTERIIN
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Kutsutaan funktioiden ketjua kaynnistys sekvenssiin
    kaynnistysSekvenssi();
};