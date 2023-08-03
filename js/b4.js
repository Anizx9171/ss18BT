class Rat {
    constructor(name, weight, speed) {
        this.speed = speed
        this.name = name
        this.weight = weight
        this.status = true
    }
    speak = () => {
        console.log(`Chit chit chit chit`);
    }
}
class Cat {
    constructor(name, weight, speed) {
        this.eat = false
        this.speed = speed
        this.name = name
        this.weight = weight
    }
    speak = () => {
        console.log(`Meo Meo Meo me may beo`);
    }
    atkMouse = (mouse) => {
        if (this.speed > mouse.speed) {
            console.log(`Da bat duoc Chuot`);
        }
    }
    eatMouse = (mouse) => {
        if (mouse.status = true) {
            if (this.eat = true) {
                console.log(`Da an chuot`);
                this.weight += mouse.weight
                mouse.status = false
            }
        }
    }
}
let Tom = new Cat('Tom', 20, 50)
let jerry = new Rat('Jerry', 5, 10)
Tom.speak()
jerry.speak()
Tom.atkMouse(jerry)
Tom.eatMouse(jerry)