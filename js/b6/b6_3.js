class uses {
    constructor(id, Name, email, address, numberPhone) {
        this.id = id
        this.Name = Name
        this.email = email
        this.address = address
        this.numberPhone = numberPhone
        this.role = 0
    }
}
class admin extends uses {
    constructor() {
        super(id, Name, email, address, numberPhone)
    }
}
arr = []
let ongA = new uses(1, "A", "A@gmail.com", "1024", "0123456987a")
let ongB = new uses(1, "B", "B@gmail.com", "1020", "0123456987b")
let ongC = new uses(1, "C", "C@gmail.com", "10874", "0123456987c")
let ongD = new uses(1, "D", "D@gmail.com", "1024789", "0123456987d")
arr.push(ongA, ongB, ongC, ongD)
let n = prompt("Nhap ten nguoi dung muon xoa")
let check = true
for (const key in arr) {
    if (arr[key].name = n && arr[key].role != 1) {
        arr.splice(key)
        check = false
    }
}
if (check) {
    console.log('Khong tim thay hoac khong the xoa nguoi nay');
}
let m = +prompt("Nhap id muon sua")
for (const key in arr) {
    if (arr[key].id == m && arr[key].role != 1) {
        arr[key].Name = prompt('Nhap ten moi')
        arr[key].email = prompt('Nhap email moi')
        arr[key].address = prompt('Nhap dia chi moi')
        arr[key].numberPhone = prompt('Nhap sdt moi')
    }
}
let ongE = new uses(1, "E", "E@gmail.com", "1024789E", "0123456987e")
for (const key in object) {
    if (arr[key].role == 1) {
        console.log(arr[key]);
    }
}