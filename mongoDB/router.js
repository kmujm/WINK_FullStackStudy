module.exports = function (app, Board) {
    app.post('/board', function (req, res) {
        const board = new Board();
        board.title = req.body.title;
        board.body = req.body.body;

        board.save(function (err) {
            if (err) {
                console.error(err);
                res.json({message: 'fail'});
                return;
            }
            res.json({message: 'success'});
        });
    });
}