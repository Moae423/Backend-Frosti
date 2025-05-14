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

7. Test your backend with API Client before we use it in Front End
