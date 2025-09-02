const newRouter = require('./news')
const siteRouter = require('./site')

function route(app){
    app.use('/news', newRouter )
    app.use('/', siteRouter )
    // app.get('/', (req, res) => {
    //   res.render('home');
    // });
    
}

module.exports = route