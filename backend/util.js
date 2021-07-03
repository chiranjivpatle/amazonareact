import jwt from 'jsonwebtoken';
import config from './config';
const getToken = (user) =>{
  console.log("user",user);
  // console.log("username1",user.name);
  // console.log("username2", user._name);
  

    return jwt.sign(
        {
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        

    }, 
    `poiuytrewqasdfghjklmnbvcxzasdfghjklmnbvcxz`, {
    expiresIn : "48h"
    })
}
 const isAuth = (req, res, next) => {
     const token = req.headers.authorization;
     console.log("11111111111st chlraaaaaaaaaaaa");
     console.log("11111111111st chlraaaaaaaaaaaa",token);


     if (token) {
      console.log("1st chlraaaaaaaaaaaa");

       const onlyToken = token.slice(7, token.length);
       console.log("onlytoken",onlyToken);
       jwt.verify(onlyToken, `poiuytrewqasdfghjklmnbvcxzasdfghjklmnbvcxz`, (err, decoded) => {
      
         if (err) {
           return res.status(401).send({ message: 'Invalid Token' });
         }
         req.user = token;
         next();
         return;
       });
     } 
      else {
       return res.status(401).send({ message: 'Token is not supplied.' });
     }
   };
  
   const isAdmin = (req, res, next) => {
    console.log("2nd chlraaaaaaaaaaaa");
    
    


     console.log(req.user);
     console.log("req.user.isAdmin",req.user.isAdmin);

     if (req.user && req.user.isAdmin) {
       return next();
     }
     return res.status(401).send({ message: 'Admin Token is not valid.' });
   };
  
  export { getToken, isAuth, isAdmin};
  