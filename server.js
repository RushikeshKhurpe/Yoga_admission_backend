const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db');
const cors = require('cors');
const Admission = require('./models/Admission');

const app = express();

connectDB();

app.use(bodyParser.json());
app.use(cors());

app.post('/api/admission', async (req, res) => {
 // console.log('hitting ')
  console.log(req.body);
  const { firstName, lastName, age, email, selectedBatch } = req.body;

  try {
    const existingUser = await Admission.findOne({ firstName, lastName, email });

    if (!firstName || !lastName || !age || !selectedBatch) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    if (age < 18 || age > 65) {
      return res.status(400).json({ error: 'Age must be between 18 and 65.' });
    }

    const admission = new Admission({ firstName, lastName, age, selectedBatch });
    await admission.save();

    // if (paymentResponse.success) {
    return res.status(200).json({ success: true, message: 'Admission successful!' });
    // } else {
    //   return res.status(400).json({ error: 'Payment failed. Admission successful.' });
    // }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/checkDuplicate', async (req, res) => {
  const { firstName, lastName, email } = req.body;

  try {
    const existingUser = await Admission.findOne({ firstName, lastName, email });

    if (existingUser) {
      return res.json({ duplicate: true });
    } else {
      return res.json({ duplicate: false });
    }
  } catch (error) {
    console.error('Error checking duplicate entry:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
