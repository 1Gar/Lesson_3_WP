let groupNum = 1;

class ImgComponent {
    constructor(groupImg, srcImg, titleText, size = 'short', float = 'left') {

        this.render();

        this.elem.className = `img_gallery ${size}_box`;
        this.elem.dataset.group = `${groupImg}`
        this.elem.style.float = float;
        this.elem.innerHTML =
            `<audio controls>
        <source src="music/${srcImg}" type="audio/mpeg" controls="controls">
        </audio>
        <h1>${titleText}</h1>`
        this.appendElem();

    }
    render = () => {
        this.elem = document.createElement('div');
    }
    appendElem = () => {
        document.querySelector('.audioGallery').append(this.elem);
    }

}



new ImgComponent(1, '1.mp3', 'Птички летом', 'short', 'left')
new ImgComponent(1, '2.mp3', 'Ручеек в ущелье', 'short', 'right')
new ImgComponent(1, '3.mp3', 'Закат в лесу', 'long')