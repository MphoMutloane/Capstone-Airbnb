const Server = require("./server"); 
require("dotenv").config(); 

// Instantiate and start the server
const server = new Server();
let port = process.env.PORT || 5000;

server.app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});




