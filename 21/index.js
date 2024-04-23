import express from 'express'
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { v4 } from 'uuid'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const BASE_URL = '/api'

const app = express();

const TODOS = [
    {
        id: v4(),
        title: 'Todo title 1',
        done: false
    }
]

app.use(express.json())

app.get(`${BASE_URL}/todos`, (req, res) => {
    res.json(TODOS)
})

app.post(`${BASE_URL}/todos`, (req, res) => {
    const todo = {
        id: v4(),
        title: req.body.title,
        done: false
    }

    TODOS.push(todo)

    res.status(201).json(todo)
})

app.put(`${BASE_URL}/todos/:id`, (req, res) => {
    const id = TODOS.findIndex(item => item.id === req.params.id)

    TODOS[id] = {
        title: TODOS[id].title,
        done: req.body.done,
        id: TODOS[id].id
    }
    
    res.json(TODOS[id])
})

app.use(express.static(resolve(__dirname, 'public')))

app.get('*', (req, res) => {
    res.sendFile(resolve(__dirname, 'public', './index.html'))
})

app.listen(3003, () => {
    console.log('Server has been started ...')
})

