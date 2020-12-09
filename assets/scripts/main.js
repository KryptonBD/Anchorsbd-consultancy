const navCheckbox = document.getElementById("nav__toggle");
let navItem = document.querySelector(".nav__list");

navItem.addEventListener('click', (e) => {
    if (e.target && e.target.nodeName == 'A' && navCheckbox.checked == true) {
        navCheckbox.click();
    }

})

window.onhashchange = function () {
    history.replaceState("", document.title, location.origin);
}