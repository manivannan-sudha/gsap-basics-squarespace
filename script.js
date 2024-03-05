var tl = gsap.timeline();

tl.from('#nav img, #nav h3, #nav button, #nav h4', {
    y: -100,
    duration: 1,
    delay: 0.8,
    opacity: 0,
    stagger: 0.2
})

tl.from('#content h1',{
    opacity:0,
    y:120,
    delay:0.5,
    duration:0.8,
    stagger:0.5
})

tl.from('#content>img', {
    opacity:0,
    scale:0,
    duration:0.8,
    stagger:0.5
})

tl.from('#scroll-down', {
    y:-18,
    duration:1,
    yoyo:true,
    repeat:-1
})

tl.from('#scroll-down', {
    opacity:0
})