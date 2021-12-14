let groupNum = 1;

class ImgComponent {
    constructor(groupImg, srcImg, titleText, size = 'short', float = 'left') {

        this.render();

        this.elem.className = `img_gallery ${size}_box`;
        this.elem.dataset.group = `${groupImg}`
        this.elem.style.float = float;
        this.elem.innerHTML = `
        <img src="img/${srcImg}" alt="gallery_img">
        <h1>${titleText}</h1>`
        this.appendElem();


    }

    render = () => {
        this.elem = document.createElement('div');
    }
    appendElem = () => {
        document.querySelector('.imageGallery').append(this.elem);
    }

}



new ImgComponent(1, '1.jpg', 'Мельница у реки', 'short', 'left')
new ImgComponent(1, '2.jpg', 'Горы осенью', 'short', 'right')
new ImgComponent(1, '3.jpg', 'Деревня летом', 'short', 'right')
new ImgComponent(1, '4.gif', 'Анимированный котик', 'short', 'left')