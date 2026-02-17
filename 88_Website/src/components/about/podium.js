import gsap from "gsap";

export function podiumPreview() {
    
    const podiumSources = [
        new URL("@/assets/images/podium1.jpg", import.meta.url).href,
        new URL("@/assets/images/podium2.jpg", import.meta.url).href,
        new URL("@/assets/images/podium3.jpg", import.meta.url).href,
    ];
    
    
    const appendImages = (src) => {
        const podium1 = document.querySelector(".podium-img-1");
        const podium2 = document.querySelector(".podium-img-2");
        
        const img1 = document.createElement("img");
        const img2 = document.createElement("img");
        
        img1.src = src;
        img1.style.clipPath = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";
        img2.src = src;
        img2.style.clipPath = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";
        
        podium1.appendChild(img1);
        podium2.appendChild(img2);
        
        gsap.to([img1, img2], {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            duration: 1,
            ease: "power3.out",
            onComplete: function() {
                removeExtraImages(podium1)
                removeExtraImages(podium2)
            },
        });
    };
    
    function removeExtraImages(container) {
        while (container.children.length > 10) {
            container.removeChild(container.firstChild);
        }
    }
    
    document.querySelectorAll(".result").forEach((item, index) => {
        item.addEventListener("mouseover", () => {
            appendImages(podiumSources[index]);
        });
        
        item.addEventListener("mouseout", function () {
            gsap.to(".podium-img img", {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                duration: 1,
                ease: "Power3.out",
            });
        });
    });
    
    document.addEventListener("mousemove", function (e) {
        const podium = document.querySelector(".podium");
        
        gsap.to (podium, {
            x: e.clientX - 50,
            y: e.clientY,
            duration: 1,
            ease: "power3.out",
        });
    });
    
};


export function podiumPreview2 () {

    const podiumSources = [
        new URL("@/assets/images/podium1.jpg", import.meta.url).href,
        new URL("@/assets/images/podium2.jpg", import.meta.url).href,
        new URL("@/assets/images/podium3.jpg", import.meta.url).href,
    ];

    const podium = document.querySelector(".podium");
    const podium1 = document.querySelector(".podium-img-1");
    const podium2 = document.querySelector(".podium-img-2");

    // create images ONCE
    const img1 = document.createElement("img");
    const img2 = document.createElement("img");

    podium1.appendChild(img1);
    podium2.appendChild(img2);

    gsap.set([img1, img2], {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    });

    const showImage = (src) => {
        img1.src = src;
        img2.src = src;

        gsap.to([img1, img2], {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            duration: 0.7,
            ease: "power3.out",
            overwrite: "auto",
        });
    };

    const hideImage = () => {
        gsap.to([img1, img2], {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            duration: 0.5,
            ease: "power3.out",
            overwrite: "auto",
        });
    };

    // hover logic
    document.querySelectorAll(".result").forEach((item, index) => {
        item.addEventListener("mouseenter", () => {
            showImage(podiumSources[index]);
        });

        item.addEventListener("mouseleave", hideImage);
    });

    // smooth mouse follow (NO animation stacking)
    const moveX = gsap.quickTo(podium, "x", { duration: 0.3, ease: "power3.out" });
    const moveY = gsap.quickTo(podium, "y", { duration: 0.3, ease: "power3.out" });

    document.addEventListener("mousemove", (e) => {
        moveX(e.clientX - 500);
        moveY(e.clientY + 200);
    });
}

export function podiumPreviewSingle() {
    const podiumSources = [
        new URL("@/assets/images/podium1.jpg", import.meta.url).href,
        new URL("@/assets/images/podium2.jpg", import.meta.url).href,
        new URL("@/assets/images/podium3.jpg", import.meta.url).href,
    ];

    const podium = document.querySelector(".podium");
    const podiumContainer = document.querySelector(".podium-img-1");

    // create ONE image
    const img = document.createElement("img");
    podiumContainer.appendChild(img);

    gsap.set(img, {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    });

    const showImage = (src) => {
        img.src = src;

        gsap.to(img, {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            duration: 0.7,
            ease: "power3.out",
            overwrite: "auto",
        });
    };

    const hideImage = () => {
        gsap.to(img, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            duration: 0.5,
            ease: "power3.out",
            overwrite: "auto",
        });
    };

    // hover logic
    document.querySelectorAll(".result").forEach((item, index) => {
        item.addEventListener("mouseenter", () => {
            showImage(podiumSources[index]);
        });

        item.addEventListener("mouseleave", hideImage);
    });

    // smooth mouse follow
    const moveX = gsap.quickTo(podium, "x", {
        duration: 0.3,
        ease: "power3.out",
    });
    const moveY = gsap.quickTo(podium, "y", {
        duration: 0.3,
        ease: "power3.out",
    });

    document.addEventListener("mousemove", (e) => {
        moveX(e.clientX);
        moveY(e.clientY);
    });
};