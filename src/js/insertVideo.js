export default function insertVideo(idBox, src, srcPt) {
    const videoBox = document.getElementById(idBox);
    const source = document.createElement('source');

    let vSrc = null;

    const isPt = () => (window.innerWidth <= 500 || window.innerHeight <= 500) && window.innerWidth <= window.innerHeight && srcPt;

    if (isPt()) {
        vSrc = srcPt;

        // if (posterPt) {
        //     import(`../assets/images/${posterPt}`).then((modulePt) => {
        //         videoBox.setAttribute('poster', modulePt.default);
        //     });
        // }
    } else {
        vSrc = src;

        // if (poster) {
        //     import(`../assets/images/${poster}`).then((module) => {
        //         videoBox.setAttribute('poster', module.default);
        //     });
        // }
    }

    source.setAttribute('src', vSrc);
    source.setAttribute('type', 'video/mp4');

    videoBox.appendChild(source);
}
