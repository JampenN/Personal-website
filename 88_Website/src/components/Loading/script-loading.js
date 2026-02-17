import { gsap } from "gsap";
import { CustomEase } from "gsap/all";
import SplitType from "split-type";
import { projectsData } from "@/components/Loading/projects.js";

export function initLoading() {

    const hasLoadedBefore = sessionStorage.getItem("hasLoadedBefore");

    if(hasLoadedBefore) {
        skipLoadingAnimation();
        return;
    }

    runFullLoadingAnimation();

    sessionStorage.setItem("hasLoadedBefore","true");
}

function runFullLoadingAnimation() {
    document.addEventListener("DOMContentLoaded", () =>{

gsap.registerPlugin(CustomEase);
CustomEase.create("hop", "0.9, 0, 0.1, 1");

    const projectsContainer = document.querySelector(".projects");
    const locationsContainer = document.querySelector(".locations");
    const gridImages = gsap.utils.toArray(".loader-img");
    const mainImage = document.querySelector(".main-img");

    const images = gridImages.filter((img) => img !== mainImage);

    console.log("window.SplitType:", window.SplitType);

    const introCopy = new SplitType(".intro-copy h3", {
        types: "words",
        absolute: false,
    });

    const titleHeading = new SplitType(".title h1", {
        types: "words",
        absolute: false,
    });

    const allImageSources = Array.from(
        { length: 35 },
        (_, i) => `images/Loading_animation/img${i + 1}.jpg`
    );

    const getRandomImageSet = () => {
        const shuffled = [...allImageSources].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 9);
    };

    function initializeDynamicContent () {
        projectsData.forEach((project) => {
            const projectItem = document.createElement("div");
            projectItem.className = "project-item";

            const projectName = document.createElement("p");
            projectName.textContent = project.name;
            projectName.classList.add("project-text")

            const directorName = document.createElement("p");
            directorName.textContent = project.director;
            directorName.classList.add("category-text")

            projectItem.appendChild(projectName);
            projectItem.appendChild(directorName);

            projectsContainer.appendChild(projectItem);
        });

        projectsData.forEach((project) => {
            const locationItem = document.createElement("div");
            locationItem.className = "location-item";

            const locationName = document.createElement("p")
            locationName.textContent = project.location;
            locationName.classList.add("project-text")

            locationItem.appendChild(locationName);
            locationsContainer.appendChild(locationItem);
        });
    }

    function startImageRotation() {
        const totalCycles = 20;

        for (let cycle = 0; cycle < totalCycles; cycle++) {
            const randomImages = getRandomImageSet();

            gsap.to(
                {},
                {
                    duration: 0,
                    delay: cycle * 0.15,
                    onComplete: () => {
                        gridImages.forEach((img, index) => {
                            const imgElement = img.querySelector("img");

                            if (cycle == totalCycles - 1 && img == mainImage) {
                                imgElement.src = "images/Loading_animation/img5.jpg";
                                gsap.set(".main-img", { scale: 2 
                                });
                            } else {
                                imgElement.src = randomImages[index];
                            }
                        });
                    },
                }
            );
        }
    }

    function setupInitialStates () {
        gsap.set("nav", {
            y: "-125%",
        });

        gsap.set(introCopy.words, {
            y:"110%",
        });

        gsap.set(titleHeading.words, {
            y: "110%",
        });
    }

    function init() {
        initializeDynamicContent();
        setupInitialStates();
        createAnimationTimlines();
    }

    init();

    function createAnimationTimlines() {
        const overlayTimeline = gsap.timeline();
        const imagesTimeline = gsap.timeline();
        const textTimeline = gsap.timeline();

        overlayTimeline.to(".logo-line-1", {
            backgroundPosition: "0% 0%",
            color: "#fff",
            duration: 1,
            ease: "none",
            delay: 0.5,
            onComplete: () => {
                gsap.to(".logo-line-2", {
                    backgroundPosition: "0% 0%",
                    color: "#fff",
                    duration: 1,
                    ease: "none",
                });
            },
        });

        overlayTimeline.to([".project-header", ".project-item"], {
            opacity: 1,
            duration: 0.15,
            stagger: 0.075,
            delay: 1,
        });

        overlayTimeline.to([".location-header", ".location-item"],
            {
                opacity: 1,
                duration: 0.15,
                stagger: 0.075,
            },
            "<"
        );

        overlayTimeline.to(".project-item", {
            color: "#fff",
            duration: 0.15,
            stagger: 0.075,
        });

        overlayTimeline.to(".location-item", {
            color: "#fff",
            duration: 0.15,
            stagger: 0.075,
        },
    "<"
);

        overlayTimeline.to([".project-header", ".project-item"], {
            opacity: 0,
            duration: 0.15,
            stagger: 0.075,
        });

        overlayTimeline.to([".location-header", ".location-item"], {
            opacity: 0,
            duration: 0.15,
            stagger: 0.075,
        },
    "<"
);

        overlayTimeline.to(".loading-overlay", {
            opacity: 0,
            duration: 0.5,
            delay: 1.5,
        });

        imagesTimeline.to(".loader-img", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 1,
            delay: 2.5,
            stagger: 0.05,
            ease: "hop",
            onStart: () => {
                setTimeout(() => {
                    startImageRotation();
                    gsap.to(".loader", { opacity: 0, duration: 0.3 });
                }, 1000);
            },
        });

        imagesTimeline.to(images, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            duration: 1,
            delay: 2.5,
            stagger: 0.05,
            ease: "hop",
        });

        imagesTimeline.to(".main-img", {
            y: -50,
            duration: 1,
            ease: "hop",
        });

        imagesTimeline.to(".main-img", {
            scale: 4,
            clipPath: "polygon(20% 10%, 80% 10%, 80% 90%, 20% 90%)",
            duration: 1.5,
            ease: "hop",
            onStart: () => {
                gsap.to(".main-img img", {
                    scale: 1, 
                    duration: 1.5,
                    ease: "hop",
                });

                gsap.to(".banner-img", { scale: 1, delay: 0.5, duration: 0.5 });
                gsap.to("nav", { y: "0%", duration: 1, ease: "hop", delay: 0.25 });
            },
        });

        imagesTimeline.to(".banner-img-1", {
            left: "40%",
            rotate: -20,
            duration: 1.5,
            delay: 0.5,
            ease: "hop",
        },
    "<"
);
        imagesTimeline.to(".banner-img-2", {
            left: "60%",
            rotate: 20,
            duration: 1.5,
            ease: "hop",
        },
    "<"
);

        textTimeline.to(titleHeading.words, {
            y: "0%",
            duration: 1, 
            stagger: 0.1,
            delay: 9.5,
            ease: "power3.out",
        });

        textTimeline.to(introCopy.words, {
            y: "0%",
            duration: 1, 
            stagger: 0.1,
            delay: 0.25, 
            ease: "power3.out",
        },
    "<"
);
    }
    });
}

function skipLoadingAnimation() {
    gsap.set(".loading-overlay", { opacity: 0, display: "none"});
    gsap.set("nav", { y: "0%" });

    gsap.set(".main-img", {
        scale: 4,
        y: -50,
        clipPath: "polygon(20% 10%, 80% 10%, 80% 90%, 20% 90%)"
    });

    gsap.set(".main-img img", { scale: 1 });

    gsap.set(".banner-img-1", {
        scale: 1,
        left: "40%",
        rotate: -20
    });

    gsap.set(".banner-img-2", {
        scale: 1,
        left: "60%",
        rotate: 20
    });

    gsap.set(".title h1 .word", { y: "0%" });
    gsap.set(".intro-copy h3 .word", { y: "0%" });
}