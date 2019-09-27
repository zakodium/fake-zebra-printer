'use strict';

let currentStatus = 'READY';

function onHttpRequest(req, res) {
  const { method, url } = req;
  if (method === 'GET' && url === '/') {
    console.log(`HTTP GET / (status: ${currentStatus})`);
    res.end(
      `<html><body><H3>Status: <FONT COLOR="${
        currentStatus === 'READY' ? 'green' : 'red'
      }">${currentStatus}</FONT></H3></body></html>`,
    );
  } else if (method === 'POST' && url === '/pstprnt') {
    console.log('HTTP POST /pstprnt');
    res.end('');
  } else if (method === 'POST' && url.startsWith('/status')) {
    console.log(`HTTP POST ${url}`);
    const parsed = new URL('http://localhost' + url);
    const newStatus = parsed.searchParams.get('value');
    if (newStatus) {
      currentStatus = newStatus;
    }
    res.end('ok');
  } else {
    console.log(`HTTP ${method} ${url} (not found)`);
    res.statusCode = 404;
    res.end('Not found');
  }
}

module.exports = {
  onHttpRequest,
};
