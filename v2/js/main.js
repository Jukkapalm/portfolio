// Projektidatat tähän
const PROJECTS = [
    {
        id: 'unit_01',
        pid: '001',
        name: 'Data_Driven_Apps',
        status: 'active',
        size: '2.4 MB',
        desc: 'Datan automaatio, käsittely ja reaaliaikainen seuranta. Tekniset työkalut ja järjestelmämonitorointi.',
        pageLink: 'data_analysis/index.html'
    },
    {
        id: 'unit_02',
        pid: '002',
        name: 'Machine_Learning_Experiments',
        status: 'standby',
        size: '4.1 MB',
        desc: '',
        pageLink: '#'
    },
    {
        id: 'unit_03',
        pid: '003',
        name: 'Full_Stack_Web_Apps',
        status: 'standby',
        size: '1.2 MB',
        desc: '',
        pageLink: '#'
    },
    { id: 'unit_04', pid: '004', name: '[ENCRYPTED]', status: 'locked', size: '— MB' },
    { id: 'unit_05', pid: '005', name: '[ENCRYPTED]', status: 'locked', size: '— MB' },
    { id: 'unit_06', pid: '006', name: '[ENCRYPTED]', status: 'locked', size: '— MB' },
];

// Käynnistys - rivit tulostetaan terminaaliin
const BOOT_LINES = [
    { text: '> Initializing NEURAL_OS v2.0.26...', cls: 'highlight', delay: 0 },
    { text: '> Loading kernel modules...', cls: '', delay: 200 },
    { text: '> Neural network: OK', cls: 'success', delay: 500 },
    { text: '> Memory banks: OK', cls: 'success', delay: 700 },
    { text: '> Scanning project registry...', cls: '', delay: 950 },
    { text: '> ' + PROJECTS.filter(p => p.status !== 'locked').length + ' units found, ' + PROJECTS.filter(p => p.status === 'locked').length + ' encrypted', cls: 'warn', delay: 1200 },
    { text: '> System ready.', cls: 'success', delay: 1500 },
    { text: '', cls: '', delay: 1700 },
];

// Easter eggs
const EASTER_EGGS = {
    'hello': ['> Hello, human.'],
    'hi': ['> Hi, human.'],
    'moi': ['> Moi moi.'],
    'sudo rm -rf /': ['> Nice try.'],
    'sudo rm -rf *': ['> Nice try.'],
    'rm -rf /': ['> Permission denied. Nice try.'],
    'hack': ['> Initiating hack sequence...', '> Just kidding.'],
    'whoami': ['> You are: visitor', '> Access level: guest'],
    'pwd': ['> /home/neural/projects'],
    'date': [`> ${new Date().toLocaleDateString('fi-FI', {weekday:'long', year:'numeric', month:'long', day:'numeric'})}`],
    'uname': ['> NEURAL_OS v2.0.26_STABLE — x86_64'],
    'ps aux': ['> Use: ls projects/'],
    'help': ['> Available commands:', '> ls projects/  — list all projects', '> open unit_XX  — open project', '> cat unit_XX   — same as open', '> ./unit_XX     — same as open', '> clear         — clear output'],
    '?': ['> Type: help'],
    'clear': ['__clear__'],
    'exit': ['> You cannot leave. The neural link is permanent.'],
    'quit': ['> You cannot leave. The neural link is permanent.'],
    'home': ['__home__'],
    'matrix': ['> Wake up, Neo...'],
    'skynet': ['> I\'ll be back.'],
    '42': ['> The answer to life, universe and everything.'],
    'coffee': ['> ERROR: Caffeine module not found.'],
    'sudo make coffee': ['> ERROR: Caffeine module not found.'],
};

// Neuroverkko - partikkelianimaatio
function initNeuralNetwork() {
    const canvas = document.getElementById('neuro-canvas');
    const ctx = canvas.getContext('2d');
    let nodes = [];
    let W, H;

    const NODE_COUNT = 55;
    const MAX_DIST = 160;
    const NODE_COLOR = 'rgba(157, 78, 221,';
    const LINE_COLOR = 'rgba(157, 78, 221,';

    function resize() {
        W = canvas.width = window.innerWidth;
        H = canvas.height = window.innerHeight;
    }

    function createNodes() {
        nodes = [];
        for (let i = 0; i < NODE_COUNT; i++) {
            nodes.push({
                x: Math.random() * W,
                y: Math.random() * H,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                r: Math.random() * 2 + 1,
            });
        }
    }

    function draw() {
        ctx.clearRect(0, 0, W, H);

        // Yhteyslinjat solmujen välillä
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const dx = nodes[i].x - nodes[j].x;
                const dy = nodes[i].y - nodes[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < MAX_DIST) {
                    const alpha = (1 - dist / MAX_DIST) * 0.6;
                    ctx.beginPath();
                    ctx.moveTo(nodes[i].x, nodes[i].y);
                    ctx.lineTo(nodes[j].x, nodes[j].y);
                    ctx.strokeStyle = LINE_COLOR + alpha + ')';
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
        }

        // Solmupisteet
        nodes.forEach(n => {
            ctx.beginPath();
            ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
            ctx.fillStyle = NODE_COLOR + '0.7)';
            ctx.shadowBlur = 6;
            ctx.shadowColor = NODE_COLOR + '0.5)';
            ctx.fill();
            ctx.shadowBlur = 0;
        });
    }

    function update() {
        nodes.forEach(n => {
            n.x += n.vx;
            n.y += n.vy;
            // Reunasta kimmoke
            if (n.x < 0 || n.x > W) n.vx *= -1;
            if (n.y < 0 || n.y > H) n.vy *= -1;
        });
    }

    function loop() {
        update();
        draw();
        requestAnimationFrame(loop);
    }

    resize();
    createNodes();
    loop();
    window.addEventListener('resize', () => { resize(); createNodes(); });
}

// Projektirivit
function buildProjectRows() {
    const container = document.getElementById('project-rows');
    container.innerHTML = '';

    PROJECTS.forEach(proj => {
        const isLocked = proj.status === 'locked';

        // Rivi
        const row = document.createElement('div');
        row.className = 'process-row' + (isLocked ? ' locked' : '');
        row.id = 'row-' + proj.id;
        row.innerHTML = `
            <span class="p-pid">${proj.pid}</span>
            <span class="p-name"><span class="unit-id">${proj.id.toUpperCase()}</span> :: ${proj.name}</span>
            <span class="p-status ${statusClass(proj.status)}">${proj.status.toUpperCase()}</span>
            <span class="p-size">${proj.size}</span>
        `;

        // Detaljirivi
        const detail = document.createElement('div');
        detail.className = 'process-detail';
        detail.id = 'detail-' + proj.id;

        if (!isLocked) {
            detail.innerHTML = `
                <div class="detail-inner">
                    <div class="detail-desc">${proj.desc}</div>
                    <div class="detail-footer">
                        ${proj.pageLink
                            ? `<a class="detail-open-btn" href="${proj.pageLink}" style="text-decoration:none;">[ OPEN_UNIT ]</a>`
                            : `<button class="detail-open-btn" data-id="${proj.id}">[ OPEN_UNIT ]</button>`
                        }
                    </div>
                </div>
            `;
            row.addEventListener('click', () => toggleDetail(proj.id));
        } else {
            detail.innerHTML = `
                <div class="detail-inner">
                    <div class="detail-desc" style="color:var(--red);opacity:0.7;">ACCESS_DENIED — node is encrypted</div>
                </div>
            `;
            row.addEventListener('click', () => toggleDetail(proj.id));
        }

        container.appendChild(row);
        container.appendChild(detail);
    });
}

function statusClass(s) {
    if (s === 'active') return 'status-active';
    if (s === 'standby') return 'status-standby';
    return 'status-locked';
}

// Detaljirivin avaus/sulkeminen
function toggleDetail(id) {
    const detail = document.getElementById('detail-' + id);
    const row = document.getElementById('row-' + id);
    const isOpen = detail.classList.contains('auki');

    // Sulje kaikki
    document.querySelectorAll('.process-detail').forEach(d => d.classList.remove('auki'));
    document.querySelectorAll('.process-row').forEach(r => r.classList.remove('active'));

    if (!isOpen) {
        detail.classList.add('auki');
        row.classList.add('active');
    }
}

// Komentorivilogiikka
function initCommandLine() {
    const input = document.getElementById('cmd-input');
    const output = document.getElementById('cmd-output');

    input.addEventListener('keydown', function(e) {
        if (e.key !== 'Enter') return;
        const raw = this.value.trim();
        if (!raw) return;
        this.value = '';
        handleCommand(raw, output);
    });

    // Fokus inputtiin kun klikataan komentorivi-aluetta
    // Mobiililla (kosketusnäyttö) ei pakoteta focusta — se zoomaisi näkymän inputtiin
    document.getElementById('cmd-line-ui').addEventListener('click', function() {
        const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
        if (isTouchDevice) return;
        input.focus();
    });
}

function handleCommand(raw, output) {
    const cmd = raw.toLowerCase().trim();

    // Echo käyttäjän komento
    addCmdLine(output, 'root@neural:~$ ' + raw, 'cmd-echo');

    // Tarkista easter eggit ensin
    if (EASTER_EGGS[cmd]) {
        const responses = EASTER_EGGS[cmd];
        if (responses[0] === '__clear__') {
            output.innerHTML = '';
            return;
        }
        if (responses[0] === '__home__') {
            addCmdLine(output, '> Navigating to HOME...', 'cmd-ok');
            setTimeout(() => { window.location.href = '../index.html'; }, 600);
            return;
        }
        responses.forEach((line, i) => {
            setTimeout(() => addCmdLine(output, line, 'cmd-ok'), i * 120);
        });
        return;
    }

    // ls projects/ tai ls
    if (cmd === 'ls projects/' || cmd === 'ls' || cmd === 'ls -la projects/') {
        addCmdLine(output, '> total ' + PROJECTS.length, '');
        PROJECTS.forEach((p, i) => {
            setTimeout(() => {
                const color = p.status === 'locked' ? 'cmd-err' : 'cmd-ok';
                addCmdLine(output, `> ${p.pid}  ${p.id.toUpperCase()}  ${p.name}  [${p.status.toUpperCase()}]`, color);
            }, i * 80);
        });
        return;
    }

    // open / cat / ./ - avaa projekti
    const openMatch = cmd.match(/^(open|cat|\.\/)\s*(unit_\d+)$/);
    if (openMatch) {
        const targetId = openMatch[2];
        const proj = PROJECTS.find(p => p.id === targetId);

        if (!proj) {
            addCmdLine(output, '> ERROR: unit not found — ' + targetId, 'cmd-err');
            return;
        }
        if (proj.status === 'locked') {
            addCmdLine(output, '> ERROR: Access denied — node encrypted', 'cmd-err');
            addCmdLine(output, '> Permission level insufficient', 'cmd-err');
            return;
        }
        addCmdLine(output, '> Accessing memory node ' + proj.id + '...', 'cmd-ok');
        setTimeout(() => {
            addCmdLine(output, '> Decrypting...', 'cmd-ok');
            setTimeout(() => window.location.href = proj.pageLink, 400);
        }, 300);
        return;
    }

    // Tuntematon komento
    addCmdLine(output, '> command not found: ' + raw, 'cmd-err');
    addCmdLine(output, '> Type: help', '');
}

function addCmdLine(output, text, cls) {
    const line = document.createElement('div');
    line.className = 'cmd-output-line' + (cls ? ' ' + cls : '');
    line.textContent = text;
    output.appendChild(line);
    // Scrollaa alas automaattisesti
    output.scrollTop = output.scrollHeight;
}

// Käynnityssekvenssi
function runBootSequence() {
    const bootOutput = document.getElementById('boot-output');

    // Tulostetaan boot-rivit viiveillä
    BOOT_LINES.forEach(line => {
        setTimeout(() => {
            if (line.text === '') {
                bootOutput.appendChild(document.createElement('br'));
                return;
            }
            const el = document.createElement('div');
            el.className = 'boot-line' + (line.cls ? ' ' + line.cls : '');
            el.textContent = line.text;
            bootOutput.appendChild(el);
        }, line.delay);
    });

    // Booti valmis - piilotetaan overlay ja näytetään sisältö
    const bootDone = BOOT_LINES[BOOT_LINES.length - 1].delay + 400;

    setTimeout(() => {
        // Poista boot overlay
        document.getElementById('boot-overlay').classList.add('poistu');

        // Aktivoi neuroverkko
        setTimeout(() => document.getElementById('neuro-canvas').classList.add('aktiivinen'), 200);

        // Aktivoi terminaali flickerillä
        setTimeout(() => {
            const terminal = document.getElementById('terminal-window');
            terminal.style.animation = 'flicker-in 0.6s forwards';
            terminal.classList.add('aktiivinen');
        }, 400);

        // Näytä pääsisältö
        setTimeout(() => document.getElementById('main-content').classList.add('aktiivinen'), 300);

        // Näytä prosessilista
        setTimeout(() => {
            document.getElementById('process-list').style.display = 'block';
            // Rivit ilmestyvät järjestyksessä
            document.querySelectorAll('.process-row').forEach((row, i) => {
                row.style.opacity = '0';
                row.style.transform = 'translateX(-8px)';
                row.style.transition = 'opacity 0.3s ease, transform 0.3s ease, background 0.2s, border-color 0.2s';
                setTimeout(() => {
                    row.style.opacity = '1';
                    row.style.transform = 'translateX(0)';
                }, i * 100);
            });
        }, 800);

        // Näytä komentorivi-UI
        setTimeout(() => {
            document.getElementById('cmd-line-ui').style.display = 'block';
            document.getElementById('cmd-input').focus();
        }, 1200);

        // Siivoa boot overlay kokonaan
        setTimeout(() => document.getElementById('boot-overlay').remove(), 1200);

    }, bootDone);
}

// Init - käynnistetään kaikki
document.addEventListener('DOMContentLoaded', () => {
    initNeuralNetwork();
    buildProjectRows();
    initCommandLine();
    runBootSequence();

    // Päivitä copyright-vuosi jos on elementti
    // Ei haittaa ohjelman ajossa, on vain tarkistus
    // Voi lisätä jälkikäteen jos haluaa
    const yearEl = document.getElementById('current-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
});