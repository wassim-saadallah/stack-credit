import * as DataStore from 'nedb';

const db = new DataStore({ filename: 'db.nedb' })

try {
    db.loadDatabase()
    console.log('database initialized successfully')
    export default db
} catch (err) {
    console.error('Something happened during database init : ' + err)
}


