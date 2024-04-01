const hamburger = document.querySelector(".hamburger");
const aHover = document.querySelectorAll(".navbar li");
hamburger.addEventListener("click", () => {
    const navBar = document.querySelector(".navbar-mobile");
    if (!navBar.classList.contains("show")) {
        navBar.classList.add("show");
    } else {
        navBar.classList.remove("show");
    }
});

/* aHover.forEach((item) => {
    item.addEventListener("mouseover", (e) => {
        console.log(e.target);
        // item.classList.add("li-hover");
    });
}); */
