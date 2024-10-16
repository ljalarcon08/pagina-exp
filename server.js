const express = require('express');
const cors = require('cors');
const path= require('path');
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
app.use(express.static('page'));
app.use('*',cors() ,(req, resp) => {
    //resp.sendFile(`${__dirname}/page/index.html`);
    resp.sendFile(path.resolve(__dirname,'page/index.html'));
  });
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});