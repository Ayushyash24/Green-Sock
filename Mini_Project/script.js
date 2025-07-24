function locoScroll(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();





}



function textSplitting(){
    var allH1 = document.querySelectorAll("#page2 h1");
// console.log(allH1);

allH1.forEach(function(elem){
    var clutter=""
    var h1Text= elem.textContent;
    var splittedText=h1Text.split("");
    splittedText.forEach(function(e){
        // console.log(e);
        clutter+=`<span>${e}</span>`;

        
    })
    elem.innerHTML=clutter;
    console.log(elem); 
})
}



function gsapAnimation(){
    gsap.to("#page2 h1 span", { // 🔸 Sabhi <span> jo #page2 ke h1 ke andar hain unpe animation apply karega
    color: "#E3E3C4",        // 🔸 Text ka color gradually change karega is color me
    stagger: 0.1,            // 🔸 Har letter ke beech 0.1 sec ka delay (letter-by-letter animation)

    scrollTrigger: {         // 🔸 ScrollTrigger se animation ko scroll ke sath link kar rahe hain
        trigger: "#page2 h1",   // 🔸 Jab ye element viewport me aata hai tab animation start hota hai
        scroller: "#main",       // 🔸 Ye batata hai ki scroll kis element pe track ho raha hai (usually body)
        markers: true,          // 🔸 ScrollTrigger ke start/end points ko page pe dikha deta hai (debug ke liye)
        start: "top 50%",       // 🔸 Jab trigger element ka top, viewport ke 50% height pe ho tab animation start
        end: "top -10%",         // 🔸 Jab trigger element ka top, viewport ke 10% height pe ho tab animation end
        scrub: 2,               // 🔸 Scroll ke sath animation sync rahega (scroll karte waqt smoothly chalega)
    }
});

}


locoScroll();
textSplitting();
gsapAnimation();





// For only one element

// var h1Text= document.querySelector("#firsth1").textContent // first h1 ko select kiya gaya
// // console.log(h1Text);

// var splittedText = h1Text.split("")   // ek variable create kiye jo space ke har strings(text) ko seperate kar dega agar hum apace dete to space ke basis pe seeperate karta
// console.log(splittedText); // 3 elements ka array milega( set, within , the)

// var clutter = ""   //Clutter is just a string variable that stores multiple HTML <span> elements — one for each letter.

// // 💡 This is usually done to apply animation or styling per letter,


// splittedText.forEach(function(elem){
//     clutter+= `<span>${elem}</span>`
// })
// /*   Har character ko <span> tag ke andar wrap kar raha hai
// 🔹 Aur un sabko jod ke clutter naam ke ek string mein store kar raha hai

// 🧠 Taaki baad mein har letter par styling ya animation apply ki ja sake.



// */
// // console.log(clutter);


// document.querySelector("#firsth1").innerHTML = clutter



gsap.to("#page2 h1 span", { // 🔸 Sabhi <span> jo #page2 ke h1 ke andar hain unpe animation apply karega
    color: "#E3E3C4",        // 🔸 Text ka color gradually change karega is color me
    stagger: 0.1,            // 🔸 Har letter ke beech 0.1 sec ka delay (letter-by-letter animation)

    scrollTrigger: {         // 🔸 ScrollTrigger se animation ko scroll ke sath link kar rahe hain
        trigger: "#page2 h1",   // 🔸 Jab ye element viewport me aata hai tab animation start hota hai
        scroller: "body",       // 🔸 Ye batata hai ki scroll kis element pe track ho raha hai (usually body)
        markers: true,          // 🔸 ScrollTrigger ke start/end points ko page pe dikha deta hai (debug ke liye)
        start: "top 50%",       // 🔸 Jab trigger element ka top, viewport ke 50% height pe ho tab animation start
        end: "top 10%",         // 🔸 Jab trigger element ka top, viewport ke 10% height pe ho tab animation end
        scrub: 1,               // 🔸 Scroll ke sath animation sync rahega (scroll karte waqt smoothly chalega)
    }
});
