let guessList = [];

function setDataToLocalStorage() {
    if(!localStorage.getItem("guessList")) {
        localStorage.setItem("guessList", JSON.stringify(guessList))
    }
}
setDataToLocalStorage()