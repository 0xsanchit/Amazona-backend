import jwt from "jsonwebtoken"

const env = process.env;

export const generateToken = (user) => {
    return jwt.sign({_id: user.id,name: user.name,email:user.email,isAdmin: user.isAdmin},
         env.REACT_APP_JWT_SECRET || 'somethingsecret'
         , {
             expiresIn: '30d',
         });
};