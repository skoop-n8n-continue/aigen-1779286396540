// Multi-lingual greetings list for dynamic digital signage display
const greetings = [
    { title: "Hello World!", subtitle: "Bringing experiences to life with Skoop." },
    { title: "¡Hola Mundo!", subtitle: "Dando vida a las experiencias con Skoop." },
    { title: "Bonjour le monde!", subtitle: "Donner vie aux expériences avec Skoop." },
    { title: "Hallo Welt!", subtitle: "Erlebnisse zum Leben erwecken mit Skoop." },
    { title: "Ciao mondo!", subtitle: "Dare vita alle esperienze con Skoop." },
    { title: "Olá Mundo!", subtitle: "Dando vida a experiências com Skoop." },
    { title: "Привет, мир!", subtitle: "Воплощение опыта в жизнь вместе с Skoop." },
    { title: "你好，世界！", subtitle: "使用 Skoop 让体验生动起来。" },
    { title: "ハロー・ワールド！", subtitle: "Skoop で体験に命を吹き込みます。" },
    { title: "안녕하세요!", subtitle: "Skoop과 함께 경험을 현실로 만들어보세요." }
];

let currentGreetingIndex = 0;

// Update clock and date every second
function updateDateTime() {
    const timeDisplay = document.getElementById('time-display');
    const dateDisplay = document.getElementById('date-display');

    if (!timeDisplay || !dateDisplay) return;

    const now = new Date();

    // Format Time: HH:MM:SS
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;

    // Format Date: Wednesday, May 20, 2026
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateDisplay.textContent = now.toLocaleDateString('en-US', options);
}

// Rotate through the hello world greetings with a smooth cross-fade animation
function rotateGreetings() {
    const titleEl = document.getElementById('greeting-title');
    const subtitleEl = document.getElementById('greeting-subtitle');

    if (!titleEl || !subtitleEl) return;

    // Phase 1: Fade out current elements
    titleEl.classList.add('fade-out');
    subtitleEl.classList.add('fade-out');

    // Phase 2: After transition completes, change text and fade back in
    setTimeout(() => {
        currentGreetingIndex = (currentGreetingIndex + 1) % greetings.length;
        const current = greetings[currentGreetingIndex];

        titleEl.textContent = current.title;
        subtitleEl.textContent = current.subtitle;

        titleEl.classList.remove('fade-out');
        subtitleEl.classList.remove('fade-out');
        titleEl.classList.add('fade-in');
        subtitleEl.classList.add('fade-in');

        // Clean up animation classes
        setTimeout(() => {
            titleEl.classList.remove('fade-in');
            subtitleEl.classList.remove('fade-in');
        }, 500);
    }, 500);
}

// Generate animated background floating particles
function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Random size between 4px and 12px
        const size = Math.random() * 8 + 4;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        // Random horizontal start position
        particle.style.left = `${Math.random() * 100}%`;

        // Random animation duration (15s to 30s) and delay
        const duration = Math.random() * 15 + 15;
        const delay = Math.random() * -30; // Negative delay so particles start pre-scattered

        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;

        container.appendChild(particle);
    }
}

// Initialize components on DOM load
document.addEventListener('DOMContentLoaded', () => {
    // Initial clock update and timer setup
    updateDateTime();
    setInterval(updateDateTime, 1000);

    // Start greeting rotation loop (every 6 seconds)
    setInterval(rotateGreetings, 6000);

    // Create background floating particles
    createParticles();
});
