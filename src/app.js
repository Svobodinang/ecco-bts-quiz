import './app.scss';
import insertVideo from './js/insertVideo';
import addInviewByScroll from './js/addInviewByScroll';

import data from './data/basic.json';

function start() {
    // const inview = new Inview();
    // const swipers = new Swipers();

    const videoBlockId = 'video';

    window.addEventListener('load', () => {
        insertVideo(videoBlockId, data[3].link, data[3].linkPt);
        addInviewByScroll();
    });
}

start();
