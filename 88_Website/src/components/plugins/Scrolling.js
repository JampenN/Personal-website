import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import { nextTick } from "vue";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default {
  install(app) {
    nextTick(() => {
      const smoother = ScrollSmoother.create({
        wrapper: "#app",
        content: "#app > *",
        smooth: 1.2,
        effects: true,
      });

      app.provide("smoother", smoother);
      app.config.globalProperties.$smoother = smoother;
    });
  },
};