class NewsController {
    // [GET] /news
    index(req, res) {
        res.render('News');
    }

    // [GET] /news/:slug
    show(req, res) {
        res.send('New Details !');
    }
}

module.exports = new NewsController();
