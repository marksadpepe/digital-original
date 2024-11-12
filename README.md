# Important
**The description of the test assignment is available at the following <a href="https://github.com/marksadpepe/digital-original/blob/master/TECHNICAL_SPECIFICATIONS.md" target="_blank">link</a>** (clickable).

**PostgreSQL server must be installed on your local machine.**

Before starting, create a ```.env``` file and add the ```DB_URL``` environment variable. You can find an example in the ```env.example``` file.
**Knex ORM** was used for interacting with the database.

PS: ```console.log``` functions in the ```app.ts``` just to show how the app actually works🥸

# Running
```bash
npm i

# to create migration
npm run mr:make your_migration_name

# to apply migrations
npm run mr:latest

# to rollback the last batch of migrations
npm run mr:rollback

# to rollback all the completed migrations
npm run mr:rollback

# to run the next migration that has not yet been run
npm run mr:up

# to undo the last migration that was run
npm run mr:down

# to list both completed and pending migrations
npm run mr:list

# build and run the application
npm run build
npm run start
```

# Usage example
```bash
npm i
npm run build
npm run mr:latest
npm run start
```
