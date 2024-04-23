const list = document.querySelector('.list-group')
const form = document.getElementById('form')

const api = async (method, url, data = null) => {
    try {
        const res = await fetch(`/api${url}`, {
            method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: data ? JSON.stringify(data) : undefined
        })
        return await res.json()
    } catch (err) {
        console.error(err)
    }
}

const createItem = (item) => {
    const li = document.createElement('li')
    li.classList.add('list-group-item')
    li.setAttribute('data-id', item.id)

    const input = document.createElement('input')
    input.classList.add('form-check-input')
    input.classList.add('me-1')
    input.setAttribute('type', 'checkbox')
    input.setAttribute('id', `checkbox-${item.id}`)

    const label = document.createElement('label')
    label.classList.add('form-check-label')
    label.setAttribute('for', `checkbox-${item.id}`)

    li.append(input)
    li.append(label)
    label.innerHTML = item.title

    return li;
}

api('GET', '/todos')
.then(res => {
    res.map(item => list.appendChild(createItem(item)))
})

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const value = document.getElementById('input-todo').value

    api('POST', '/todos', { title: value })
    .then(item => {
        list.append(createItem(item))
    })
})

list.addEventListener('click', (event) => {
    const target = event.target;

    if(!target.classList.contains('form-check-input')) return

    const id = target.closest('.list-group-item').getAttribute('data-id')
    
    api('PUT', `/todos/${id}`, {
        done: target.checked
    })
})