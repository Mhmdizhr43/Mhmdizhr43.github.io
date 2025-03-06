// Mode Gelap/Terang
const toggleButton = document.getElementById("theme-toggle");

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggleButton.textContent = document.body.classList.contains("dark-mode") 
        ? "☀️ Mode Terang" 
        : "🌙 Mode Gelap";
});

// Animasi Skill Bar
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".progress").forEach(bar => {
        bar.style.width = bar.dataset.width;
    });
});

// Form Submit Dummy
document.getElementById("contact-form")?.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Pesan telah dikirim!");
});
