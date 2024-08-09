const jwt = require('jsonwebtoken');
const User = require('../models/user');

const authorize = (roles = []) => {

  if (typeof roles === 'string') {
    roles = [roles];
  }

  return (req, res, next) => {
    console.log("Auth middleware called !!")
    const token = req.header('Authorization')?.split(' ')[1];

    // console.log(token)

    if (!token) {
      return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
      // Verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET); 
      req.user = decoded; 

      // Check if the user's role is authorized
      if (roles.length && !roles.includes(req.user.role)) {
        return res.status(403).json({ message: 'Forbidden. You do not have permission to access this resource.' });
      }

      next(); 
    } catch (error) {
      res.status(401).json({ message: 'Invalid token.' });
    }
  };
};

module.exports = authorize;
