

let menu = [
    {
        id: Date.now() * Math.random(),
        name: "Omurice",
        price: 3000,
        image: "https://contenthub.kraftheinz.com/api/public/content/8c687e49d5504f1f851c12f6e41a9521?v=14afa143",
        status: "available",
        category: "rice",
    },
    {
        id: Date.now() * Math.random(),
        name: "Sushi",
        price: 4000,
        image: "https://media.post.rvohealth.io/wp-content/uploads/2021/09/sushi-sashimi-732x549-thumbnail-732x549.jpg",
        status: "available",
        category: "sushi",
    },
    {
        id: Date.now() * Math.random(),
        name: "Burger",
        price: 6000,
        image: "https://www.allrecipes.com/thmb/5JVfA7MxfTUPfRerQMdF-nGKsLY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/25473-the-perfect-basic-burger-DDMFS-4x3-56eaba3833fd4a26a82755bcd0be0c54.jpg",
        status: "available",
        category: "burger",
    },
]

function setDataToLocalStorage() {
    if(!localStorage.getItem("menu")) {
        localStorage.setItem("menu", JSON.stringify(menu))
    }
}
setDataToLocalStorage()



function renderMenu(array) {
    let availableMenu = document.querySelector(".menu")
    let menuItem = ``;
    for(let i in array) {
        if(array[i].status == "unavailable") {
            continue
        } else {
            menuItem +=`
                <div class="item">
                    <img class="item_image" src="${array[i].image}" alt="">
                    <div class="item_text">
                        <div class="item_info">
                        <span class="item_name">${array[i].name}</span>
                        <span class="item_price">${Number(array[i].price)}</span>
                        </div>
                        <button class="order_btn">Order Online</button>
                    </div>
                </div>
            `;
        }
    }
    availableMenu.innerHTML = menuItem;
}

renderMenu(JSON.parse(localStorage.getItem("menu")))

function showSushi() {
        let menu = JSON.parse(localStorage.getItem("menu") ?? "[]")
        let availableMenu = document.querySelector(".menu")
        let menuItem = ``;
        for(let i in menu) {
            if(menu[i].category != "sushi") {
                continue
            } else {
                menuItem +=`
                    <div class="item">
                        <img class="item_image" src="${menu[i].image}" alt="">
                        <div class="item_text">
                            <div class="item_info">
                            <span class="item_name">${menu[i].name}</span>
                            <span class="item_price">${Number(menu[i].price)}</span>
                            </div>
                            <button class="order_btn">Order</button>
                        </div>
                    </div>
                `;
            }
        }
        availableMenu.innerHTML = menuItem;
        renderMenu(availableMenu)
    }

function showRice() {
    let menu = JSON.parse(localStorage.getItem("menu") ?? "[]")
    let availableMenu = document.querySelector(".menu")
    let menuItem = ``;
    for(let i in menu) {
        if(menu[i].category != "rice") {
            continue
        } else {
            menuItem +=`
                <div class="item">
                    <img class="item_image" src="${menu[i].image}" alt="">
                    <div class="item_text">
                        <div class="item_info">
                        <span class="item_name">${menu[i].name}</span>
                        <span class="item_price">${Number(menu[i].price)}</span>
                        </div>
                        <button class="order_btn">Order</button>
                    </div>
                </div>
            `;
        }
    }
    availableMenu.innerHTML = menuItem;
    renderMenu(availableMenu)
}

function showBurger() {
    let menu = JSON.parse(localStorage.getItem("menu") ?? "[]")
    let availableMenu = document.querySelector(".menu")
    let menuItem = ``;
    for(let i in menu) {
        if(menu[i].category != "burger") {
            continue
        } else {
            menuItem +=`
                <div class="item">
                    <img class="item_image" src="${menu[i].image}" alt="">
                    <div class="item_text">
                        <div class="item_info">
                        <span class="item_name">${menu[i].name}</span>
                        <span class="item_price">${Number(menu[i].price)}</span>
                        </div>
                        <button class="order_btn">Order</button>
                    </div>
                </div>
            `;
        }
    }
    availableMenu.innerHTML = menuItem;
    renderMenu(availableMenu)
}    