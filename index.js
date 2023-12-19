console.log("Entro a index.js");

const app = require('./src/app/app');

const port = process.env.port || 3000;


app.listen(port, () => {
    console.log(`--- Server Running on port ${port} ---`);
});

