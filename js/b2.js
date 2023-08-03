class Apple {
    weight = 10
}
class Human {
    name
    sex
    weight
    constructor(name, sex, weight) {
        this.name = name
        this.sex = sex
        this.weight = weight
        this.speak = () => { console.log(`Cho bố cái địa chỉ`) }
        this.eat = (apple) => {
            if (apple.weight > 0) {
                this.weight++
                apple.weight--
                console.log(`${this.name} đã ăn táo`);
            }
        }
        this.checkAppleWeight = (apple) => {
            console.log(`Quả táo có số cân nặng là: ${apple.weight}`);
        }
        this.knowOthers = (others) => {
            console.log(`Người đó là: ${others.name}`);
            console.log(`Người đó có giới tính là: ${others.sex} `);
            console.log(`Người đó có cân nặng là: ${others.weight}`);
        }
    }
}
let apple = new Apple()
let adam = new Human("Adam", "Nam", 100)
let eva = new Human("Eva", "Nữ", 90)
adam.speak()
eva.eat(apple)
eva.checkAppleWeight(apple)
eva.eat(apple)
eva.eat(apple)
eva.checkAppleWeight(apple)
adam.knowOthers(eva)
eva.knowOthers(adam)