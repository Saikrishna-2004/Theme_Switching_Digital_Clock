function updateClock() {
    const clock = document.getElementById("clock");
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, "0");
    const mins = String(now.getMinutes()).padStart(2, "0");
    const secs = String(now.getSeconds()).padStart(2, "0");

    clock.textContent = `${hours}:${mins}:${secs}`;
}

// Run every 1 second
setInterval(updateClock, 1000);
updateClock();

// Theme switching
const btn = document.getElementById("themeBtn");
let theme = "light";

btn.addEventListener("click", () => {
    theme = theme === "light" ? "dark" : "light";
    document.body.className = theme;
});
