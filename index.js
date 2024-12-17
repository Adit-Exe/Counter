let b = document.querySelector("#c");
let pls = document.querySelector("#pls");
let min = document.querySelector("#min");
let div = document.querySelector("#div");
let mul = document.querySelector("#mul");
let mux = document.querySelector("#mux");

var a=0;
b.innerText = a;
pls.addEventListener("click", () => {
    if (a>999999999999999999) {
        a="∞";
        b.innerText = a;
    }
    else{
    a++;
    b.innerText = a;}
});
min.addEventListener("click", () => {
    if (a>999999999999999999) {
        a="∞";
        b.innerText = a;
    }
    else{
    a--;
    b.innerText = a;}
});
mul.addEventListener("click", () => {
    if (a>999999999999999999) {
        a="∞";
        b.innerText = a;
    }
    else{
    a=a*2;
    b.innerText = a;}
});
mux.addEventListener("click", () => {
    if (a>999999999999999999) {
        a="∞";
        b.innerText = a;
    }
    else{
    a=a*a;
    b.innerText = a;}
});
div.addEventListener("click", () => {
    if (a>999999999999999999) {
        a="∞";
        b.innerText = a;
    }
    else{
    a=a/2;
    b.innerText = a;}
});

b.addEventListener("click", () => {
    if (a>999999999999999999) {
        a="∞";
        b.innerText = a;
    }
    else{
    a=0;
    b.innerText = a;}
});


