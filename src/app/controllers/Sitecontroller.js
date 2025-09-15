const Course = require('../models/Course')

class Sitecontroller{
    // get /site
  index(req, res, next) {
    //đây là cách viết call back: async index(req, res) { try { const courses = await Course.find({}); res.json(courses); // hoặc nếu muốn render view thay vì JSON: // res.render("home", { courses }); } catch (err) { res.status(500).json({ error: 'Lỗi server', details: err.message }); } }
    //---
    // đây là cách viết promise
    Course.find({}).lean()
        .then(courses => {
            //res.render(home);
            // hoặc render view
            res.render("home", { courses });//truyền dữ liệu courses vào home
        })
        .catch( next
            // nếu không dùng đối số next thì ta sẽ dùng nhưu này, 
            // nhưng trong thực tế thì sử dụng đối số next để gọi lỗi thay vì sử dụng như này
            // err => {res.status(500).json({ error: 'Lỗi server', details: err.message });}
            );
}

    search(req, res){
        res.render("search")
    }
    
}



module.exports = new Sitecontroller