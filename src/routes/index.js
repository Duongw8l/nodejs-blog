const newRouter = require('./news')
const coursesRouter = require('./courses')
const meRouter = require('./me')
const siteRouter = require('./site')




function route(app){
    app.use('/news', newRouter )
    app.use('/courses', coursesRouter )
    app.use('/me', meRouter )
    app.use('/', siteRouter )
    
    // app.get('/', (req, res) => {
    //   res.render('home');
    // });
    
}

module.exports = route