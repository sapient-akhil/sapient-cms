const createError = require("http-errors");
const { adminServices } = require("../../services/index");
const bcrypt = require("bcrypt");
const Jwt = require("jsonwebtoken")
const JWTSecretKey = process.env.JWT_SECRET_KEY;


module.exports = {
    adminLogin: async (req, res, next) => {
        try {
            const req_data = req.body;
    
            const admin = await adminServices.findbyEmail(req_data.email);
            if (!admin) throw createError.Conflict("email or password is wrong")
    
            const passwordMatch = await bcrypt.compare(req_data.password, admin.password);
            if (!passwordMatch) throw createError.NotFound("email or password is wrong");
    
            const payload = {
                role: admin.role,
                email: admin.email,
                password: admin.password
            };
             console.log("payload", payload)
            const jwt = Jwt.sign(payload, JWTSecretKey, { expiresIn: 86400 })
            res.status(201).send({
                jwt,
                data: admin,
            })
        } catch (error) {
            next(error)
        }
    },
  createAdmin: async (req, res, next) => {
    try {
      const req_data = req.body;

      req_data.image = req_data.image ? req_data.image : null;

      const existData = await adminServices.existData(
        null,
        req_data.email,
        req_data.username
      );

      let hash;
      if (req_data.password) {
        hash = await bcrypt.hash(req_data.password, 10);
        req_data.password = hash;
      }

      if (existData.status) {
        const writersData = await adminServices.createAdminData(req_data);

        res.status(201).json({
          success: true,
          message: "Admin is created successfully.",
          data: writersData,
        });
      } else {
        res.status(201).json({
          success: false,
          message: existData.message,
        });
      }
    } catch (error) {
      next(error);
    }
  },
  
};
