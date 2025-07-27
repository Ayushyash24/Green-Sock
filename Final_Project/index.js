// gsap.from(".line h1",{
//     y:350,
//     stagger:0.25,
//     duration:0.6,
//     delay:0.5,
// })


function loadingAnimation(){
    var tl = gsap.timeline()
tl.from(".line h1",{
    y:350,
    stagger:0.25,
    duration:0.6,
    delay:0.5
})


tl.from("#line1-part1",{
    opacity:0,
    onStart:function(){
        var h5timer =document.querySelector("#line1-part1 h5");
var grow=0;
setInterval(function(){
    if(grow<100){
        h5timer.innerHTML = grow++;
    
    }
    else{
        h5timer.innerHTML=grow;
    }
},45)

    }

})


tl.to( ".line h2",{
    animationName: "anime",
    opacity:1,

})


tl.to("#loader",{
    opacity:0,
    duration: 0.2,
    delay:4
})

tl.from("#page1",{
    // delay:0.1,
    duration:0.5,
    y:1000,
    opacity:0,
    ease:Power4,

})


tl.to("#loader",{
    display:"none",
})
tl.from("#hero1 h1, #hero2 h1 , #hero3 h2 , #hero4 h1",{
    y:140,
    stagger:0.2,
    
})
}
loadingAnimation()


// document.addEventListener("mousemove",function(dets){
//     gsap.to("#crsr",{
//         left:dets.X,
//         top:dets.Y,
//          duration: 0.1,
//         ease: "power1.out",
//     })
// })


function cursorAnimation(){
    document.addEventListener("mousemove", function(dets){
    gsap.to("#crsr", {
        left: dets.clientX + "px",
        top: dets.clientY + "px",
        duration: 0.1,
        ease: "power1.out"
    });
});

Shery.makeMagnet("#nav-part2 h4" , {});
}

// cursorAnimation()