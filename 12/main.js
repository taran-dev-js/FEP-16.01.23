const id = document.getElementById('id');

id.style.color = 'red'

if (id.dataset.userType === 'admin') {
    for (let i = 1; i <=3; i++) {
        const input = document.createElement('input')
        input.value = i

        id.appendChild(input)
    }
}