const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/donation-confirm', (req, res) => {
  const { donorName, amount, method, transactionId } = req.body;

  const log = `${new Date().toISOString()} | Donor: ${donorName} | Amount: ${amount} | Method: ${method} | TxID: ${transactionId}\n`;
  fs.appendFileSync('donations.log', log);

  res.json({ message: `Thank you, ${donorName}! Your donation of ${amount} via ${method} has been recorded.` });
});

app.listen(PORT, () => {
  console.log(`Donation server running on http://localhost:${PORT}`);
});
