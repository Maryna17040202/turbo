let mainGeneral = document.querySelector(".main-general");
let mainGeneralAll = document.querySelectorAll(".main-general");
let mainGeneralTwo = document.querySelector("#two");
let offsetHome = -420;


mainGeneral.addEventListener("click", function () {
  
    for (let i = 0; i <= mainGeneralAll.length; i++) {

        if (offsetHome == -420) {
            offsetHome -= 1410;
        }

        const slider = mainGeneralAll[i];
        slider.style.left = offsetHome + 'px';
    }

});

mainGeneralTwo.addEventListener("click", function() {
    for (let i = 0; i <= mainGeneralAll.length; i++) {

        if (offsetHome == -990) {
            offsetHome = -420;
        }

        const slider = mainGeneralAll[i];
        slider.style.left = offsetHome + 'px';
    }
})

// mainGeneral.addEventListener("click", function () {
//     if (offsetHome == -1410) {
//         offsetHome = 0
//         console.log(offsetHome);
//     }

//     for (let i = 0; i <= mainGeneralAll.length; i++) {
//         const slider = mainGeneralAll[i];
//         const px = offsetHome + 'px'
//         slider.style.left = px;
//     }
// });
