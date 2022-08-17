
const encrypto = (text, number, skipOne) => {
    let encrypted = ""

    for (let i = 0; i < text.length; i++) {
        const char = text.charCodeAt(i)
        console.log(String.fromCharCode(char))
        if (skipOne == false){
            if (char % 2 == 0) {
                newChar = char + Math.abs(number *3)
                encrypted += String.fromCharCode(newChar)
            }
            else{
                newChar = char + Math.abs(Math.round(number *2))
                encrypted += String.fromCharCode(newChar)
            }
            console.log(encrypted)
        }
        else{
            flag = 0;
            if (char % 2 == 0 && flag == 0) {
                encrypted += String.fromCharCode(char)
                flag++
            }
            else if (char % 2 == 0 && flag == 1) {
                newChar = char + Math.abs(number *3)
                encrypted += String.fromCharCode(newChar)
                flag--
            }
            else{
                newChar = char + Math.abs(Math.round(number *2))
                encrypted += String.fromCharCode(newChar)
            }

        }
    }
    return encrypted
}




const decrypto = (text, number, skipOne) => {
    let encrypted = ""

    for (let i = 0; i < text.length; i++) {
        const char = text.charCodeAt(i)
        if (skipOne == false){
            if (char % 2 == 0) {
                newChar = char - Math.abs(number *3)
                encrypted += String.fromCharCode(newChar)
            }
            else{
                newChar = char - Math.abs(Math.round(number *2))
                encrypted += String.fromCharCode(newChar)
            }
        }else{
            flag = 0;
            if (char % 2 == 0 && flag == 0) {
                encrypted += String.fromCharCode(char)
                flag++
            }
            else if (char % 2 == 0 && flag == 1) {
                newChar = char - Math.abs(number *3)
                encrypted += String.fromCharCode(newChar)
                flag--
            }
            else{
                newChar = char - Math.abs(Math.round(number *2))
                encrypted += String.fromCharCode(newChar)
            }
        }
        }
        return encrypted
    }



enc = encrypto("Hello world", 2, false)
console.log(enc)
dec = decrypto(enc, 2, false)
console.log(dec)


enc2 = encrypto("Me llamo nazareno", 2, true)
console.log(enc2)
dec2 = decrypto(enc2, 2, true)
console.log(dec2)
