const express = require('express');
const app = express();
const port = 3000;

console.log("SERVER ATTIVO");

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});


app.get('/', (req, res) => {
    res.send('Server del mio blog');
});

