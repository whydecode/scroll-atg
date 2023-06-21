function populateData(index) {
  fetch("./data/data.json")
    .then((response) => response.json())
    .then((data) => {
      // Populate data into the elements
      document.getElementById("text1").textContent = data[index].texts[0];
      document.getElementById("heading1").textContent = data[index].headings[0];
      document.getElementById("text2").textContent = data[index].texts[1];
      document.getElementById("heading2").textContent = data[index].headings[1];
      document.getElementById("text3").textContent = data[index].texts[2];
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
var index = 0;
// Call the function with the initial index
populateData(index);

// Add an event listener to the window for the 'scroll' event

// Create a ScrollMagic controller
var controller = new ScrollMagic.Controller();

// Select the SVG path
var path = document.getElementById("Opaque_Ring");

var pathLength = path.getTotalLength();
// Create a Tween to update the `stroke-dasharray` property
var tween = gsap.to(path, {
  strokeDasharray: 950, // Adjust this value as needed
  ease: "none",
});

// Create a ScrollMagic scene
new ScrollMagic.Scene({
  triggerElement: ".right-div",
  duration: "700%", // Adjust this value as needed
  offset: 350, // Adjust this value as needed
})
  .setTween(tween)
  .addTo(controller);

function inceaseIndex() {
  if (index == 6) {
    return;
  }
  index++;
  populateData(index);
}
function decreaseIndex() {
  if (index == 0) {
    return;
  }
  index--;
  populateData(index);
}
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  toggleActions: "restart pause resume pause",
  scroller: ".home",
});

function colorChange(color1, color2) {
  gsap.to(".left-div", {
    duration: 0.7,
    backgroundColor: color1,
    ease: "none",
  });
  gsap.to(".right-div", {
    duration: 0.7,
    backgroundColor: color2,
    ease: "none",
  });
}

function strokeChange(elem, color) {
  gsap.to(elem, {
    duration: 2,
    stroke: color,
  });
}

function animateFrom(elem, direction, a, x, y) {
  direction = direction || 1;
  a = 0;
  if (direction == 1) {
    gsap.fromTo(
      elem,
      { rotation: a, autoAlpha: 0, opacity: 0, x: x, y: y, display: "none" },
      {
        x: 0,
        y: 0,
        duration: 0.7,
        rotation: 0,
        opacity: 1,
        display: "block",
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto",
      }
    );
  } else {
    gsap.fromTo(
      elem,
      { rotation: -a, autoAlpha: 0, opacity: 1, x: 0, y: 0 },
      {
        x: x,
        y: y,
        duration: 0.4,
        rotation: 0,
        opacity: 0,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto",
      }
    );
  }
}
function hide(elem) {
  gsap.set(elem, { autoAlpha: 0 });
}
// document.addEventListener("DOMContentLoaded", function () {
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.defaults({
  toggleActions: "restart pause resume pause",
  scroller: ".home",
});

// gsap.utils.toArray(".gs_reveal").forEach(function (elem) {
//   hide(elem); // assure that the element is hidden when scrolled into view
ScrollTrigger.create({
  trigger: ".page0",
  onEnterBack: function () {
    hide("#p3i1"), hide("#p3i2");
    strokeChange(".dotsstro2", "grey");
    animateFrom("#p2i1", -1, 45, 0, 40), animateFrom("#p2i2", -1, -45, 0, -50);
    setTimeout(() => {
      animateFrom("#world-com", 1, 45, 0, 100);
      colorChange("#9003fc", "#c7c7c7");
      hide("#p5i1"), hide("#p5i2"), hide("#p5i3"), hide("#p5i4"), hide("#p5i5");
      animateFrom("#heading1", 1, 30, 0, -50),
        animateFrom("#heading2", 1, 30, 0, -50),
        animateFrom("#text1", 1, 30, 0, -30),
        animateFrom("#text2", 1, 30, 0, 30),
        animateFrom("#text3", 1, 30, 0, 100);
      decreaseIndex();
      animateFrom("#p1i1", 1, 30, 0, 300), animateFrom("#p1i2", 1, 60, 0, -150);
    }, 200);
  },
});
ScrollTrigger.create({
  trigger: ".page1",
  onEnter: function () {
    strokeChange(".dotsstro1", "white");
    colorChange("#9003fc", "#c7c7c7");
    animateFrom("#heading1", 1, 30, 0, -50),
      animateFrom("#heading2", 1, 30, 0, -50),
      animateFrom("#text1", 1, 30, 0, -30),
      animateFrom("#text2", 1, 30, 0, 30),
      animateFrom("#text3", 1, 30, 0, 100);
    animateFrom("#world-com", 1, 45, 0, 100);
    animateFrom("#p1i1", 1, 30, 0, 300), animateFrom("#p1i2", 1, 60, 0, -150);
  },
  onEnterBack: function () {
    decreaseIndex();
    strokeChange(".dotsstro3", "grey");
    animateFrom("#heading1", 1, 30, 0, -50),
      animateFrom("#heading2", 1, 30, 0, -50),
      animateFrom("#text1", 1, 30, 0, -30),
      animateFrom("#text2", 1, 30, 0, 30),
      animateFrom("#text3", 1, 30, 0, 100);
    animateFrom("#p3i1", -1, 30, 0, 80), animateFrom("#p3i2", -1, 45, 0, 30);
    animateFrom("#p4i1", -1, 30, 0, -80),
      animateFrom("#p4i2", -1, 45, 0, -50),
      animateFrom("#p4i3", -1, 30, 0, -40),
      animateFrom("#p4i4", -1, 45, 0, 100),
      animateFrom("#p4i5", -1, 45, 0, 100);
    hide("#p5i1"), hide("#p5i2"), hide("#p5i3"), hide("#p5i4"), hide("#p5i5");

    setTimeout(() => {
      colorChange("#562dfa", "#30038a");
      animateFrom("#p2i1", 1, 45, 0, 40), animateFrom("#p2i2", 1, -45, 0, -50);
    }, 200);
  },
});
ScrollTrigger.create({
  trigger: ".page2",
  onEnter: function () {
    inceaseIndex();
    strokeChange(".dotsstro2", "white");
    colorChange("#562dfa", "#30038a");
    animateFrom("#heading1", 1, 30, 0, -50),
      animateFrom("#heading2", 1, 30, 0, -50),
      animateFrom("#text1", 1, 30, 0, -30),
      animateFrom("#text2", 1, 30, 0, -30),
      animateFrom("#text3", 1, 30, 0, 100);
    animateFrom("#world-com", -1, 45, 0, 100);
    animateFrom("#p1i1", -1, 30, 0, 300), animateFrom("#p1i2", -1, 60, 0, -150);
    setTimeout(() => {
      animateFrom("#p2i1", 1, 45, 0, 40), animateFrom("#p2i2", 1, -45, 0, -50);
    }, 200);
  },
  onEnterBack: function () {
    strokeChange(".dotsstro4", "grey");
    decreaseIndex();
    hide("#p5i1"), hide("#p5i2"), hide("#p5i3"), hide("#p5i4"), hide("#p5i5");
    animateFrom("#heading1", 1, 30, 0, -50),
      animateFrom("#heading2", 1, 30, 0, -50),
      animateFrom("#text1", 1, 30, 0, -30),
      animateFrom("#text2", 1, 30, 0, -30),
      animateFrom("#text3", 1, 30, 0, 100);
    animateFrom("#p4i1", -1, 30, 0, -80),
      animateFrom("#p4i2", -1, 45, 0, -50),
      animateFrom("#p4i3", -1, 30, 0, -40),
      animateFrom("#p4i4", -1, 45, 0, 100),
      animateFrom("#p4i5", -1, 45, 0, 100);
    setTimeout(() => {
      colorChange("#07024f", "#1f1973");

      animateFrom("#p3i1", 1, 30, 0, 80), animateFrom("#p3i2", 1, 45, 0, 30);
    }, 200);
  },
});
ScrollTrigger.create({
  trigger: ".page3",
  onEnter: function () {
    inceaseIndex();
    strokeChange(".dotsstro3", "white");
    colorChange("#07024f", "#1f1973");
    animateFrom("#heading1", 1, 30, 0, -50),
      animateFrom("#heading2", 1, 30, 0, -50),
      animateFrom("#text1", 1, 30, 0, -30),
      animateFrom("#text2", 1, 30, 0, -30),
      animateFrom("#text3", 1, 30, 0, 100);
    animateFrom("#p2i1", -1, 45, 0, 40), animateFrom("#p2i2", -1, -45, 0, -50);
    setTimeout(() => {
      animateFrom("#p3i1", 1, 30, 0, 80), animateFrom("#p3i2", 1, 45, 0, 30);
    }, 200);
    setTimeout(() => {
      animateFrom("#p4i1", -1, 30, 0, 80), animateFrom("#p4i2", -1, 45, 0, 30);
    }, 200);
  },
  onEnterBack: function () {
    strokeChange(".dotsstro5", "grey");
    decreaseIndex();
    animateFrom("#heading1", 1, 30, 0, -50),
      animateFrom("#heading2", 1, 30, 0, -50),
      animateFrom("#text1", 1, 30, 0, -30),
      animateFrom("#text2", 1, 30, 0, -30),
      animateFrom("#text3", 1, 30, 0, 100);
    animateFrom("#p5i1", -1, 30, 0, -80),
      animateFrom("#p5i2", -1, 45, 0, -50),
      animateFrom("#p5i3", -1, 30, 0, -40),
      animateFrom("#p5i4", -1, 45, 0, 100),
      animateFrom("#p5i5", -1, 45, 0, 100);
    setTimeout(() => {
      colorChange("#002a4d", "#08121a");
      hide("#p5i1"), hide("#p5i2"), hide("#p5i3"), hide("#p5i4"), hide("#p5i5");
      animateFrom("#p4i1", 1, 30, 0, -80),
        animateFrom("#p4i2", 1, 45, 0, -50),
        animateFrom("#p4i3", 1, 30, 0, -40),
        animateFrom("#p4i4", 1, 45, 0, 100),
        animateFrom("#p4i5", 1, 45, 0, 100);
    }, 200);
  },
});
ScrollTrigger.create({
  trigger: ".page4",
  onEnter: function () {
    inceaseIndex();
    colorChange("#002a4d", "#08121a");
    strokeChange(".dotsstro4", "white");
    animateFrom("#p3i1", -1, 30, 0, 80), animateFrom("#p3i2", -1, 45, 0, 30);
    setTimeout(() => {
      animateFrom("#heading1", 1, 30, 0, -50),
        animateFrom("#heading2", 1, 30, 0, -50),
        animateFrom("#text1", 1, 30, 0, -30),
        animateFrom("#text2", 1, 30, 0, -30),
        animateFrom("#text3", 1, 30, 0, 100);
      animateFrom("#p4i1", 1, 30, 0, -80),
        animateFrom("#p4i2", 1, 45, 0, -50),
        animateFrom("#p4i3", 1, 30, 0, -40),
        animateFrom("#p4i4", 1, 45, 0, 100),
        animateFrom("#p4i5", 1, 45, 0, 100);
    }, 200);
  },
  onEnterBack: function () {
    decreaseIndex();
    strokeChange(".dotsstro6", "grey");
    animateFrom("#p6i1", -1, 45, 0, 100), animateFrom("#p6i2", -1, 45, 0, 100);
    setTimeout(() => {
      animateFrom("#heading1", 1, 30, 0, -50),
        animateFrom("#heading2", 1, 30, 0, -50),
        animateFrom("#text1", 1, 30, 0, -30),
        animateFrom("#text2", 1, 30, 0, -30),
        animateFrom("#text3", 1, 30, 0, 100);
      setTimeout(() => {
        colorChange("#023dc7", "#04bfe0");
        animateFrom("#p5i1", 1, 30, 0, -80),
          animateFrom("#p5i2", 1, 45, 0, -50),
          animateFrom("#p5i3", 1, 30, 0, -40),
          animateFrom("#p5i4", 1, 45, 0, 100),
          animateFrom("#p5i5", 1, 45, 0, 100);
      }, 200);
    }, 200);
  },
});

ScrollTrigger.create({
  trigger: ".page5",
  onEnter: function () {
    inceaseIndex();
    colorChange("#023dc7", "#04bfe0");
    strokeChange(".dotsstro5", "white");
    animateFrom("#heading1", 1, 30, 0, -50),
      animateFrom("#heading2", 1, 30, 0, -50),
      animateFrom("#text1", 1, 30, 0, -30),
      animateFrom("#text2", 1, 30, 0, -30),
      animateFrom("#text3", 1, 30, 0, 100);
    animateFrom("#p4i1", -1, 30, 0, -80),
      animateFrom("#p4i2", -1, 45, 0, -50),
      animateFrom("#p4i3", -1, 30, 0, -40),
      animateFrom("#p4i4", -1, 45, 0, 100),
      animateFrom("#p4i5", -1, 45, 0, 100);
    setTimeout(() => {
      animateFrom("#heading1", 1, 30, 0, -50),
        animateFrom("#heading2", 1, 30, 0, -50),
        animateFrom("#text1", 1, 30, 0, -30),
        animateFrom("#text2", 1, 30, 0, -30),
        animateFrom("#text3", 1, 30, 0, 100);
      animateFrom("#p5i1", 1, 30, 0, -80),
        animateFrom("#p5i2", 1, 45, 0, -50),
        animateFrom("#p5i3", 1, 30, 0, -40),
        animateFrom("#p5i4", 1, 45, 0, 100),
        animateFrom("#p5i5", 1, 45, 0, 100);
    }, 200);
  },
  onEnterBack: function () {
    decreaseIndex();
    strokeChange(".dotsstro7", "grey");
    animateFrom("#heading1", 1, 30, 0, -50),
      animateFrom("#heading2", 1, 30, 0, -50),
      animateFrom("#text1", 1, 30, 0, -30),
      animateFrom("#text2", 1, 30, 0, -30),
      animateFrom("#text3", 1, 30, 0, 100);
    animateFrom("#p7i1", -1, 45, 0, 100),
      animateFrom("#p7i2", -1, 45, 0, 100),
      animateFrom("#entrepreneur", -1, 45, 0, 100);
    setTimeout(() => {
      colorChange("#020fc7", "#1f1973");
      animateFrom("#p6i1", 1, 45, 0, 100), animateFrom("#p6i2", 1, 45, 0, 100);
    }, 200);
  },
});

ScrollTrigger.create({
  trigger: ".page6",
  onEnter: function () {
    inceaseIndex();
    colorChange("#020fc7", "#1f1973");
    strokeChange(".dotsstro6", "white");
    animateFrom("#heading1", 1, 30, 0, -50),
      animateFrom("#heading2", 1, 30, 0, -50),
      animateFrom("#text1", 1, 30, 0, -30),
      animateFrom("#text2", 1, 30, 0, -30),
      animateFrom("#text3", 1, 30, 0, 100);

    setTimeout(() => {
      animateFrom("#p6i1", 1, 45, 0, 100), animateFrom("#p6i2", 1, 45, 0, 100);
    }, 200);
  },
  onEnterBack: function () {
    decreaseIndex();
    animateFrom("#heading1", 1, 30, 0, -50),
      animateFrom("#heading2", 1, 30, 0, -50),
      animateFrom("#text1", 1, 30, 0, -30),
      animateFrom("#text2", 1, 30, 0, -30),
      animateFrom("#text3", 1, 30, 0, 100);
    animateFrom("#entrepreneur", 1, 45, 0, 100);
    colorChange("#267339", "#26ab24");
    animateFrom("#p7i1", 1, 45, 0, 100), animateFrom("#p7i2", 1, 45, 0, 100);
  },
});

ScrollTrigger.create({
  trigger: ".page7",
  onEnter: function () {
    inceaseIndex();
    colorChange("#267339", "#26ab24");
    strokeChange(".dotsstro7", "white");
    animateFrom("#heading1", 1, 30, 0, -50),
      animateFrom("#heading2", 1, 30, 0, -50),
      animateFrom("#text1", 1, 30, 0, -30),
      animateFrom("#text2", 1, 30, 0, -30),
      animateFrom("#text3", 1, 30, 0, 100);
    animateFrom("#p6i1", -1, 45, 0, 100), animateFrom("#p6i2", -1, 45, 0, 100);
    setTimeout(() => {
      animateFrom("#p7i1", 1, 45, 0, 100),
        animateFrom("#p7i2", 1, 45, 0, 100),
        animateFrom("#entrepreneur", 1, 45, 0, 100);
    }, 200);
  },
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  // nav: true,
  responsive: {
    0: {
      items: 1,
    },
    700: {
      items: 1,
    },
  },
});
