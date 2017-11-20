const crypto = require('crypto').randomBytes(256).toString('hex'); // Provides cryptographic functionality (OpenSSL's hash, HMAC, cipher, decipher, sign and verify functions)

// Export config object
module.exports = {
    uri: process.env.DB_URI, // Databse URI and database name
    secret: crypto, // Cryto-created secret
    db: process.env.DB_NAME // Database name
}