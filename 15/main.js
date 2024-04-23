const form = document.getElementById('form')
const btnSubmit = document.querySelector('[name="submit"]')
const regex = /[a-c]+/g;

const bool = false
const bool2 = true

if(bool, bool2) {
    console.log('true')
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event);
    
    const name = form.elements['name']
    const lastName = form.elements['lastName']
    const email = form.elements['email']
    const checkbox = form.elements['checkbox']

    const isValid = validateText(name.value)
    const isValidEmail = validateEmail(email.value)

    // console.log({name, lastName, email})
    // console.log({isValid, isValidEmail})
    
    if(!isValid) {
        name.classList.add('invalid')
    } else {
        name.classList.remove('invalid')
    }
   
    console.log(checkbox.checked)

})

form.querySelectorAll('.input').forEach(input => {
    input.addEventListener('input', (event) => {
        // console.log(event.target, 'input email')
        const target = event.target;

        if(validate[target.name].test(target.value)) {
            target.classList.remove('invalid')
        } else {
            target.classList.add('invalid')
        }
    })

})

const validate = {
    'lastName': regex,
    'email': /^\S+@\S+\.\S+$/,
    'name': regex
}

select.addEventListener('change', (event) => {
    console.log(event, 'change')
})

// checkbox.addEventListener('change', (event) => {
//     console.log(event, 'change')
//     if(checkbox.checked) {
//         btnSubmit.disabled = false
//     } else {
//         btnSubmit.disabled = true
//     }
// })

// email.addEventListener('input', (event) => {
//     console.log(event, 'input email')
//     const target = event.target
//     const isValid = validateEmail(event.target.value)
//     if(!isValid) {
//         target.classList.add('invalid')
//     } else {
//         target.classList.remove('invalid')
//     }
//     // console.log(isValid)
// })


function validateEmail (email) {
    return /^\S+@\S+\.\S+$/.test(email)
}

function validateText(value) {
    return regex.test(value)
}