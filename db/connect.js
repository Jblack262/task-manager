const mongoose = require('mongoose')

const connectDB = (url) => {
  return mongoose
    .connect(url)
    .then( () => {console.log('CONNECTED TO MONGODB SUCCESSFUL')} )
    .catch( (err) => { console.error(`you suck: ${err}`) })
}

module.exports = connectDB