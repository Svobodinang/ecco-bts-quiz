export default () => {
    setTimeout(() => {
        const preloaderEl = document.getElementById('preloader');

        preloaderEl.classList.add('hide');

        setTimeout(() => {
            preloaderEl.remove();
        }, 350);
    }, 2500);
}