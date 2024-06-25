function loco(){
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
loco()


document.getElementById(`RESUME`).addEventListener(`click`, function(){
    this.classList.add(`clicked`);
    window.location.href = `https://drive.google.com/file/d/1rpaYFyBPkP23RRvqZI_F-R-dxQG2WO4h/view?usp=drivesdk`;
});
document.getElementById(`LINKDIN`).addEventListener(`click`, function(){
    this.classList.add(`clicked`);
    window.location.href = `https://www.linkedin.com/in/sidhant-pensalwar-453665223`;
});





VANTA.HALO({
    el: "#main",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    amplitudeFactor: 1.20,
    xOffset: 0.18,
    yOffset: -0.03,
    size: 1.30
   
  })


document.addEventListener('DOMContentLoaded', function() {
    new Typed('#typing', {
        strings: ['civil Engineer','Autocad Designer'],
        typeSpeed: 100,
        backSpeed: 60,
        backDelay:200,
        loop: true
    });
});

VANTA.BIRDS({
    el: "#main1",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    
  })

  VANTA.RINGS({
    el: "#page3",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00
  })