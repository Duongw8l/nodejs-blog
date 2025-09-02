
class Newcontroller {
    
    // get /news
    index(req, res){
        res.render("news")
    }

    // get /new/:slug: biến động, nhận nhiều giá trị
    show(req, res){
        res.send("new detail")
    }
}

module.exports = new Newcontroller