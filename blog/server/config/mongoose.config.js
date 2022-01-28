const mongoose = require('mongoose');
const blogDB = process.env.DB_NAME

mongoose.connect(`mongodb://localhost/${blogDB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Established connection to the ${blogDB} database`))
    .catch((err) => { console.log(`Something has gone wrong with the connection to the ${blogDB} database`, err)});