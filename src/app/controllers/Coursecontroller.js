const Course = require('../models/Course');

class CourseController {
    // [GET] /courses/:slug
    show(req, res, next) {
       
        Course.findOne({ slug: req.params.slug }).lean()
            .then(course => {
                // if (!course) {
                //     return res.status(404).send('Khóa học không tồn tại');
                // }
                res.render('courses/show', { course });
            })
            .catch(next);
    }

    //get /courses/create   tạo ui
    create(req, res, next) {
         res.render('courses/create');
        //res.send('hello');
    }

     // post /courses/store tạo mới tài nguyên
    store(req, res, next) {

        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/hqdefault.jpg`;

        const course = new Course(formData);
        course.save()
            .then( () => res.redirect('/'))
            .catch( erorr =>{
            });
        // res.send('lưu vào database ok');
    }
//     store(req, res, next) {
//     const data = {
//         ...req.body,
//         image: `https://img.youtube.com/vi/${req.body.videoId}/hqdefault.jpg`
//     };

//     const course = new Course(data);

//     course.save()
//         .then(() => {
//             res.send('Lưu vào database OK');
//         })
//         .catch(err => {
//             console.error(err);
//             res.status(500).send('Lỗi khi lưu database');
//         });
// }

    // get /courses/:id/edit
    edit(req, res, next) {
    Course.findById(req.params.id).lean()
        .then(course => {
            res.render('courses/edit', { course });
        })
        .catch(next);
    }

    update(req, res, next) {
        Course.updateOne({
            _id : req.params.id
        },req.body )
        .then(() => res.redirect('/me/stored/courses'))
        .catch(next);
    }   

    
}

module.exports = new CourseController();
