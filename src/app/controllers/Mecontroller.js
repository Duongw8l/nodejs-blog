const Course = require('../models/Course');



class Mecontroller {
    

    // get /news
    storedCourses(req, res, next){
       
        Course.find({}).lean()
                .then(courses => {
                    //res.render(home);
                    // hoặc render view
                    res.render("me/stored-courses", { courses });//truyền dữ liệu courses vào home
                    // res.render('me/stored-courses')
                })
                .catch( next
                    // nếu không dùng đối số next thì ta sẽ dùng nhưu này, 
                    // nhưng trong thực tế thì sử dụng đối số next để gọi lỗi thay vì sử dụng như này
                    // err => {res.status(500).json({ error: 'Lỗi server', details: err.message });}
                    );
    }
        
   
}

module.exports = new Mecontroller()