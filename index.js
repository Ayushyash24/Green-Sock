// gsap.to("#box",{
//     x:1000,
//     duration:2,
//     rotate:360,
//     delay:1,
//     backgroundColor:"yellow",
// })


// gsap.from("#box",{
//     x:1000,
//     duration:2,
//     rotate:360,
//     delay:1,
//     backgroundColor:"yellow",
// })


var tl = gsap.timeline()


tl.to("#box1",{
    x:1300,
    duration:2,
    rotate:360,
    delay:1,
    scale:0.5,
})


tl.to("#box2",{
    x:1300,
    duration:2,
    rotate:360,
    delay:2,
    scale:0.5,
})


tl.to("#box3",{
    x:1300,
    duration:2,
    rotate:360,
    delay:3,
    scale:0.5,
})