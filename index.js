const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('Hello from Jenkins Pipeline!'));
app.listen(PORT, () => console.log(`App running on port ${PORT}`));
