const checkAuth = require('../middleware/checkAuth');
const {v4} = require('uuid');
const router = require('express').Router();

let todos = [];

router.get('', checkAuth, (req, res) => {
    return res.json(todos);
});

router.post('', (req, res) => {
    const baudy = req.body.title;
    const todo = {
        id:v4(),
        title: baudy,
        completed: false
    }
    todos.push(todo);
    return res.json(todos);
});

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const todo = {
        id: v4(),
        title:req.body.title,
        completed: false
    };
    //todos.findIndex(item => item.id === id);
    todos = todos.map(item => item.id === id ? todo : item);
    return res.json(todos);
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    todos = todos.filter(item => item.id !== id);
    return res.json(todos);
});

//Wrong
// router.get('/:id', (req, res) => {
//     const {id} = req.params;
//     //todos.find(item => item.id === id);
//     const alpha = todos.reduce(item => {
//         item.id === id;
//     }, {})
//     alpha.completed === !alpha.completed;
//     return res.json(alpha);
// });

module.exports = router;