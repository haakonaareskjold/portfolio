var app = express()
  , server = require('http').createServer(app)
  , io = io.listen(server);

app.get('/', (req, res) => {
  res.send('Hello World');
});

server.listen(80);