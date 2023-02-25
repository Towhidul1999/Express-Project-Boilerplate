require('dotenv').config();
const http = require('http');
const app = require('./app/app');

const server = http.createServer(app);


// const books = [
//     {
//         id: 1,
//         name: 'Books 1',
//         price: 120
//     },
//     {
//         id: 2,
//         name: 'Books 2',
//         price: 130
//     },
//     {
//         id: 3,
//         name: 'Books 2',
//         price: 1130
//     },
//     {
//         id: 4,
//         name: 'Books 2',
//         price: 500
//     },
//     {
//         id: 5,
//         name: 'Books 2',
//         price: 800
//     }
// ]

// app.get('/books', (req, res) => {

//     if (req.query.show === 'all') {
//         res.json(books);
//     }

//     if (req.query.price == '500') {
//         const result = books.filter((book) => book.price <= 500)
//         res.json(result);
//     }

//     if (req.query.price >= '1000') {
//         const result = books.filter((book) => book.price > 500)
//         res.json(result);
//     }

//     return res.json(books);
// });

// app.post('/books', (req, res) => {
//     const addedBook = (req.body);
//     books.push(addedBook);
//     res.json(books);
// });

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is Listening on port ${PORT}`)
})