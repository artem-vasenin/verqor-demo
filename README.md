## verqor-demo
Verqor demo app

## Server
```bash
cd server

npm i
# or
yarn install
```
- Rename default.env to .env
- Create postgreSQL database "verqor" with user "postgres" and password 'root'
- Make migration and seed commands
```bash
npx prisma migrate dev

npx prisma db seed
```
- And run server
```bash
npm start:dev
```
- Swagger docs: [http://localhost:8000/api/](http://localhost:8000/api/)

## Client
```bash
cd client

npm i
# or
yarn install
```

- Rename default.env.local to .env.local
- And run client
```bash
npm run dev
```
- Client link [http://localhost:3000/](http://localhost:3000/)