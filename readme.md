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

## This starter app was build with the help of these articles

[Part 1: Project starter](https://medium.com/gitconnected/api-development-with-nodejs-express-and-typescript-from-scratch-project-starter-85caf1508807?source=user_profile---------7----------------------------)

[Part 2: Advanced project starter](https://medium.com/gitconnected/api-development-with-nodejs-express-and-typescript-from-scratch-advanced-project-starter-2632afd09e22?source=user_profile---------6----------------------------)

[Part 3: Basic API](https://medium.com/gitconnected/api-development-with-nodejs-express-and-typescript-from-scratch-basic-api-743a96ca8757?source=user_profile---------5----------------------------)

[Part 4: MongoDB and Prisma](https://medium.com/gitconnected/api-development-with-nodejs-express-and-typescript-from-scratch-mongodb-prisma-and-postman-90c4687fd663?source=user_profile---------4----------------------------)

[Part 5: DTO, Interface and Authentication](https://medium.com/gitconnected/api-development-with-nodejs-express-and-typescript-from-scratch-dto-interface-and-54ebab8c447e?source=user_profile---------3----------------------------)

[Part 6: Overview](https://medium.com/gitconnected/api-development-with-nodejs-express-and-typescript-form-scratch-overview-b7ffe21a5c4c?source=user_profile---------2----------------------------)
