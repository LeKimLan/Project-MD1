

if(JSON.parse(localStorage.getItem("loginGuess") ?? "{}").role != "admin") {
    window.location.href= "../../../Pages/index.html";
} 

