import express from 'express';
import dotenv from 'dotenv';
import expressLayouts from 'express-ejs-layouts';
dotenv.config();

import pages from './routes/pages.js';

const app = express();
const PORT = process.env.PORT || 3000;





app.use(express.static('public'));
app.use(express.static('node_modules/bootstrap/dist/css/'))
app.use(express.urlencoded({ extended : true}));
app.use(express.json());

app.use(expressLayouts);




app.set('view engine', 'ejs');
app.set('layout', './layouts/main')


app.use(pages)

//    --border: 217.2 32.6% 17.5%;      --background: 234 84% 07%
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})