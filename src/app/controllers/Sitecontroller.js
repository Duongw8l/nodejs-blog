
class Sitecontroller {
    
    // get /site
    index(req, res){
        res.render("site")
    }

    // get /new/:slug: biến động, nhận nhiều giá trị
    search(req, res){
        res.render("search")
    }
}

module.exports = new Sitecontroller