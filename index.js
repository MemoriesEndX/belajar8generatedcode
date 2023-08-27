let passwordLength = document.getElementById("passwordLength")
let password = document.getElementById("password")

function generatePassword(){
    const lowerAlphabet ="abcdefghijklmnopqrstuvwxyz"
    const upperAlphabet ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numerik ="0123456789"
    const symbol ="!@#$%^&*()_+?><`"

    const data = lowerAlphabet + upperAlphabet + numerik + symbol
    let generator = '';
    for (let index = 0; index < 7; index++) {
        generator += data[Math.floor(Math.random() * data.length)];
        
    }
    return generator 
    // console.log('generator: ', generator);

}

function getPassword(){
   const newPassword = generatePassword(passwordLength.value)
   password.value = newPassword
   alert('password has been generated')
}


function savePassword(){

}