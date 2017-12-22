"use strict";

function selectChanged(value) {

    var img = document.getElementById("img");

    switch(value) {
        case "0":
            img.src = "images/ded_moroz.jpg";
            break;

        case "1":
            img.src = "images/santa.jpg";
            break;

        case "2":
            img.src = "images/noel.jpg";
            break;
    }
}