gsap.from("#page1 #circle",{
    scale:0,
    duration:1,
    delay:1,
    rotate:720,
})

gsap.from("#page2 #circle",{
    scale:0,
    duration:1,
    // delay:1,
    rotate:720,
    scrollTrigger: {
        trigger: "#page2 #circle",
        scroller: "body",
        markers:true,
        start: "top 60%",
        end: "top 30%",
        scrub:2,
    }
})

