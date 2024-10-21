const express=require('express');
const path=require('path');
const app=express();


// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/dist')));

// Serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});