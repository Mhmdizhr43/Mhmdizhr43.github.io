// Mode Gelap/Terang
const toggleButton = document.getElementById("theme-toggle");

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        toggleButton.textContent = "☀️ Mode Terang";
    } else {
        toggleButton.textContent = "🌙 Mode Gelap";
    }
});

// Animasi Skill Bar
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".progress").forEach(bar => {
        bar.style.width = bar.getAttribute("data-width");
    });
});

// Form Submit Dummy
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Pesan telah dikirim!");
});
