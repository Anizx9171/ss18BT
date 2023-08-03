function Hero(image, top, left, size) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = 5;
    this.getHeroElement = function () {
        return `<img width="${this.size}"
           height="${this.size}"
           src="${this.image}"
           style="top:${this.top}px;left:${this.left}px;position:absolute;" />`;
    }

    this.changeSpeed = (value) => { this.speed = value }
    this.moveRight = function () {
        this.left += this.speed;
        console.log('move phai: ' + this.left);
    }
    this.moveBottom = function () {
        this.top += this.speed;
        console.log('move xuong: ' + this.top);
    }
    this.moveLeft = function () {
        this.left -= this.speed;
        console.log('move trai: ' + this.left);
    }
    this.movetTop = function () {
        this.top -= this.speed;
        console.log('move tren: ' + this.top);
    }

}

var hero = new Hero('../anh/add.jpg', 20, 30, 200);

let cao = window.innerHeight
let leftBanDau = hero.left
let topBanDau = hero.top

let xongPhai = false
let xongDuoi = false

function start() {

    if ((hero.left < window.innerWidth - hero.size) && !xongPhai) {
        hero.moveRight();
    }
    else if ((hero.top < cao - hero.size) && !xongDuoi) {
        xongPhai = true
        hero.moveBottom();
    } else if ((hero.left > leftBanDau) && xongPhai) {
        xongDuoi = true
        hero.moveLeft()
    } else if ((hero.top > topBanDau) && xongDuoi) {
        hero.movetTop()
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 10);
}