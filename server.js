const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const compression = require('compression');

if (process.env.NODE !== 'production') require('dotenv').config();

const app = express();
app.set('port', process.env.PORT || 5000);

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(`${__dirname}/client/build`));
  app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`);
  });
}

app.listen(app.get('port'), (err) => {
  if (err) throw errr;
  console.log(`Server running on port ${app.get('port')}`);
});

app.post('/payment', (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'usd',
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});
