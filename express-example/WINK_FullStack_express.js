let express = require('express');
let app =  express();
let port = 8000;

app.get('/', (req, res) => {
    res.send('<h1>Hello, World!</h1>');
});
app.get('/board', (req, res) => {
    res.send('<h1>Board 입니다</h1>')
})
app.get('/login', (req, res) => {
    res.send('<h1>Login 입니다</h1>')
})
app.get('/signup', (req, res) => {
    res.send('<h1>Signup 입니다</h1>')
})

app.listen(port);