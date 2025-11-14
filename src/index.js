const express = require('express')
const morgan = require('morgan')
const path = require('path');
const { engine } = require('express-handlebars');
const methodOverride = require('method-override')
const app = express()
const port = 5000;

// sửa lỗi underfine khi res.json(body)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//required route
const route = require('./routes')

//required db
const db = require('./config/db')
db.connect()


// set static file
app.use(express.static(path.join(__dirname, 'public')))


// set method theo ý mình
app.use(methodOverride('_method'))



// http logger
app.use(morgan('combined'))
//template engine

app.engine('hbs',
          engine({ 
                extname: '.hbs',
                helpers: {
                  sum: (a,b) => a + b,
                }
          }))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources', 'views')) // thư mục chứa file .handlebars

//route inti
route(app)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
 
