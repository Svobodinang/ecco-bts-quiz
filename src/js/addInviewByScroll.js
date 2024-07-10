import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
// import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger);

const addInviewByScroll = () => {
    Array.from(document.querySelectorAll('.inview')).forEach((trigger) => {
        ScrollTrigger.create({
            trigger,
            start: 'top 90%',
            end: 'bottom top',
            onToggle: ({ isActive }) => {
                if (isActive) trigger.classList.add('entered');
            },
            onUpdate: ({ progress }) => {
                if (trigger.hasAttribute('parallax')) {
                    trigger.style.setProperty('--parallax-progress', progress);
                }
            }
        });
    });

    const videoEl = document.getElementById('video');

    ScrollTrigger.create({
        trigger: videoEl,
        start: 'top 20%',
        end: 'bottom 20%',
        onEnter: () => {
            videoEl.play();
        },
        onLeave: () => {
            videoEl.pause();
        },
        onEnterBack: () => {
            videoEl.play();
        },
        onLeaveBack: () => {
            videoEl.pause();
        }
    });
};

export default () => {
    setTimeout(addInviewByScroll, 0);
};
