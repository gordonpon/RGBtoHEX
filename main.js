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

btnConvert.addEventListener('click', (event) => {
    if(!checkInput()) {
        strHEX = convertToHEX(arrayHEX)
        document.querySelector('#valueHEX').value = strHEX
        document.documentElement.style.setProperty('--colorHEX', strHEX);
        console.log(arrayHEX) 
    }
})

function convertToHEX(arr) {  
    let str ='#'
    for(let i=0; i<arr.length; i++) {
        str += arr[i] 
    }
    return str.toUpperCase().toString()
}

function checkInput() {
    if(inputR.value.replace(/^ | $/g,'') == '' || inputG.value.replace(/^ | $/g,'') == '' || inputB.value.replace(/^ | $/g,'') == '') {
        alert("欄位不可為空白")
        return true
    }
}






// const styles = getComputedStyle(document.documentElement);
// const value = String(styles.getPropertyValue('--bg-primary-color')).trim();

/* 讀取背景顏色 */
// document.getElementById("color-name").innerHTML=value;

/* 修改背景顏色 */
//document.documentElement.style.setProperty('--bg-primary-color', 'rgb(255, 0, 0)');


// function onlyNum()
// {
//     if(!((event.keyCode>=48&&event.keyCode<=57)||(event.keyCode>=96&&event.keyCode<=105)))
//     //考慮小鍵盤上的數字鍵
//     event.returnvalue=false;
// }

/*
1.新增RGB 各一個INPUT
2.輸入數字0~255，右邊方塊產生對應的顏色
3.新增轉換按鈕
4.新增HEX INPUT及對應顏色的方塊
5.新增條件限制
    a.RGB INPUT不得為空
    b.只能輸入數字、數字不可小於0及大於255
    c.按下轉換按鈕，HEX INPUT才可出現內容及方塊才可變色
    d.HEX Input不可累加

*/






