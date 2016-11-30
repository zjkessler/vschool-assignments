// This is a place to store some of our hard-coded strings. This way we can change it in one
// place and it'll affect everywhere that references it.
module.exports = {
    // The database string for connecting to mongoDB
    database: "mongodb://localhost/todos",

    // The JWT secret for encoding and decoding JWTs
    secret: "rubber baby buggy bumpers"
};
