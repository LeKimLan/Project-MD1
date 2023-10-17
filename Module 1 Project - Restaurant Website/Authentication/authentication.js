renderNavbar();
renderFooter();

function hashPassword(passwordString) {
    passwordString = `**${passwordString}##`
    let hashPassword = "";
    for(let i in passwordString) { 
        hashPassword += passwordString.charCodeAt(i);
    }
    return hashPassword * 2 * 3 * 4
}

function register(event) {
    event.preventDefault();
    let newGuess = {
        id: Date.now() * Math.random(),
        name: event.target.name.value,
        password: hashPassword(event.target.password.value),
        role: "member"
    }

    if(event.target.password.value != event.target.password_confirm.value) {
        alert('password do not match!')
        return
    }

    if(newGuess.name.length < 3 || newGuess.name.length > 16) {
        alert("User name must be from 3 to 16 characters")
        return
    }

 

    let guessList = JSON.parse(localStorage.getItem('guessList')) || [];

    if(guessList.find(guess => guess.name == newGuess.name)) {
        alert("Username already exist!")
        return
    }

    guessList.push(newGuess)
    localStorage.setItem('guessList', JSON.stringify(guessList))
    window.location.href="../../Authentication/Users/login.html"
}

function login(event) {
    event.preventDefault();

    let guessLogin = {
        name: event.target.name.value,
        password: event.target.password.value,
    }

    let guessList = JSON.parse(localStorage.getItem('guessList')) || [];

    let guess = guessList.find(item => item.name == guessLogin.name);

    if(!guess) {
        alert('cannot find guess name!')
        return
    }

    if(guess.password != hashPassword(guessLogin.password)) {
        alert('Wrong password!')
        return
    }

    localStorage.setItem("loginGuess", JSON.stringify(guess))

    window.location.href="../../Pages/index.html"
}