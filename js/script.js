// --- Käynnistys sekvenssi ---
let vaiheNumero = 0; // Seuraa mikä vaihe (0-4) on menossa
let riviNumero = 0; // Seuraa monesko rivi on menossa
let merkkiIndeksi = 0; // Seuraa monesko kirjain rivissä on kirjoitettu
let latausProsentti = 0; // Pitää kirjaa prosenttilatauksessa
let kirjoitusnopeus = 35;
let riviviive = 100;
let vaiheviive = 500;
let latausNopeus = 20;
let otsikkoVari = "#00FFFF";

// Käynnistys sekvenssin vaiheet
const vaiheet = [
    {
        otsikko: "PHASE_01/05: SYST_PWR_INIT",
        rivit: ["> INITIALIZING_FUSION_CELL...", "> VOLTAGE_STABLE: 1.21GW", "> COOLANT_FLOW: OPTIMAL", "> HARDWARE_INTEGRITY: %%"],
        loppukuittaus: "> POWER_CORE: ONLINE"
    },
    {
        otsikko: "PHASE_02/05: NEURAL_SYNC",
        rivit: ["> CONNECTING_CORTEX...", "> CPU_CORES: 256_ACTIVE", "> SYNAPTIC_LINKS: ESTABLISHED", "> NEURAL_LATENCY: %ms"],
        loppukuittaus: "> NEURAL_LINK: STABLE"
    },
    {
        otsikko: "PHASE_03/05: OPTIC_CALIB",
        rivit: ["> OPTIC_SENSORS: CALIBRATING...", "> THERMAL_VISION: ONLINE", "> AUDITORY_BUFFERS: CLEARED", "> ENVIRONMENT_MAPPING: %%"],
        loppukuittaus: "> SENSORS: ACTIVE"
    },
    {
        otsikko: "PHASE_04/05: DATA_DECRYPT",
        rivit: ["> DETECTING_EXTERNAL_SIGNAL...", "> ENCRYPTED_DATA_STREAM_FOUND", "> ATTEMPTING_DECRYPTION...", "> DECRYPTION_PROGRESS: %%"],
        loppukuittaus: "> VAULT_OPENED: PROJECT_ACCESS_GRANTED"
    },
    {
        otsikko: "PHASE_05/05: CORE_AWAKE",
        rivit: ["> LOADING_PERSONALITY_MATRIX...", "> MEMORY_RECALL: ACTIVE", "> SYSTEM_STABILITY: %%"],
        loppukuittaus: "> WELCOME_USER. SELECT_PROJECT_TO_BEGIN"
    }
];

// --- Päämoottori ---
function kaynnistaSekvenssi() {
    const nayttoElementti = document.getElementById("power-core");
    const silmaElementti = document.querySelector('.cyber-eye');
    const nykyinenVaihe = vaiheet[vaiheNumero];

    // Silmän tilan päivitys
    if (vaiheNumero >= 3 && silmaElementti) {
        silmaElementti.style.animation = "eye-pulse 4s infinite ease-in-out";
        silmaElementti.style.opacity = "0.95";
    }

    // --- Otsikoiden kirjoittaminen sekvenssissä ---
    if (nayttoElementti.innerHTML === "" || nayttoElementti.innerHTML === "<br>") {
        nayttoElementti.innerHTML = `<span style="color: ${otsikkoVari}; font-weight: bold;">${nykyinenVaihe.otsikko}</span><br><br>`;
    }

    // --- Rivien käsittely ---
    if (riviNumero < nykyinenVaihe.rivit.length) {
        let tekstiRivi = nykyinenVaihe.rivit[riviNumero];

        // Latausanimaatio
        if (tekstiRivi.includes("%")) {
            if (latausProsentti <= 100) {
                let rivitRuudulla = nayttoElementti.innerHTML.split("<br>");

                // Phase 2 latausprosentit
                let naytaArvo = nykyinenVaihe.otsikko.includes("02") ? (100 - (latausProsentti * 0.99)).toFixed(1) : latausProsentti;

                rivitRuudulla[rivitRuudulla.length - 1] = tekstiRivi.replace("%", naytaArvo);
                nayttoElementti.innerHTML = rivitRuudulla.join("<br>");

                latausProsentti += 2;
                setTimeout(kaynnistaSekvenssi, latausNopeus);
            } else {
                nayttoElementti.innerHTML += "<br>";
                latausProsentti = 0;
                riviNumero++;
                setTimeout(kaynnistaSekvenssi, riviviive);
            }
        }
        // Typewriter
        else if (merkkiIndeksi < tekstiRivi.length) {
            nayttoElementti.innerHTML += tekstiRivi.charAt(merkkiIndeksi++);
            setTimeout(kaynnistaSekvenssi, kirjoitusnopeus);
        }
        // Rivi valmis
        else {
            nayttoElementti.innerHTML += "<br>";
            riviNumero++;
            merkkiIndeksi = 0;
            setTimeout(kaynnistaSekvenssi, riviviive)
        }
    }
    // Vaiheen lopetus ja siirtymä
    else {
        if (merkkiIndeksi === 0) nayttoElementti.innerHTML += "<br>";

        if (merkkiIndeksi < nykyinenVaihe.loppukuittaus.length) {
            nayttoElementti.innerHTML += nykyinenVaihe.loppukuittaus.charAt(merkkiIndeksi++);
            setTimeout(kaynnistaSekvenssi,kirjoitusnopeus);
        } else {
            vaiheNumero++;
            if (vaiheNumero < vaiheet.length) {
                setTimeout(() => {
                    nayttoElementti.innerHTML = "";
                    riviNumero = 0;
                    merkkiIndeksi = 0;
                    latausProsentti = 0;
                    kaynnistaSekvenssi();
                }, vaiheviive)
            }
        }
    }
}

window.onload = () => {
    const silma = document.querySelector('.cyber-eye');
    const overclockBtn = document.getElementById("overclock-hint");
    if (silma) silma.classList.add('eye-active');

    setTimeout(() => {
        if (overclockBtn) overclockBtn.style.display = "block";
    }, 1000);

    if (overclockBtn) {
        overclockBtn.onclick = () => {
            kirjoitusnopeus = 1;
            riviviive = 1;
            vaiheviive = 1;
            latausNopeus = 1;
            otsikkoVari = "#FF0000";
            overclockBtn.classList.add('overclock-active');
            overclockBtn.innerText = "SYSTEM_OVERCLOCKED";
            overclockBtn.style.color = "#FF0000";
            overclockBtn.style.borderColor = "#FF0000";

            const naytto = document.getElementById("power-core");
            if (naytto) {
                naytto.style.color = "#FF0000";
                naytto.style.textShadow = "0 0 10px #FF0000";
            }

            const silma = document.querySelector('.cyber-eye');
            if (silma) {
                silma.classList.remove('eye-active');
                silma.style.opacity = "1";
            }
        };
    }
    kaynnistaSekvenssi();
}