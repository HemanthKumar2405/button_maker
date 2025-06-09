let one = document.getElementById("bgColorInput");
let two = document.getElementById("fontColorInput");
let three = document.getElementById("fontSizeInput");
let four = document.getElementById("fontWeightInput");
let five = document.getElementById("paddingInput");
let six = document.getElementById("borderRadiusInput");
let but = document.getElementById("customButton");

function done() {
    but.style.backgroundColor = one.value;
    but.style.color = two.value;
    but.style.fontSize = three.value;
    but.style.fontWeight = four.value;
    but.style.padding = five.value;
    but.style.borderRadius = six.value;
}
