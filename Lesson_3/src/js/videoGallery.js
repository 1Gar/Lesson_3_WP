let groupNum = 1;

class ImgComponent {
    constructor(groupImg, srcImg, titleText, size = 'short', float = 'left') {

        this.render();

        this.elem.className = `img_gallery ${size}_box`;
        this.elem.dataset.group = `${groupImg}`
        this.elem.style.float = float;
        this.elem.innerHTML = `
        <video poster
            controls
            src="video/${srcImg}">
                Your browser does not support the
                <code>audio</code> element.
        </video>
        <h1>${titleText}</h1>`
        this.appendElem();
    }
    render = () => {
        this.elem = document.createElement('div');
    }
    appendElem = () => {
        document.querySelector('.videoGallery').append(this.elem);
    }
}
new ImgComponent(1, '1.mp4', 'Never Gonna Give You Up', 'short', 'left')
new ImgComponent(1, '2.mp4', 'Морской прибой', 'short', 'right')