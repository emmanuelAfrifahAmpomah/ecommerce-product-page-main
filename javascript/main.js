// $("document").ready(function() {
//     $("#cartButton").click(function() {
//         $(".bodyImage").fadeToggle();
//         $("a:last").css("color", "pink");
//     });
// });


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