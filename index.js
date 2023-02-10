const server = require("./server");
const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Employee API server is up and running succesfully and listening on the ${PORT} port!`);
});