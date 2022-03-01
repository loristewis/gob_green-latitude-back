module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '954bd4503a295e9eb43b853c96ee7485'),
  },
});
