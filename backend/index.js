const Server = require("./server"); // Import the Server class

// Instantiate and start the server
const server = new Server();
let port = 5000;

server.app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});



