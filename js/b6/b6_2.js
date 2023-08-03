class Dog {
    constructor(name, speed) {
        this.name = name
        this.speed = speed
    }
    sua = () => {
        console.log(`gau gau`);
    }
    batmeo = (cat) => {
        if (this.speed > cat.speed) {
            console.log(`Da bat dc meo`);
        }
    }
}
class Cat extends Dog {
    constructor(name, speed) {
        this.name = name
        this.speed = speed
    }
}
let hush = new Dog()
let meomeo = new Cat()
hush.batmeo(meomeo)
