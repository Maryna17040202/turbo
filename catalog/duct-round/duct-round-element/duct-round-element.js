let miniElementOne = document.querySelector(".mini-element_1");
let miniElementTwo = document.querySelector(".mini-element_2");
let miniElementThree = document.querySelector(".mini-element_3");
let slaiderOne = document.querySelector(".slaider_1");
let slaiderTwo = document.querySelector(".slaider_2");
let slaiderThree = document.querySelector(".slaider_3");
let offset = 0;

miniElementOne.addEventListener("click", function(){
    if (offset == -326) {
        offset = 0;
        slaiderOne.style.left = offset + "px";
        slaiderTwo.style.left = 326 + "px";
        slaiderThree.style.left = 652 + "px";
    }

    if (offset == -652) {
        offset = 0;
        slaiderOne.style.left = offset + "px";
        slaiderTwo.style.left = 326 + "px";
        slaiderThree.style.left = 652 + "px";
    }
});

miniElementTwo.addEventListener("click", function(){
    if (offset == 0) {
        offset = -326;
        slaiderTwo.style.left = offset + "px";
        slaiderOne.style.left = 326 + "px";
        slaiderThree.style.left = 0 + "px";
        
    }

    if (offset == -652) {
        offset = -326;
        slaiderTwo.style.left = offset + "px";
        slaiderOne.style.left = 326 + "px";
        slaiderThree.style.left = 652 + "px";
    }
});

miniElementThree.addEventListener("click", function(){
    if (offset == -326) {
        offset = -652;
        slaiderThree.style.left = offset + "px";
        slaiderOne.style.left = 326 + "px";
        slaiderTwo.style.left = 326 + "px";
    }

    if (offset == 0) {
        offset = -652;
        slaiderThree.style.left = offset + "px";
        slaiderOne.style.left = 326 + "px";
        slaiderTwo.style.left = 652 + "px";
    }
});