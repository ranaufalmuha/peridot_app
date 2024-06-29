import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function TeamAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: `.teamanimations`,
            start: "-50% center",
            end: "100% center",
            scrub: 3,
            // markers: true,
            toggleActions: "restart none reverse none"
        },
    });

    tl.to(`.teamanimations`, {
        scale: 1.1,
        duration: 3,
        ease: "none",
    })
        .to(`.teamanimations`, {
            opacity: .8,
            duration: 3,
        });
}
