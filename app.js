document.addEventListener("DOMContentLoaded", function () {
    const status = document.querySelector(".status");
    const description = document.querySelector(".status-card p");

    status.textContent = "READY";
    description.textContent =
        "Source code is ready for Jenkins Continuous Integration.";
});
