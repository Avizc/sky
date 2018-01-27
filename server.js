// Run the web server locally on port 8080
const port = 8080;
const express = require('express');
const app = express();

// Load static files
app.use(express.static(__dirname + '/'));
// See what port we're on
app.listen(port, function() {
    console.log("Server running at: http://localhost:" + port)
});