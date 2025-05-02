import http from 'http';
const server = http.createServer((req, res) => {
    res.write("hello")
    res.write(" world")
    res.end("  hello world");

});
const serverPort = 3000;


server.listen(serverPort, () => {
    console.log(`Server is running on port ${serverPort}`);
} );