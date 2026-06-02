const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('public'))


const products = [
    {
        titolo: "ciambellone",
        contenuto: "ciambellone ripieno",
        immagine: "images/ciambellone.jpeg",
        tags: ["ciambellone","dolce","fatto in casa"]
    },
    {
        titolo: "cracker_barbabietola",
        contenuto: "cracker fatto a barbabietola",
        immagine: "images/cracker_barbabietola.jpeg",
        tags: ["cracker","barbabietola","fatto in casa"]
    },
    {
        titolo: "pane_fritto_dolce",
        contenuto: "pane prima fritto poi dolce",
        immagine: "images/pane_fritto_dolce.jpeg",
        tags: ["pane","dolce","fritto","fatto in casa"]
    },
    {
        titolo: "pasta_barbabietola",
        contenuto: "pasta alla barbabietola",
        immagine: "images/pasta_barbabietola.jpeg",
        tags: ["pasta ","barbabietola","fatto in casa"]
    },
    {
        titolo: "torta_paesana",
        contenuto: "torta paesana al cioccolato",
        immagine: "images/torta_paesana.jpeg",
        tags: ["torta","dolce","paesano","fatto in casa"]
    },
]




app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});


app.get('/', (req, res) => {
    res.send('Server del mio blog');
});

app.get('/bacheca', (req,res) =>{
    res.send(products)
})

