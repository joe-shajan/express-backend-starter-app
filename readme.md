## How to run this app localy

**step 1** : clone this repo

```sh
git clone https://github.com/joeshajan/express-backend-starter-app.git
```

**step 2** : Install packages

```sh
npm install
```

**step 3** : if you are using windows install **win-node-env**

```sh
npm install -g win-node-env
```

**step 4** : start mongodb instances

```sh
docker-compose up
```

**step 5** : Generate prisma client

```sh
npx prisma generate
```

**step 6** : Run the application

```sh
npm run dev
```

**step 7** : To view database in mongodb compass use this url

```sh
mongodb://localhost:30001/exampleExpressAPI?directConnection=true&serverSelectionTimeoutMS=2000
```

**step 8** : To build and start the app

```sh
npm run start
```
