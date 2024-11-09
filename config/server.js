module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    // You should provide an array of strings for app.keys.
    keys: env.array('APP_KEYS', [
      'u7e^BT-VC>c&tAYL`+.5(r',  // Replace with a randomly generated key
      'vP~M-m$sp;EUdT=(ny9L>]',  // Replace with another random key
    ]),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
