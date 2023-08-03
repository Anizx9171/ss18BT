let arr = []
let value;
while (true) {
    let value = prompt("Nhap C/R/U/D/E")
    if (value == "C") {
        let A = prompt("Nhap khoa hoc ban muon tham gia")
        let B = prompt("Nhap trang thai hoan thanh True/False")
        arr.push([A, B])
        for (const key in arr) {
            console.log(`${key}\. ${arr[key][0]}`);
            console.log(`Complete: ${arr[key][1]}`);
        }
    }
    else if (value == "R") {
        for (const key in arr) {
            console.log(`${key}\. ${arr[key][0]}`);
            console.log(`Complete: ${arr[key][1]}`);
        }
    }
    else if (value == "U") {
        let A = +prompt('Ban muon sua o vi tri nao')
        let B = prompt("Nhap khoa hoc ban muon tham gia")
        let C = prompt("Nhap trang thai hoan thanh True/False")
        arr[A - 1][0] = B
        arr[A - 1][1] = C
    }
    else if (value == "D") {
        let A = prompt("Nhap vi tri ban muon xoa")
        arr.splice(A - 1)
    }
    else if (value == "E") {
        console.log('Cảm ơn bạn đã đến với Rikkei Academy');
        break;
    }
}
