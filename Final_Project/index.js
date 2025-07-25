gsap.from(".line h1",{
    y:350,
    stagger:0.25,
    duration:0.6,
    delay:0.5,
})

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



var tl = gsap.timeline()
tl.to("#loader",{
    opacity:0,
    duration: 0.4,
    delay:4
})