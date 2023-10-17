

function renderNavbar() {
    let loginData = null;
    if(localStorage.getItem("loginGuess")) {
        loginData = JSON.parse(localStorage.getItem("loginGuess"))
    }
    let userBoxData = `
        ${loginData 
            ? `<span id="user">Welcome ${loginData.name} </span>
                <button id="logout_btn" onclick="logout()">Log out</button>` 
            : `
                <button onclick="window.location.href='../Authentication/Users/register.html'" id="register_btn">Register</button>
                <button onclick="window.location.href='../Authentication/Users/login.html'" id="login_btn">Login</button>`  
            }
    `;
    const headerEL = document.querySelector("header");
    headerEL.innerHTML = `
        <section id="real_header">
            <div id="place_name">
                <h1>Fuji Family Restaurant</h1>
            </div>
            <nav>
                <ul id="nav_bar">
                    <li class="nav_menu"><a onclick="window.location.href='../../Pages/index.html'">HOME</a></li>
                    <li class="nav_menu"><a >ABOUT</a></li>
                    <li class="nav_menu"><a onclick="window.location.href='../../Pages/menu.html'">MENU</a></li>
                    <li class="nav_menu"><a >BOOK TABLE</a></li>
                    <li class="nav_menu"><a class="fa-solid fa-cart-shopping"></a></li>
                    <li class="nav_menu"><a class="fa-solid fa-magnifying-glass"></a></li>
                </ul>
                <ul id="user_box">
                    ${userBoxData}
                </ul>
            </nav>
        </section>
    `;
}

function logout() {
    localStorage.removeItem('loginGuess')
    window.location.href="/Pages/index.html"
}

// function renderCarousel(array) {
//   const carouselBox = document.querySelector(".carouselBox");
//   let dataString = ``;
//   array.forEach((element, index) => {
//     dataString += `
//             <div class="carousel-item ${index == 0 ? "active" : ""}" >
//                 <img src="${element}" class="d-block w-100" alt="...">
//             </div>
//         `
//   });
//   let carousel = `
//         <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
//             <div class="carousel-indicators">
//             <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
//             <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
//             <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
//             </div>
//             <div class="carousel-inner">
//                 ${dataString}
//             </div>
//             <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//             <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//             <span class="visually-hidden">Previous</span>
//             </button>
//             <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//             <span class="carousel-control-next-icon" aria-hidden="true"></span>
//             <span class="visually-hidden">Next</span>
//             </button>
//         </div>
//     `;
//   carouselBox.innerHTML = carousel;
// }

function renderFooter() {
  const footerEL = document.querySelector("footer");
  footerEL.innerHTML = `
        <section id="real_footer">
            <div class="logo">
                <img id="logo_image" src="../../Assets/Images/logo.png" alt="Logo">
            </div>
            <div class="intro">
                    <h3>Welcome to Fuji</h3>
                    <p>
                        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                    </p>
                    <button id="readmore_btn">Read More</button>
            </div>
            <div class="contact">
                <p>Contact us</p>
                <ul>
                    <li>facebook</li>
                    <li>phone</li>
                    <li>email</li>
                </ul>
            </div>

            <div class="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1046.2590322015046!2d138.65571756680635!3d35.27672186217268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601bd72305cd2217%3A0xab00c961c0bfc7e8!2s3756-184%20Yamamiya%2C%20Fujinomiya%2C%20Shizuoka%20418-0111%2C%20Japan!5e1!3m2!1sen!2s!4v1697121151763!5m2!1sen!2s" width="250" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    `;
}
