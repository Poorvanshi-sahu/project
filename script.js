gsap.registerPlugin(ScrollTrigger);
// MENU NAVIGATION SLIDE
menuslide = document.querySelector("#menuslide");
menu = document.querySelector("#k");
console.log(menu)
cross = document.querySelector("#cross");
console.log(cross)
menu.addEventListener('click', function() {
    menuslide.style.left = "0";
})

cross.addEventListener('click', function() {
    console.log("kjk")
    menuslide.style.left = "-100vw";
})

// $('#afterhome #br').textillate({ in: { effect: 'fadeInUp' } });

// ENABLING LOCOMOTIVE SCROLLBAR
const scroller = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});


scroller.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length ? scroller.scrollTo(value, 0, 0) : scroller.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => scroller.update());

ScrollTrigger.refresh();


//TIMELINE FOR AFTERHOME ANIMATION
var tlone = gsap.timeline({
    scrollTrigger: {
        trigger: "#afterhome",
        scroller: "#main",
        stagger: 2,
        // markers: true,
        start: "top 60%",
        scrub: true
    }
});

tlone.to("#afterhome h1", {
    onStart: function() {
        $('#afterhome h1').textillate({ in: { effect: 'fadeInUp' } });
    }
})

var tltwo = gsap.timeline({
    scrollTrigger: {
        scroller: "#main",
        trigger: "#tt",
        stagger: 3,
        // markers: true,
        start: "top 80%",
        scrub: true
    }
});

tltwo.to("#magth #tt h1", {
    onStart: function() {
        $('#magth #tt h1').textillate({ in: { effect: 'fadeInUp' } });
    }
})


let totaldiv = document.querySelectorAll(".elem");
var total = totaldiv[0].getBoundingClientRect().width * totaldiv.length + totaldiv.length * totaldiv[0].getBoundingClientRect().left;

document.querySelector("#pro").style.width = total + "px";

function animate() {
    window.requestAnimationFrame(animate);
}
animate();



var b = totaldiv[0].getBoundingClientRect().left;
var previous = document.querySelector("#pro").getBoundingClientRect().left;

document.querySelector("#proup").addEventListener('scroll', function(val) {
    var current = document.querySelector("#pro").getBoundingClientRect().left;
    // console.log(current)
    var diff = current - previous;
    var speed = diff * .3;
    previous = current;
    totaldiv.forEach(function(val) {
        val.style.transform = `skewX(${speed}deg)`;
    });

    if (document.querySelector("#pro").getBoundingClientRect().left === 0) {
        totaldiv.forEach(function(val) {
            val.style.transform = `skewX(${speed}deg)`;
        });
    }
});










var fs = gsap.timeline({
    scrollTrigger: {
        scroller: "#main",
        trigger: "#lastpage",
        // markers: true,
        start: "top 60%",
        // scrub: true
    }
});

fs.from("h4", {
    y: 20,
    duration: -3
})
fs.from("#italy", {
    y: 40,
    duration: -1
}, "-=4")
fs.from("p", {
    y: 40,
    duration: 1
}, "-=4")
fs.from("#m", {
    y: 60,
    duration: 1
}, "-=4")
fs.from("#im", {
    y: 100,
    duration: 1
}, "-=4")


var h1 = document.querySelector(".links h1");
var photu = document.querySelector(".photu");
var all = document.querySelectorAll(".links");
var mr = document.querySelector("#mr");
mr.style.backgroundImage = `url("https://images.unsplash.com/photo-1627068771522-c85a3dcb6c99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTg4fHxhZXN0aGV0aWMlMjBmbG93ZXIlMjB2YXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")`;
var urls = ["https://images.unsplash.com/photo-1547060055-23cec1ce27b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTg0fHxmbG93ZXJzJTIwYm91cXVldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1607392310614-4e50fc051f11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1561543718-aabc836e5297?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1549763201-ee64b7c22285?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"]
all.forEach((a, i) => {
    a.addEventListener("mousemove", function(val) {
        // console.log(i)
        // console.log(urls[i])
        photu.style.display = "initial";
        photu.style.transform = `translate(${val.clientX-450}px,${val.clientY-300}px) rotate(${val.clientX-val.clientY*0.0000009999}deg)`;
        console.log(val.clientX)
        photu.style.backgroundImage = `url(${urls[i]})`;
        mr.style.backgroundImage = `url(${urls[i]})`;
    })
    a.addEventListener("mouseout", function() {
        photu.style.display = "none";
    })
});


all.forEach((a, i) => {
    a.addEventListener("click", function(val) {
        // console.log(i)
        // console.log(urls[i])
        photu.style.display = "initial";
        photu.style.transform = `translate(${val.clientX-170}px,${val.clientY-300}px) rotate(${val.clientX-val.clientY*0.6}deg)`;
        console.log(val.clientX)
        photu.style.backgroundImage = `url(${urls[i]})`;
        mr.style.backgroundImage = `url(${urls[i]})`;
    })
});




const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    lerp: 0.02,
    multiplier: 1.4, // Effect Multiplier
    reloadOnContextChange: true,
    touchMultiplier: 2,
    smoothMobile: 0,
    smartphone: {
        smooth: !0,
        breakpoint: 767
    },
});