// Dark / Light mode
const theme = document.querySelector("#themeBtn");

theme.onclick = () => {
    document.body.classList.toggle("dark");
    theme.textContent =
        document.body.classList.contains("dark") ? "☀️" : "🌙";
};

// Typing animation
const words = ["Web Developer", "Programmer", "Creative Learner"];
let i = 0;

setInterval(() => {
    document.querySelector("#typing").textContent = words[i];
    i = (i + 1) % words.length;
}, 1500);

// Project button
document.querySelector("#projectBtn").onclick = () => {
    document.querySelector("#projects").scrollIntoView({
        behavior: "smooth"
    });
};

// Project filter
document.querySelectorAll(".filter").forEach(btn => {
    btn.onclick = () => {
        document.querySelectorAll(".filter").forEach(b =>
            b.classList.remove("active")
        );

        btn.classList.add("active");

        document.querySelectorAll(".project").forEach(project => {
            project.style.display =
                btn.dataset.filter === "all" ||
                project.dataset.type === btn.dataset.filter
                    ? "block"
                    : "none";
        });
    };
});

// Mobile menu
document.querySelector("#menuBtn").onclick = () => {
    document.querySelector("#navLinks").classList.toggle("show");
};