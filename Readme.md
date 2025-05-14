# Frosti High School

This is a fullstack development web application built with Next.JS on the frontend and Express.js on the backend. And I use PostgreSQL for the database, and the backend communicates with the frontend via REST API, using Postman or Bruno as API Client.

The purpose of this project is to get to know about RESTful API, and what REST API is for.

## Tech Stack

Technology i used for this fullstack project

### Front-End

[Next JS](https://nextjs.org/)

### Back-End

- **Server:** [Express JS](https://expressjs.com/)

- **Database:** [PostgreSQL](https://www.postgresql.org/)

- **ORM Database :** [Prisma](https://www.prisma.io/)

## Installation For Test

**Important : Make sure you installed Postgresql + Node, If You not install right now!!!!**

### Back end

1. First of course you have installed Node.js
2. Clone this Project

```bash
git clone https://github.com/Moae423/frosti-backend.git
```

3. Install all pacakage, in this case i use npm

```bash
npm install
```

4. make sure create your own .env file

```bash
PORT = {`PORT YOU GONNA USE`}
DATABASE_URL="postgresql://USERNAME:PASSWORD@HOSTNAME/DB_NAME?schema=public"
```

5. generate with ORM Prisma

```bash
npx prisma generate
```

6. Migrate your prisma and then name it your mgiration

```bash
npx prisma migrate dev
```

    ![My Migration Name](./images/Migration.png)

7. Test your backend with API Client before we use it in Front End. and this is the result
   ![Create Data](<./images/Create%20Data%20(POST).png>)
   _1: Create Data_
   ![Create Data](<./images/get all data.png>)
   _2: Get All Data_
   ![Create Data](<./images/GET data by id.png>)
   _3: Get Data By Id_
   ![Create Data](<./images/PUT update data.png>)
   _4: Update Data_
   ![Create Data](./images/image.png)
   _5: Delete Data_
