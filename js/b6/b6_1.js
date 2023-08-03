let products = [{ id: 1, name: "Milk", count: 100 }, { id: 2, name: "Yakult", count: 100 }, { id: 3, name: "Butter", count: 100, }];
products.push({ id: 4, name: "me", count: 100 })
console.log(products);
let n = products[1].id
products.splice(n - 1, 1)
let flag = false
let keyy
for (const key in products) {
    if (products[key].name = "Butter") {
        flag = true
        keyy = key
    }
}
if (flag) {
    console.log(products[keyy]);
} else {
    console.log('Doi tuong khong ton tai');
}