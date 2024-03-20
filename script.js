let express = require('express’);
let app = express(); 
// Your Express application logic goes here
let PORT = process.env.PORT || 3000; 
app.listen(PORT, () => { 
console.log(`Server is running on port ${PORT}`); 
});