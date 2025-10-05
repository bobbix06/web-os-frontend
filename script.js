let users = { "Admin": { password: "Root", group: "Administrator" } };
let backendURL = ""; // fill in your backend URL later

// Boot screen simulation
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("bootScreen").style.opacity = 0;
        setTimeout(() => {
            document.getElementById("bootScreen").style.display = "none";
            document.getElementById("lockScreen").style.display = "flex";
        }, 500);
    }, 2000); // boot delay
});

// Login check
function checkPassword(event) {
    if(event.key === "Enter") {
        let input = document.getElementById("passwordInput").value;
        if(input === users["Admin"].password){
            document.getElementById("lockScreen").style.display = "none";
            document.getElementById("desktop").style.display = "flex";
        } else alert("Incorrect password!");
    }
}

// Start/Shutdown menus
function toggleStartMenu(){
    const menu = document.getElementById("startMenu");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}
function toggleShutdownMenu(){
    const menu = document.getElementById("shutdownMenu");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}
function shutdownOS(){ alert("Shutdown triggered!"); }
function restartOS(){ alert("Restart triggered!"); }

// Open apps
function openApp(id){
    const apps = document.querySelectorAll(".app");
    apps.forEach(a => a.style.display = "none");
    document.getElementById(id).style.display = "flex";
}
