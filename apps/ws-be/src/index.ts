import ws from 'ws';

const wss = new ws.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('New client connected');

  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);
    // Echo the message back to the client
    ws.send(`You sent: ${message}`);
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});