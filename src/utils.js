const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  // getTokenPayload: (token) => jwt.verify(token, process.env.SECRET),

  getUserId: (req, authToken) => {
    if (req) {
      const authHeader = req.headers.authorization;
      if (authHeader) {
        const token = authHeader.replace("Bearer ", "");
        if (!token) throw new Error("Authentication required");
        const { userId } = jwt.verify(token, process.env.SECRET)
        // getTokenPayload(token);
        return userId;
      }
    } else if (authToken) {
      const { userId } = this.getTokenPayload(token);
      return userId;
    } else {
      throw new Error("No authentication");
    }
  },
};
