const input = document.getElementById("input")
const output = document.getElementById("output")
const keyword = document.getElementById("keyword")
const small = document.getElementById("small")
const hint01 = document.getElementById("hint01")
const hint02 = document.getElementById("hint02")
let selected = 1;

let data = {
    input: "",
    output: "",
    key: "",
    fnc_main: function(inputX = input.value, keyX = keyword.value) {
        (selected == 0) ? this.fnc_encryption(inputX, keyX) : this.fnc_decryption(inputX, keyX)
        return;
    },
    fnc_encryption: function(inputX, keyX) {
        let complete = ""
        for (i=0; i<inputX.length; i++){
            complete += String.fromCharCode(inputX.charCodeAt(i) + fnc_encoding(inputX, keyX, inputX.charCodeAt(i), i))
        }
        output.value = complete
        return;
    },
    fnc_decryption: function(inputX, keyX){
        let complete = ""
        for (i=0; i<inputX.length; i++){
            complete += String.fromCharCode(inputX.charCodeAt(i) - fnc_decoding(inputX, keyX, inputX.charCodeAt(i), i))
        }
        output.value = complete
        return;
    }
}

function fnc_encoding(inputX, keyX, char, i){
    let matika = keyX.charCodeAt(i % keyX.length) - i
    return matika
}

function fnc_decoding(inputX, keyX, char, i){
    let matika = keyX.charCodeAt(i % keyX.length) - i
    return matika
}