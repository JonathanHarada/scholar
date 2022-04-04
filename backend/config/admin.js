module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1e82bf6adad33e6e10d3115b56648989'),
  },
});
