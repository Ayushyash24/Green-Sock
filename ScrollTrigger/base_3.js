gsap.to("#page2 img", { // #page2 ke andar ke <img> ko animate karna hai
    width: "100%",       // Image ka width gradually 100% ho jayega jab scroll hoga

    scrollTrigger: {     // Yaha se ScrollTrigger configuration start ho rahi hai
        trigger: "#page2",    // Jab #page2 viewport me aayega tab animation start hoga
        scroller: "body",     // Scroll hone wala element 'body' hai (default hota hai)
        markers: true,        // Start aur End markers visible honge (debug ke liye helpful)
        start: "top 0",       // Jab #page2 ka top, viewport ke top se milta hai
        end: "top -100%",     // Jab #page2 ka top, viewport ke top se 100% upar chala jata hai
        scrub: 2,        // Scroll ke according animation smooth transition karega (2 sec delay)
        pin :true,        // #page2 ko pin karega viewport me jab tak animation chal raha hai
    }
});
