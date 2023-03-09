
/*get the number of characters*/
function charLength() {

    let charLength = document.getElementById('length').value;
    document.getElementById('result').innerHTML = charLength;
    return charLength;

}

document.getElementById('length').addEventListener('change', charLength)









let u = 'QWERTYUIOPASDFGHJKLZXCVBNM';
let L = ['m', 'n', 'b', 'v', 'c', 'x', 'z', 'l', 'k', 'j', 'h', 'g', 'f', 'd', 's', 'a', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
let n = [6, 5, 4, 3, 2, 1, 7, 8, 9, 0];
let s = ['!', '@', '#', '$', '&'];

let random = 0;
let output;

// function printu() {
//     let random = Math.floor(Math.random() * 26);
//     output += u[random];
//     return output;
// }



function generate() {

    let password_length=charLength();
    let checkbox1 = document.getElementById("uppercase").checked;
    let password ="";
    console.log(checkbox1)
    console.log(password_length)
    if (checkbox1 === true) {
        for(let i=0; i<password_length; i++){
            password +=u[Math.floor(Math.random() * 26)] ;
        }
       
    }
    console.log(password)
    document.getElementById('password__result').innerText = password; 
}
