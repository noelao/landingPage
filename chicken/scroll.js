var ting = window.innerHeight

var title = document.querySelector(".judul")
var pengeGap = document.querySelector(".pengeGap").getBoundingClientRect()
var titleBound = title.getBoundingClientRect()

var jarak = 52

var ket1 = document.querySelector(".keterangan.satu")
var ket1Bound = ket1.getBoundingClientRect()

var jarak2 = jarak + ket1Bound.height

var emot1 = document.querySelector(".emot.satu")
var emot1Bound = emot1.getBoundingClientRect()

var ket2 = document.querySelector(".keterangan.dua")
var ket2Bound = ket2.getBoundingClientRect()

var emot2 = document.querySelector(".emot.dua")
var emot1Bound = emot2.getBoundingClientRect()

var ket3 = document.querySelector(".keterangan.tiga")
var ket3Bound = ket3.getBoundingClientRect()

window.addEventListener("scroll", function(){
    var s = scrollY

    if(s > (pengeGap.height + 30)){
        title.style.transform = `translateY(${s - (pengeGap.height + 30)}px)`
    } else {
        title.style.transform = `translateY(${0}px)`
    }

    // angka y
    var ket1ini = pengeGap.height + 30 + jarak
    // angka spesifik berhenti x
    var ke = document.querySelector(".kataKataPembuka .wrapper").clientWidth
    var keModif = (ke - ket1.clientWidth) / 2

    if(s > ket1ini){
        if((s-ket1ini)*2 > keModif){
            ket1.style.transform = `translateX(-${keModif}px) translateY(${s - ket1ini}px)`
        } else {
            ket1.style.transform = `translateX(-${(s - ket1ini) * 2}px) translateY(${s - ket1ini}px)`
        }
    } else {
        ket1.style.transform = `translateX(${0}px) translateY(${0}px)`
    }

    var emot1ini = pengeGap.height + jarak2 + 70
    
    if(s > emot1ini){
        emot1.style.transform = `translateY(${s - emot1ini}px)`
    } else {
        emot1.style.transform = `translateY(${0}px)`
    }
    

    // ket ke dua
    var ket2ini = pengeGap.height + 30 + jarak2 * 2
    if(s > ket2ini){
        if((s-ket2ini)*2 > keModif){
            ket2.style.transform = `translateX(${keModif}px) translateY(${s - ket2ini}px)`
        } else {
            ket2.style.transform = `translateX(${(s - ket2ini) * 2}px) translateY(${s - ket2ini}px)`
        }
    } else {
        ket2.style.transform = `translateX(${0}px) translateY(${0}px)`
    }


    var emot2ini = pengeGap.height + jarak2 * 3

    if(s > emot2ini){
        emot2.style.transform = `translateY(${s - emot2ini}px)`
    } else {
        emot2.style.transform = `translateY(${0}px)`
    }

    
    // ket ke dua
    var ket3ini = pengeGap.height + jarak2 * 4
    if(s > ket3ini){
        if((s-ket3ini)*2 > keModif){
            ket3.style.transform = `translateX(-${keModif}px) translateY(${s - ket3ini}px)`
        } else {
            ket3.style.transform = `translateX(-${(s - ket3ini) * 2}px) translateY(${s - ket3ini}px)`
        }
    } else {
        ket3.style.transform = `translateX(${0}px) translateY(${0}px)`
    }

})