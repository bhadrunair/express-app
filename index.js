const express = require('express');
const app = express();

app.use(express.json());

// const todos = [];

app.use('/todos', require('./routes/todos.js'));

// app.get('/todos', (req, res) => {
//     return res.json(todos);
// });

// app.post('/todos', (req, res) => {
//     const baudy = req.body.title;
//     const todo = {
//         id:v4(),
//         title: baudy,
//         completed: false
//     }
//     todos.push(todo);
//     return res.json(todos);
// });

// app.put('todos/:id', (req, res) => {
//     const {id} = req.params;
//     const todo = {
//         id: v4(),
//         title:req.body.title,
//         completed: false
//     };
//     //todos.findIndex(item => item.id === id);
//     todos = todos.map(item => item.id === id ? todo : item);
//     return res.json(todos);
// });

// app.delete('todos/:id', (req, res) => {
//     const {id} = req.params;
//     todos = todos.filter(item => item.id !== id);
//     return res.json(todos);
// });

// app.get('/todos/:id', (req, res) => {
//     const {id} = req.params;
//     //todos.find(item => item.id === id);
//     const alpha = todos.reduce(item => {
//         item.id === id;
//     }, {})
//     alpha.completed === !alpha.completed;
//     return res.json(alpha);
// });

app.listen(3000, ()=>{
    console.log('Now listening ...');
});