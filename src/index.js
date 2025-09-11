const express = require('express')
const morgan = require('morgan')
const path = require('path');
const { engine } = require('express-handlebars');
const app = express()
const port = 3000

//required route
const route = require('./routes')

//required db
const db = require('./config/db')
db.connect()


// set static file
app.use(express.static(path.join(__dirname, 'public')));


// http logger
app.use(morgan('combined'))
//template engine

app.engine('hbs', engine({ extname: '.hbs' })); 
app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources', 'views')); // thư mục chứa file .handlebars

//route inti
route(app)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
 
