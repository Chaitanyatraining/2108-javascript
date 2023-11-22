//selecting input fields

// nameValue.addEventListener('keyup', ()=>{
//     console.log(nameValue.value)
// })

const nameValue = document.getElementById('name-value')
const emailValue = document.getElementById('email-value')
const pwdValue = document.getElementById('pwd-value')
const phoneValue = document.getElementById('phone-value')
const genderValue = document.getElementById('gender-value')
const occValue = document.getElementById('occ-value')
const nameErr = document.getElementById('name-Err')
const addBtn = document.getElementById('addBtn')

//function validating name field
function validateName(){
    const name = nameValue.value

    // if(name.length == 0){
    //     nameErr.innerHTML = `<span class="text-danger" id="name-Err">Enter a valid userName</span>`
    //     addBtn.disabled = true;

    //     return false;
    // }

    const pattern3 = /^[a-z](?:[a-z0-9-]*[a-z0-9])?$/
    if(!name.match(pattern3)){
        nameErr.innerHTML = `<span class="text-danger" id="name-Err">Enter a valid userName</span>`
        addBtn.disabled = true;

        return false;
    }

    nameErr.innerHTML = `<span class="text-success" id="name-Err">Valid Username</span>`
    addBtn.disabled = false;
    return true
}

nameValue.addEventListener('keyup', validateName)
