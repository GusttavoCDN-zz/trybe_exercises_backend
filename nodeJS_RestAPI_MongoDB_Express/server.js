const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/plain' });
  res.end('Teste de Servidor com http');
});

server.listen(port, () => {
  console.log(`Server is running on the port ${port}`);
});
