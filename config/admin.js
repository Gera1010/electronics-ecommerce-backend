module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'SXJY6izIFZMQy8J1BpC4Ktn3W0RkWjHggYX8aEowZ6v1Xj3hVXkt9vGBz+36FfB0'), // Replace with your generated ADMIN_JWT_SECRET
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'W89Ytq/XNABgZsaDR9EHyQ=='), // Replace with your generated API_TOKEN_SALT
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'gSkkLdyLNf9L+4ScQtgT2g=='), // Replace with your generated TRANSFER_TOKEN_SALT
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
