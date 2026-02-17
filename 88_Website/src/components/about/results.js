import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



export function pinResults() {
  const colLeft = document.querySelector(".column-left");
  const triggerImg = document.querySelector(".bio-text-img");

  if (!triggerImg) return;

  const create = () => {

  ScrollTrigger.create({
    trigger: triggerImg,
    start: "center center",
    endTrigger: ".results",
    end: "center center",
    pin: colLeft,
    pinSpacing: false,
    markers: false,
  });

  ScrollTrigger.refresh();
};

if (triggerImg.complete) {
    create();
}
else {
    triggerImg.addEventListener("load", create, {once: true});
}
};


export function initGallery() {

    document.querySelectorAll(".photobook").forEach(photo => {
        photo.addEventListener("click", (event) => {
            const clickedImage = event.currentTarget;
            const clone = cloneImage(clickedImage);
            shiftTo(photo, () => {
                gsap.set(clone, {
                    opacity: 1,
                    onComplete: () => {
                        expandOverlay();
                    }
                });
            });
        });
    });

    function shiftTo(el, onCompleteCallback) {
        const rect = el.getBoundingClientRect();

        const objx = rect.left + (rect.width / 2);
        const objy = rect.top + (rect.height / 2);

        const screenX = window.innerWidth / 2;
        const screenY = window.innerHeight / 2;

        const dx = (screenX - objx);
        const dy = (screenY - objy);

        const tl = gsap.timeline();

        tl.to("#scene", {
            x: dx,
            y: dy,
            duration: 1,
            ease: "power3.inOut",
            onComplete: onCompleteCallback,
        });
    }

    const storyOverlay = document.querySelector(".story-overlay");

    function expandOverlay() {
        storyOverlay.style.pointerEvents = "auto";
        gsap.to(storyOverlay, {
            width: "200vw",
            height: "200vh",
            duration: 0.8,
            ease: "power3.in"
        });   
    }

    function shrinkOverlay() {
        gsap.to(storyOverlay, {
            scale: 0,
            duration: 0.8,
            ease: "power3.inOut",
            onComplete: () => storyOverlay.style.pointerEvents = "none"
        });
    }


    const original = document.querySelector(".photobook");

    function cloneImage(original) {
        const clone = original.cloneNode(true);

        clone.classList.add("is-clone");

        document.body.appendChild(clone);

        const rectOriginal = original.getBoundingClientRect();
        const hx = window.innerWidth / 2;
        const hy = window.innerHeight / 2;
        const cx = hx - rectOriginal.width / 2;
        const cy = hy - rectOriginal.height / 2;

        gsap.set(clone, {
            position: "fixed",
            top: cy,
            left: cx,
            width: rectOriginal.width,
            height: rectOriginal.height,
            zIndex: 100,
            opacity: 0
        });

        return clone;
    }
}