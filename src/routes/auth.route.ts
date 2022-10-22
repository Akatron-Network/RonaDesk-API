import { PrismaClient } from "@prisma/client";
import passport from "passport";
import { Router } from "express";
import { Strategy, VerifyFunction } from "passport-local";

const prisma = new PrismaClient()
const authRouter = Router();

//todo http://www.passportjs.org/tutorials/password/verify/
//-- npm installation complated




async function verify (username:string, password:string, done: Function):Promise<VerifyFunction> {
  const user = await prisma.user.findUnique({ where: { id: username } });

  console.log(user);

  const response = 'Invalid login credentials';

  if (!user) return done(response);
  return done(null, user)
}


passport.use(new Strategy(verify))


authRouter.post('/login', passport.authenticate('local', { failureRedirect: '/', successRedirect: '/profile' }))


export default authRouter
