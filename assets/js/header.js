const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
    console.log("click event");
    const navBar = document.querySelector(".navbar-mobile");
    if (!navBar.classList.contains("show")) {
        console.log("inside");
        navBar.classList.add("show");
    } else {
        navBar.classList.remove("show");
    }
});
