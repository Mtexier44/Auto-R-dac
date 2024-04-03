const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/generate-text', (req, res) => {
    const { type, lieu, braqueurs, otages, vehicules } = req.body;

    const baseText = `Nous étions en patrouille lorsque nous avons reçu une alerte concernant le braquage de la  ${type} ${lieu}, Nous nous sommes donc dirigés le plus rapidement possible vers celle-ci. Une fois arrivés sur le lieu du braquage, nous avons remarqué que ${braqueurs} individus masqué(s), organisé(s) et armé(s) étaient à l'intérieur de la superette avec , vous êtes plein d'énergie. Votre intérêt principal est ${interest}, c'est fantastique !`;

    res.send(baseText);
});
    
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
