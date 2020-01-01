const inputR = document.querySelector('#valueR')
const inputG = document.querySelector('#valueG')
const inputB = document.querySelector('#valueB')

const boxR = document.querySelector('.boxR') 
const boxG = document.querySelector('.boxG') 
const boxB = document.querySelector('.boxB')

const btnConvert = document.querySelector('#btnConvert')

let strHEX = ''
let arrayRGB = new Array()
let arrayHEX = new Array()

//R欄位監聽器
inputR.addEventListener('input', event => {
    
    let intR = Number(event.target.value)
    let H_16 = 0

    arrayRGB.splice(0, 1, intR)
    const strR = 'rgb(' + intR +' ,0 ,0)'
    document.documentElement.style.setProperty('--colorR', strR);
    switch(intR) {
        case intR >= 10 && intR < 16:
            H_16 ='0' + Math.abs(intR).toString(16)
            break
        case intR > 255:
            H_16 = Math.abs(255).toString(16)
            break
        default:
            H_16 = Math.abs(intR).toString(16)
    }
    arrayHEX.splice(0, 1, H_16)
    console.log(H_16)
})
//G欄位監聽器
inputG.addEventListener('input', event => {
    
    let intG = Number(event.target.value)
    let E_16 = 0

    arrayRGB.splice(1, 1, intG)
    let strG = 'rgb(0, ' + intG + ' ,0)'
    document.documentElement.style.setProperty('--colorG', strG);

    switch(intG) {
        case intG >= 10 && intG < 16:
            E_16 ='0' + Math.abs(intG).toString(16)
            break
        case intG > 255:
            E_16 = Math.abs(255).toString(16)
            break
        default:
            E_16 = Math.abs(intG).toString(16)  
    }
    arrayHEX.splice(1, 1, E_16)
})
//B欄位監聽器
inputB.addEventListener('input', event => {
    
    let intB = Number(event.target.value)
    let X_16 = 0

    arrayRGB.splice(2, 1, intB)
    let strB = 'rgb(0, 0, ' + intB + ')'
    document.documentElement.style.setProperty('--colorB', strB);

    switch(intB) {
        case intB >= 10 && intB < 16:
            X_16 ='0' + Math.abs(intB).toString(16)
            break
        case intB > 255:
            X_16 = Math.abs(255).toString(16)
            console.log(X_16)
            break
        default:
            X_16 = Math.abs(intB).toString(16)
    }
    arrayHEX.splice(2, 1, X_16)
})
//按鈕監聽器
btnConvert.addEventListener('click', (event) => {
    if(!checkInput()) {
        strHEX = convertToHEX(arrayHEX)
        document.querySelector('#valueHEX').value = strHEX
        document.documentElement.style.setProperty('--colorHEX', strHEX);
        console.log(arrayHEX) 
    }
})
//RGBtoHEX
function convertToHEX(arr) {  
    let str ='#'
    for(let i=0; i<arr.length; i++) {
        str += arr[i] 
    }
    return str.toUpperCase().toString()
}
//檢查欄位輸入
function checkInput() {
    if(inputR.value.replace(/^ | $/g,'') == '' || inputG.value.replace(/^ | $/g,'') == '' || inputB.value.replace(/^ | $/g,'') == '') {
        alert("欄位不可為空白")
        return true
    }
}
