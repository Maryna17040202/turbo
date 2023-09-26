let slaider = document.querySelectorAll(".slaider");

for (let i = 0; i < slaider.length; i++) {
    const element = slaider[i];

    element.addEventListener("click", function() {
        if (element && slaider[i] == slaider[0]) {
            element.classList.remove("opacity");
            slaider[i+1].classList.add("opacity");
            slaider[i+2].classList.add("opacity");
            slaider[i].style.left = 1201 + "px";
            slaider[i+1].style.left = 1201 + "px";
            slaider[i+2].style.left = 1201 + "px";
            
        }

        if (element && slaider[i] == slaider[1]) {
            element.classList.remove("opacity");
            slaider[i-1].classList.add("opacity");
            slaider[i+1].classList.add("opacity");
            slaider[i].style.left = 0 + "px";
            slaider[i-1].style.left = 0 + "px";
            slaider[i+1].style.left = 0 + "px";   
        }

        if (element && slaider[i] == slaider[2]) {
            element.classList.remove("opacity");
            slaider[i-1].classList.add("opacity");
            slaider[i-2].classList.add("opacity");
            slaider[i].style.left = -1201 + "px";
            slaider[i-1].style.left = -1201 + "px";
            slaider[i-2].style.left = -1201 + "px";   
        }
    })  
}