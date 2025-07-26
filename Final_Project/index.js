// gsap.from(".line h1",{
//     y:350,
//     stagger:0.25,
//     duration:0.6,
//     delay:0.5,
// })


var tl = gsap.timeline()
tl.from(".line h1",{
    y:350,
    stagger:0.25,
    duration:0.6,
    delay:0.5
})


tl.from("#line1-part1 ",{
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
    display:none,
})