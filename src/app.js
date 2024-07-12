import './app.scss';
import ProjectModel from './js/ProjectModel';
// import addInviewByScroll from './js/addInviewByScroll';

// import data from './data/basic.json';

function start() {
    // const inview = new Inview();
    // const swipers = new Swipers();

    // window.addEventListener('load', () => {
    //     addInviewByScroll();
    // });

    const projectModel = new ProjectModel();

    setTimeout(() => {
        projectModel.start();
    }, 300);
}

start();
