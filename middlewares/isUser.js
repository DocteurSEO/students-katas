const {getToken} = require('../firebase')
async function isUser(req, res, next) {
   if(req.body.uid != process.env.UID){
    res.status(403)
    
    res.send('Forbiden ! ')
    return
   }
   delete req.body.uid
  next()
}

module.exports = {isUser}