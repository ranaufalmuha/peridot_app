import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function RoadAnimation(length) {
    gsap.registerPlugin(ScrollTrigger);

    for (let i = 0; i < length; i++) {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: `.RoadMaps${i}`,
                start: "top 30%",
                end: "bottom 30%",
                scrub: 3,
                // markers: true,
                toggleActions: "restart none reverse none"
            },
        });

        tl.to(`.RoadMaps${i}`, {
            x: 400,
            scale: 1.3,
            // markers: true,
            // duration: 1,
            ease: "none",
        })
            .to(`.RoadMaps${i}`, {
                scale: 1,
                opacity: 0.1,
                // duration: 1,
            });
    }
}
