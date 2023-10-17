

document.querySelector(".admin_name").innerText = `${JSON.parse(localStorage.getItem("loginGuess")).name}`;

function logout() {
    localStorage.removeItem('loginGuess')
    window.location.href="/Pages/index.html"
}

function hashPassword(passwordString) {
    passwordString = `**${passwordString}##`
    let hashPassword = "";
    for(let i in passwordString) { 
        hashPassword += passwordString.charCodeAt(i);
    }
    return hashPassword * 2 * 3 * 4
}

function resetPassword(event) {
    event.preventDefault();

    let passReset = event.target.pass_reset.value;
    let guessList = JSON.parse(localStorage.getItem("guessList") ?? "[]");

    guessList = guessList.map((guess) => {
        if(guess.name == passReset) {
            return {
                ...guess,
                password: hashPassword("123")
            }
        } else {
            return guess
        }
    });
    localStorage.setItem("guessList", JSON.stringify(guessList))
    renderAccounts(guessList)
    alert("Reset succesful!")
}

function renderAccounts(array) {
    let list = document.querySelector(".table_body")
    let item = ``;
    
    for(let i in array) {
        item +=`
            <tr>
                <td style="width: 30%;">${array[i].name}</td>
                <td style="width: 50%;">${array[i].password}</td>
                <td style="width: 20%;">${array[i].role}</td>
            </tr>
        `;
    }
    list.innerHTML = item;
}

renderAccounts(JSON.parse(localStorage.getItem("guessList")))