'use strict';

function onRawRequest(socket) {
  let data = '';
  socket.setEncoding('utf8');
  socket.on('data', (chunk) => (data += chunk));
  socket.on('close', () => {
    console.log(`RAW data to print (${data.length} bytes)`);
    console.log('---');
    console.log(data);
    console.log('---');
  });
}

module.exports = {
  onRawRequest,
};
