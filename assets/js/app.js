let p = document.querySelector(".p");
let button = document.getElementById("add");
let save = document.querySelector(".save");
let counting = document.getElementById("counting");
let reset = document.querySelector(".reset")
button.addEventListener("click", function() {
    p.innerHTML = +p.innerHTML + 1
})
save.addEventListener("click", function() {
    if (p.innerHTML != 0) {
        if (counting.innerHTML == 0) { counting.innerHTML = p.innerHTML } else if (counting.innerHTML != 0) { counting.innerHTML += "," + p.innerHTML }
    }
    p.innerHTML = 0
})

reset.addEventListener("click", function() {
    p.innerHTML = 0,
        counting.innerHTML = 0
})