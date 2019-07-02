const DataStore = require('nedb')

const db = new DataStore({ filename: 'db.nedb' })

try {
    db.loadDatabase()
} catch (err) {
    console.error('Something happened during database init : ' + err)
}

console.log('database initialized successfully')

module.exports = db;
