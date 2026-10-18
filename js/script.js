const themeToggleBtn = document.querySelectorAll('.theme-toggle');

themeToggleBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        if (currentTheme === 'dark-theme') {
            document.documentElement.removeAttribute('data-theme');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark-theme');
        }
    });
});

const codeText = `class Developer {
    constructor () {
        this.name = "";
        this.techstack = "";
    }    
}

const newDeveloper = new Developer();

newDeveloper.name = "Jukka Palm";
newDeveloper.techstack = "JavaScript, Python, C#, SQL";

console.log("Developer name:", newDeveloper.name);
console.log("Devloper tech stack:", newDeveloper.techstack);`

const codeElement = document.getElementById('typewriterCode');
let index = 0;
const speed = 40;

function typeWriter() {
    if (!codeElement) return;

    if (index < codeText.length) {
        codeElement.textContent += codeText.charAt(index);
        index++;
        codeElement.scrollTop = codeElement.scrollHeight;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(() => {
            codeElement.textContent = '';
            codeElement.scrollTop = 0;
            index = 0;
            typeWriter();
        }, 4000);
    }
}

document.addEventListener('DOMContentLoaded', typeWriter);