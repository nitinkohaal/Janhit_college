// Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

const nav = document.getElementById("navigation");
const openNav = document.getElementById("openNav");
const closeNav = document.getElementById("closeNav");


// color change of navigation scrolll upto 500px down animation 

 window.addEventListener("scroll",()=>{
     if(window.scrollY>100){
         gsap.to(nav,{
             backgroundColor:"#04123c"

         })
     }
     else{
         gsap.to(nav,{
             backgroundColor:"transparent"
         })
     }
 })


