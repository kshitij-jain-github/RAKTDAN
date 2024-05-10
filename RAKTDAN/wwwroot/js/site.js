const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
        toggle.parentNode.classList.toggle("active");
    });
});



/* BLOOAD JS*/
$(document).ready(function () {

    $('.pour') //Pour Me Another Drink, Bartender!
        .delay(0)
        .animate({
            height: '150px'
        }, 1500)
        .delay(15600);

    $('.pourTube') //Pour Me Another Drink, Bartender!
        .delay(0)
        .animate({
            height: '150px'
        }, 0)
        .delay(15600);

    $('#liquid') // I Said Fill 'Er Up!
        .delay(1300)
        .animate({
            height: '170px'
        }, 15000);

    $('.beer-foam') // Keep that Foam Rollin' Toward the Top! Yahooo!
        .delay(3400)
        .animate({
            bottom: '200px'
        }, 2500);
});