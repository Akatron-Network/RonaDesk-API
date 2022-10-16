import express, {Request,Response,Application} from 'express';
import * as dotenv from 'dotenv'
import {PrismaClient} from '@prisma/client'
dotenv.config();

const app:Application = express();

app.listen(process.env.PORT, function () {
  console.log('App running on port: ' + process.env.PORT)
})

const prisma = new PrismaClient()

async function createuser() {
  try {
    await prisma.user.create({
      data: {
        pass: "aa",
        email: "aa@aa.com"
      }
    })
  }
  catch (e) { console.error(e); }
}

async function findusers() {
  // ... you will write your Prisma Client queries here
  try {
    const allUsers = await prisma.user.findMany()
    console.log(allUsers)
  }
  catch (e) { console.error(e); }
}


async function test() {
  await createuser();
  await findusers();
}

test()
