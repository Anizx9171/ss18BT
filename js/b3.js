class bongDen {
    trangthai = false
    ketnoi = false
    constructor() {
        this.lapbong = (congtac) => {
            congtac.ketnoi = true
            this.ketnoi = true
            console.log(`Da ket noi`);
        }
    }
}
class congTac {
    ketnoi = false
    constructor() {
        this.battatbong = (bong, value) => {
            if (this.ketnoi) {
                bong.trangthai = value
                console.log(bong.trangthai);
            }
        }
    }
}
let bong = new bongDen()
let nut = new congTac()
bong.lapbong(nut)
nut.battatbong(bong, true)