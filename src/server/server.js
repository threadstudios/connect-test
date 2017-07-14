import express from 'express';
import App from '../App.js';
import Inferno from 'inferno';
import InfernoServer from 'inferno-server';

import vehiclesApi from './routes/vehicles';

const app = express();

app.set('port', process.env.PORT || 3123);

app.use(express.static('public'));

app.use('/api', vehiclesApi);

app.get('/', (req, res) => {

    const app = InfernoServer.renderToString(<App />);

    res.send(`
        <html>
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <link rel="stylesheet" href="bundle.css" />
                <title>Connect Test</title>
            </head>
            <body>
                <div id="content">
                    ${app}
                </div>
                <script src="client.js"></script>
            </body>
        </html>
    `);
});

app.listen(app.get('port'));