let users = { "Admin": { password: "Root", group: "Administrator" } };

// Boot screen
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("bootScreen").style.display = "none";
        document.getElementById("lockScreen").style.display = "flex";
    }, 2000);
});

// Login
function checkPassword(event){
    if(event.key === "Enter"){
        let input = document.getElementById("passwordInput").value;
        if(users["Admin"].password === input){
            document.getElementById("lockScreen").style.display = "none";
            document.getElementById("desktop").style.display = "flex";
        } else alert("Incorrect password!");
    }
}

// Start/Shutdown menus
function toggleStartMenu(){ 
    const m = document.getElementById("startMenu"); 
    m.style.display = m.style.display==="flex"?"none":"flex"; 
}
function toggleShutdownMenu(){ 
    const m = document.getElementById("shutdownMenu"); 
    m.style.display = m.style.display==="flex"?"none":"flex"; 
}
function shutdownOS(){ alert("Shutdown triggered!"); }
function restartOS(){ alert("Restart triggered!"); }

// Open apps
function openApp(id){
    document.querySelectorAll(".app").forEach(a=>a.style.display="none");
    document.getElementById(id).style.display="flex";
}
