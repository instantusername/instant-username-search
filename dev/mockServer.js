const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.get('/services', (req, res) => {
  res.json(require('./responses.json').services);
});

server.get('/check/:platform/:username', (req, res) => {
  const targetPlatfrom = req.params.platform;

  setTimeout(() => {
    res.json({
      service: targetPlatfrom,
      url: 'https://instantusername.com/',
      available: false,
      message: null,
    });
  }, 1000 * +(Math.random() * 2).toFixed(3));
});

server.listen(8080, () => {
  console.log('JSON Server is running');
});
