

document.querySelector(".admin_name").innerText = `${JSON.parse(localStorage.getItem("loginGuess")).name}`;

function logout() {
    localStorage.removeItem('loginGuess')
    window.location.href="/Pages/index.html"
}

function renderAdminMenu(array) {
    let menu = document.querySelector(".menu")
    let menuItem = ``;
    
    for(let i in array) {
        menuItem +=`
            <div class="item">
                <img class="item_image" src="${array[i].image}" alt="">
                <div class="item_text">
                    <div class="item_info">
                    <span class="item_name">${array[i].name}</span>
                    <span class="item_price">${Number(array[i].price)}</span>
                    </div>
                    <div class="item_manage">
                        <button class="order_btn">Edit</button>
                        <button class="order_btn" onclick="setItemAvailable(${array[i].id})">Add</button>
                        <button class="order_btn" onclick="setItemUnavailable(${array[i].id})">Remove</button>
                    </div>
                </div>
            </div>
        `;
    }
    menu.innerHTML = menuItem;
}

renderAdminMenu(JSON.parse(localStorage.getItem("menu")))

function addItem(event) {
    event.preventDefault()
    let newItem = {
        id: Date.now() * Math.random(),
        name: event.target.itemName.value,
        price: event.target.itemPrice.value,
        image: event.target.itemURL.value,
        status: "available",
    }
    let menu = JSON.parse(localStorage.getItem("menu"))
    menu.push(newItem)
    localStorage.setItem("menu", JSON.stringify(menu))
    renderAdminMenu(menu)
}

function setItemAvailable(itemID) {
    let menu = JSON.parse(localStorage.getItem("menu") ?? "[]")
    menu = menu.map((item) => {
        if(item.id == itemID) {
            return {
                ...item,
                status: "available"
            }
        } else {
            return item
        }
    });
    localStorage.setItem("menu", JSON.stringify(menu))
}

function setItemUnavailable(itemID) {
    let menu = JSON.parse(localStorage.getItem("menu") ?? "[]");
    menu = menu.map((item) => {
        if(item.id == itemID) {
            return {
                ...item,
                status: "unavailable"
            }
        } else {
            return item
        }
    });
    localStorage.setItem("menu", JSON.stringify(menu))
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
    alert("Reset succesful!")
}

