'use strict';

const net = require('net');
const http = require('http');

const { onHttpRequest } = require('./http');
const { onRawRequest } = require('./raw');

const httpServer = http.createServer(onHttpRequest);
const httpPort = process.env.HTTP_PORT ? Number(process.env.HTTP_PORT) : 80;
httpServer.listen(httpPort, () =>
  console.log(`HTTP server listening on port ${httpPort}`),
);

const rawServer = net.createServer(onRawRequest);
const rawPort = process.env.RAW_PORT ? Number(process.env.RAW_PORT) : 9100;
rawServer.listen(rawPort, () =>
  console.log(`Raw socket server listening on port ${rawPort}`),
);
