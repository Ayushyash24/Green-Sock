gsap.to("#page2 h1",{
    transform: "translateX(-155%)", // #page2 ke <h1> ko left ki taraf move karega
    scrollTrigger:{
        trigger: "#page2",  // Jab #page2 viewport me aayega tab animation start hoga
        scroller: "body",   // Scroll hone wala element 'body' hai
        markers: true, // Debug ke liye markers dikhayega
        
        start: "top 0", // Jab #page2 ka top, viewport ke top se milta hai
        end: "top -100%", // Jab #page2 ka top, viewport ke top se 100% upar chala jata hai
        scrub: 4, // Scroll ke according animation smooth transition karega (2 sec delay)
        pin: true, // #page2 ko pin karega viewport me jab tak animation chal raha hai
    }
})