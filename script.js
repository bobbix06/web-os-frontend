const backendURL = "https://your-backend.onrender.com"; // Replace with Render URL

// Boot animation
window.onload = () => {
    setTimeout(() => {
        document.getElementById("bootScreen").style.display="none";
        document.getElementById("lockScreen").style.display="flex";
    }, 3000); // 3s boot
};

// Lock screen login
async function checkPassword(event){
    if(event.key==="Enter"){
        let username = "Admin";
        let password = document.getElementById("passwordInput").value;
        let res = await fetch(`${backendURL}/api/login`, {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({username,password})
        });
        let data = await res.json();
        if(data.success){
            openDesktop();
        } else alert("Incorrect password!");
    }
}

function openDesktop(){
    let lock = document.getElementById("lockScreen");
    lock.style.opacity="0";
    setTimeout(()=>{
        lock.style.display="none";
        let desk = document.getElementById("desktop");
        desk.style.display="flex";
        setTimeout(()=>desk.style.opacity="1",100);
    },800);
}

// Apps
function openApp(id){
    document.querySelectorAll('.app').forEach(a=>a.style.display='none');
    document.getElementById(id).style.display='block';
}
function toggleStartMenu(){ let m=document.getElementById('startMenu'); m.style.display=(m.style.display==='block'?'none':'block'); }
function toggleShutdownMenu(){ let m=document.getElementById('shutdownMenu'); m.style.display=(m.style.display==='block'?'none':'block'); }
function shutdownOS(){ alert("Shutting down..."); }
function restartOS(){ alert("Restarting..."); }

// User management
async function addUser(){
    let username = prompt("Username?"); let password = prompt("Password?");
    await fetch(`${backendURL}/api/users`, {
        method:'POST', headers:{'Content-Type':'application/json'},
        body: JSON.stringify({username,password})
    });
    alert("User added!");
}
async function removeUser(){ alert("Remove user: feature pending backend update"); }
async function changePassword(){
    let username = prompt("Username?"); let password = prompt("New password?");
    await fetch(`${backendURL}/api/users/password`, {
        method:'PUT', headers:{'Content-Type':'application/json'},
        body: JSON.stringify({username,password})
    });
    alert("Password changed!");
}
