import { createServer } from 'http'
import { mkdir, writeFile, readFile } from 'fs'
// import {} from 'uuid'

// mkdir('./public', (err) => {
//     if (err) {
//         console.error(err)
//     }
// })

// writeFile('./public/text.txt', 'Hi from node js', (err) => {
//     if (err) {

//     }
// })

const server = createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    console.log(`url: ${req.url}`)

    if (req.url === '/') {
        readFile('./public/index.html', (err, data) => {
            if (err) console.error(err)
    
            res.end(data)
        })
    } else if (req.url) {
        readFile(`./public/${req.url}.html`, (err, data) => {
            if (err) console.error(err)
    
            res.end(data)
        })
    }

});

server.listen(3003, () => {
    console.log('Server has been started ...')
})
