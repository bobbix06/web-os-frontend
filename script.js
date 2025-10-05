const backendURL = "https://webos-back-end.onrender.com";

// Boot Screen -> Lock Screen
setTimeout(() => {
    document.getElementById("bootScreen").style.display = "none";
    document.getElementById("lockScreen").style.display = "flex";
    updateTime();
}, 3000); // 3 sec boot

function updateTime() {
    const now = new Date();
    document.getElementById("lockTime").textContent = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    document.getElementById("lockDate").textContent = now.toLocaleDateString();
    setTimeout(updateTime, 1000);
}

// Login
async function checkPassword(event) {
    if(event.key === "Enter") {
        const username = "Admin"; // can be dynamic later
        const password = document.getElementById("passwordInput").value;
        try {
            const res = await fetch(`${backendURL}/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            });
            const data = await res.json();
            if(data.success) {
                document.getElementById("lockScreen").style.display = "none";
                document.getElementById("desktop").style.display = "flex";
            } else {
                alert("Incorrect password!");
            }
        } catch(err) {
            alert("Backend not reachable!");
            console.error(err);
        }
    }
}

// Start menu
function toggleStartMenu() {
    const menu = document.getElementById("startMenu");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
    menu.style.flexDirection = "column";
}

// Shutdown menu
function toggleShutdownMenu() {
    const menu = document.getElementById("shutdownMenu");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
    menu.style.flexDirection = "column";
}

function shutdownOS() { alert("Shutdown not implemented"); }
function restartOS() { alert("Restart not implemented"); }

// Open apps
function openApp(id) {
    document.querySelectorAll(".app").forEach(a => a.style.display="none");
    document.getElementById(id).style.display = "block";
}

// User management
async function addUser() {
    const username = prompt("Enter new username:");
    const password = prompt("Enter password:");
    const group = prompt("Enter user group (Normal/Administrator):");
    await fetch(`${backendURL}/addUser`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, group })
    });
    alert("User added!");
}

async function removeUser() {
    const username = prompt("Enter username to remove:");
    await fetch(`${backendURL}/removeUser`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username })
    });
    alert("User removed!");
}
