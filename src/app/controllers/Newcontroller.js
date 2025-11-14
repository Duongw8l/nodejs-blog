
class Newcontroller {
     show(req, res){
        res.send("new detail")
    }

    // get /news
    index(req, res){
        res.render("news")
    }

    // get /new/:slug: biến động, nhận nhiều giá trị
   
}

module.exports = new Newcontroller()