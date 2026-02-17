import gsap from "gsap";
import SplitType from "split-type";
import { storydata } from "./story";

export function interactiveGallery(){

    let activeTimeline = null;
    let activePhoto = null;
    let activeSplit = null;
    
    
    function centerGallery (el) {
        var tl = gsap.timeline();
    
        const rect = el.getBoundingClientRect();
    
        const objx = rect.left + (rect.width / 2);
        const objy = rect.top + (rect.height / 2);
    
        const screenX = window.innerWidth / 2;
        const screenY = window.innerHeight / 2;
    
        const dx = (screenX - objx);
        const dy = (screenY - objy);
        
        tl.to("#scene", {
            x: dx,
            y: dy,
            duration: 1,
            ease: "Power3.inOut",
        });
        return tl;
    }
    
    /*function clonePhoto (original) {
        var tl = gsap.timeline();
    
        const clone = original.cloneNode(true);
        clone.classList.add("cloned");
        document.body.appendChild(clone);
    
        const rectOriginal = original.getBoundingClientRect();
        const hx = window.innerWidth / 2;
        const hy = window.innerHeight / 2;
        const cx = hx - rectOriginal.width / 2;
        const cy = hy - rectOriginal.height / 2;
    
        tl.set(clone, {
            position: "fixed",
            top: cy, 
            left: cx, 
            width: rectOriginal.width,
            height: rectOriginal.height,
            zIndex: 100,
            opacity: 0, 
        });
        
        tl.to(clone,{
            opacity: 1,
        });
        return tl;
    }*/

    function clonePhoto(original) {
    const tl = gsap.timeline();
    const clone = original.cloneNode(true);

    clone.classList.add("cloned");

    const container = document.querySelector(".image-clone");
    container.innerHTML = "";
    container.appendChild(clone);

    tl.fromTo(clone,
        { opacity: 0, scale: 0.98 },
        { opacity: 1, scale: 1, duration: 0.4 }
    );

    return tl;
}
    
    
    //function openOverlay () {
        //var tl = gsap.timeline();
        
        //const storyOverlay = document.querySelector(".story-overlay");
        //storyOverlay.style.pointerEvents = "auto";
    
        //tl.to(storyOverlay, {
        //    width: "200vw",
        //    height: "200vh",
        //    duration: 0.8,
        //    ease: "power3.in",
        //});
        //return tl;
    //} 

    function openOverlay () {
    const tl = gsap.timeline();
    const overlay = document.querySelector(".story-overlay");

    overlay.style.pointerEvents = "auto";

    tl.to(overlay, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out"
    });

    return tl;
}

    
    function revealText () {
        var tl = gsap.timeline();
    
        const description = document.querySelector(".description");
        const storytext = document.querySelector(".story");
        const clone = document.querySelector(".cloned");
       
        if(!clone) return tl;
    
        const rectCl = clone.getBoundingClientRect(); 
        const CenterX = window.innerWidth / 2;
    
        tl.set(description, {
            //position: "fixed",//
            top: rectCl.top + "px",
            left: CenterX - rectCl.width / 2 - description.offsetWidth + "px",
            height: rectCl.height + "px",
        });
    
        tl.set(storytext, {
            //position: "fixed",//
            top: rectCl.top + "px",
            left: CenterX + rectCl.width / 2 + "px",
            height: rectCl.height + "px",
        });
    
        activeSplit = new SplitType(
            storytext.querySelector("p"),
            {types: "lines", lineClass: "story-Line"}
        );
    
        activeSplit.lines.forEach((line, i) => {
            tl.to(line, {
                onStart: () => {
                    line.classList.add("animate", "storyRevealAnimation");
                },
                duration: 0.1,
                delay: 0.1,
            });
        });
    
        return tl;
    }
    
    function setStoryContent({title, date, location, story }) {
        const titleEL = document.querySelector(".title");
        const dateEL = document.querySelector(".date");
        const locationEL = document.querySelector(".location");
        const storyEL = document.querySelector(".story-text");
    
        titleEL.textContent = title;
        dateEL.textContent = date;
        locationEL.textContent = location;
        storyEL.textContent = story;
    }
    
    function cleanupText() {
        if (activeSplit) {
            activeSplit.revert();
            activeSplit = null;
        }
    
        document.querySelectorAll(".story-Line").forEach(line => {
            line.classList.remove("animate", "storyRevealAnimation");
        });
    }
    
    function cleanupClone() {
        document.querySelectorAll(".cloned").forEach(c => c.remove());
    }
    
    document.querySelectorAll(".photobook").forEach(photo => {
        photo.addEventListener("click", () => {
            if (activeTimeline && activeTimeline.isActive()) return;
    
            const id = photo.id;
            const stories = storydata[id];
    
            if (!stories) {
                console.warn(`No content found for photo id: ${id}`);
                return;
            }
    
            setStoryContent(stories);
    
            const master = gsap.timeline({
                onComplete: () => {
                    revealText().play();
                },
                onReverseComplete: () => {
                    document.querySelector(".story-overlay").style.pointerEvents = "none";
                    cleanupClone();
                    activeTimeline = null;
                }
            });
    
            activeTimeline = master
    
            master
                .add(centerGallery(photo))
                .add(clonePhoto(photo))
                .add(openOverlay());
            });
        });
    
    
    document.addEventListener("click", (e) => {
        const clone = e.target.closest(".cloned");
        if (!clone || !activeTimeline) return;
    
        cleanupText();
        activeTimeline.reverse();
    });
}

