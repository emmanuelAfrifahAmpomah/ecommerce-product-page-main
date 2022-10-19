

// This is for the thumbnails
var productMain = document.getElementById("productMain");
var productOther = document.getElementsByClassName("productOther");

productOther[0].onclick = function() {
    productMain.src = productOther[0].src;
}

productOther[1].onclick = function() {
    productMain.src = productOther[1].src;
}

productOther[2].onclick = function() {
    productMain.src = productOther[2].src;
}

productOther[3].onclick = function() {
    productMain.src = productOther[3].src;
}


// This is for the number inputs
const plus = document.querySelector(".plus"),
minus = document.querySelector(".minus"),
number = document.querySelector(".number");

let a = 0;

plus.addEventListener("click", function() {
    if (a<=9) {
    a++;
    number.innerText = a;
    }
});

minus.addEventListener("click", function() {
    if (a>=1) {
    a--;
    number.innerText = a;
}
});