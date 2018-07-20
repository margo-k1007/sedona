//  Работа с popub-form на главной

var link = document.querySelector(".form-title-button");
var popub = document.querySelector(".hotel-search-form");     
var buttonClose = document.querySelector(".modal-content-close");

    link.addEventListener("click", function(event) {
        event.preventDefault();
        popub.classList.add("hotel-search-form-show");
    });

    buttonClose.addEventListener("click", function(event) {
        event.preventDefault();
        popub.classList.remove("hotel-search-form-show");
    });

    window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
            if (popub.classList.contains("hotel-search-form-show")) {
                popub.classList.remove("hotel-search-form-show");
            }
        }
    });