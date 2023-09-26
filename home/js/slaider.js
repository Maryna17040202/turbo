const containerSlaiderActive = document.querySelectorAll(".container-slaider-active");
// const left = document.querySelector("#left");
// const right = document.querySelector("#right")
let containerSlaider = document.querySelector(".container-slaider");
let offset = 0;

// left.addEventListener("click", function() {

//     if (offset >= -2820 && offset != 0) {
//         offset += 1410;
//     }

//     for (let i = 0; i <= containerSlaiderActive.length; i++) {
//         const slider = containerSlaiderActive[i];
//         slider.style.left = offset + 'px';
//     }
// });

containerSlaider.addEventListener("click", function () {

    if (offset <= 0 && offset >= -2799) {
        offset -= 1410;
    }
    
    else {
        offset = 0;
    }

    for (let i = 0; i <= containerSlaiderActive.length; i++) {
        const slider = containerSlaiderActive[i];
        slider.style.left = offset + 'px';
    }
})
