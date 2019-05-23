export const environment = {
  server: { port: process.env.PORT || 5000 },
  db: {url: process.env.MONGOLAB_URI || 'mongodb://localhost/misslaura'},
  security: {
    saltRounds: process.env.SALT_ROUNDS || 10,
    apiSecret: process.env.API_SECERT || 'miss-laura-secret',
    enableHTTPS: process.env.ENABLE_HTTPS || false,
    certificate: process.env.CERTI_FILE || './security/keys/cert.pem',
    key: process.env.CERT_KEY_FILE || './security/keys/key.pem'
  },
  log: {
    level: process.env.LOG_LEVEL || 'debug',
    name: 'meat-api-logger'
  }
}
