let b = document.querySelector("#c");
let pls = document.querySelector("#pls");
let min = document.querySelector("#min");
var a = 0;
b.innerText = a;
pls.addEventListener("click", () => {
    a++;
    b.innerText = a;
});
min.addEventListener("click", () => {
    a--;
    b.innerText = a;
});

b.addEventListener("click", () => {
    a=0;
    b.innerText = a;
});
