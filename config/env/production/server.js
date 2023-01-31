module.exports = ({ env }) => ({
  url: env('APPLICATION_URL, https://green-latitude-api.tewis.dev/'),
});
