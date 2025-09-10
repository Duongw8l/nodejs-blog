const Course = require('../models/Course')

class Sitecontroller{
    // get /site
  async index(req, res) {
        try {
            const courses = await Course.find({});
            res.json(courses);
            // hoặc nếu muốn render view thay vì JSON:
            // res.render("home", { courses });
        } catch (err) {
            res.status(500).json({ error: 'Lỗi server', details: err.message });
        }
    }
    search(req, res){
        res.render("search")
    }
    
}



module.exports = new Sitecontroller