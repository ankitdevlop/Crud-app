
var t1=gsap.timeline();

t1.from(".logo",{
    y:-100,
    duration:1,
    delay:1,
    opacity:0,
    stagger:0.2
});

t1.from(".li11,.fa-sun-o",{
    y:-100,
    duration:1,
    opacity:0,
    stagger:0.2
})

t1.from(".ic1 img",{
    y:-50,
    opacity:0,
    stagger:0.3,
})


t1.from(".box1 , .head1, .p1, .b1,.box2",{
    y:-60,
    opacity:0,
    duration:0.8,  
    stagger:0.5,
})


t1.from(".icon111,.scroll1,.uil-arrow-down",{
    scale:0,
    opacity:0,
})

t1.from(".icon111,.scroll1,.uil-arrow-down",{
    y:-30,
    duration:1,
    repeat:-1,
    yoyo:true,
})

gsap.from(".ab1,.ab2,.about-sect2",{
    x:-500,
    scale:1,
    opacity:0,
    duration:2,
    stagger:0.4,
    scrollTrigger:{
        trigger:".ab1,.about-sect2",
        scroller:"body",
        start:"top 50%",
        scrub:1,
    }
})






// t1.from(".fa-arrow-down",{
//     y:-100
// })


