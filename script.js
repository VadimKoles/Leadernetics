// анимация при прокрутке

const animItems = document.querySelectorAll('.anim-scroll');
if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) { 
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            let animStart = 4;
            if (animItem.classList.contains("h")) {
                animStart = 1;
            } else if (animItem.classList.contains("o") || animItem.classList.contains("s")) {
                animStart = 2;
            }
            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                if (animItem.classList.contains('anim-again')) {
                    animItem.classList.remove('_active');
                }
            }
        }
    }
    function offset (el) {
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, 
        scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    setTimeout(animOnScroll, 500);

}

let condition = true;
let sticks = document.querySelectorAll(".stick");
function openNav() {
    if (condition) {
        document.querySelector(".nav").style.transform = "translateX(0vw)";
        document.querySelector(".burger_icon").style.transform = "translateY(50%)";

        sticks.forEach(function(stick){
            stick.style.position = "absolute";
        })
        sticks[0].style.transform = "rotate(45deg)";
        sticks[1].style.opacity = "0";
        sticks[2].style.transform = "rotate(-45deg)";

        condition = false;
    } else {
        document.querySelector(".nav").style.transform = "translate(50vw)";
        document.querySelector(".burger_icon").style.transform = "translateY(0%)";

        sticks.forEach(function(stick){
            stick.style.position = "static";
            stick.style.top = "auto";
        })
        sticks[0].style.transform = "rotate(0deg)";
        sticks[1].style.opacity = "1";
        sticks[2].style.transform = "rotate(0deg)";
        condition = true;
    }
}