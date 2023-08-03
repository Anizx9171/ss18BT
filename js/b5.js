//b1:
class student {
    id
    name
    age
    sex
    phoneNumber
    address
    mark
    constructor(id, name, sex, age, mark, phoneNumber, address) {
        this.id = id
        this.name = name
        this.age = age
        this.sex = sex
        this.mark = mark
        this.phoneNumber = phoneNumber
        this.address = address
    }
}
console.log(`${student.name}, ${student.address}, ${student.age}, ${student.phoneNumber}`)
//b2:
let newStudent1 = new student(1, "Nguyễn Văn A", "Nam", 20, 8)
//b3:
let newStudent2 = new student(2, "Nguyễn Văn B", "Nam", 20, 10)
let newStudent3 = new student(3, "Nguyễn Văn C", "Nam", 20, 0)
let newStudent4 = new student(4, "Nguyễn Văn D", "Nam", 20, 7)
let arr = []
arr.push(newStudent1, newStudent2, newStudent3, newStudent4)
console.log(arr);
let max = 0;
let hm
for (const key in arr) {
    if (arr[key].mark > max) {
        max = arr[key].mark
        hm = key
    }
}
console.log(`Người có điểm cao nhất là ${arr[hm].name} và có số điểm là : ${max} `);
//b4:
let check = "";
let sum = arr.reduce((sum, value, i) => { return sum += arr[i].mark }, 0)
if (sum / arr.length - 1 > 7.5) {
    check = "khá"
}
else if (sum / arr.length - 1 > 7.5) {
    check = "Trung bình"
} else {
    check = "Yếu"
}
console.log(`Điểm trung bình của cả lớp là: ${sum / arr.length - 1}, lớp xếp loại ${check}`);