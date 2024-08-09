const jwt = require('jsonwebtoken'); 

const generateToken = (payload) => {

  // Generate a JWT token using the payload 
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '8h' });

  return token; 
};

module.exports = generateToken; 
