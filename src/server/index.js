import express from 'express';
import { Board, Led } from 'johnny-five';

const app = express();

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: 'me' }));
app.listen(8090, () => console.log('Listening on port 8090!'));
