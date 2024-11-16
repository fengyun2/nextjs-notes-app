import { PGlite } from '@electric-sql/pglite'

const db = new PGlite()

const result = await db.query("select 'Hello World' as message;")
console.log(result)
export default db