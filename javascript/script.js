// Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

const nav = document.getElementById("nav");

const openNav = document.getElementById("openNav");
const closeNav = document.getElementById("closeNav");


// color change of navigation scrolll upto 500px down animation 

        
    window.addEventListener("scroll",()=>{
        if(window.scrollY > 300){
            nav.style.backgroundColor = "#0dcaf0";
            nav.style.transition = "0.3s";
            nav.setAttribute("class","navigation  d-flex flex-column gap-1 container-fluid   px-2 pt-1 m-0");
        }
        else{
            nav.style.backgroundColor = "var(--white-shade)";
            nav.style.transition = "0.5s";
            nav.setAttribute("class","navigation  d-flex flex-column gap-1 container-fluid   px-2 pt-2 m-0");

        }
    })



