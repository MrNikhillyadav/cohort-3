## Manual Installation
- Install nodejs locally ()
- Clone the repo
- Install the dependencies (npm install)
- Start DB locally
    -  docker run -e POSTGRES_PASSWORD=mysecretpassword  -d -p 5432:5432 postgres
    or
    -  Go to neon.db and get yourself a new db
- Change the .env file and update your DB credentials
- npx prisma migrate
- npx prsima generate
- npx prisma build
- npx prisma start

## Docker Installation



## Docker Compose Installation steps
