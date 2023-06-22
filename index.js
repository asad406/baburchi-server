const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 5000;

const chefs = require('./data/chefs.json');
const recipes = require('./data/recipes.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send(chefs);
})
app.get('/:id', (req, res) => {
    const id = req.params.id;
    const chef = chefs.find(c => c.id == id);
    
    res.send(chef);
})

app.get('/recipes/:id', (req, res) => {
    const id = req.params.id;
    const selectedRecipes = recipes.filter(r => r.id == id);
    res.send(selectedRecipes)
})


app.listen(port, () => {
    console.log(`Baburchi API is running on port: ${port}`)
})
