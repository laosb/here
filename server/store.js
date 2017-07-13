const low = require('lowdb')

const db = low(process.env.DB_FILE_PATH || path.join(__dirname, 'db/db.json'), { storage: require('lowdb/lib/storages/file-async') })

export default db