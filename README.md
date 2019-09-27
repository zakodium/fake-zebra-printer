# fake-zebra-printer

A server that pretends to be a Zebra printer

## Documentation

Once launched, the process will expose two servers:

- HTTP server on port `HTTP_PORT` (default 80).
  - `GET /`: Responds with its status (default READY).
  - `POST /pstprnt`: Responds with an empty 200 response.
  - `POST /status?value=NEW_STATUS`: Responds with `ok`.
    Allows to dynamically change the status reported at `/`.
- Raw socket server on port `RAW_PORT` (default 9100).

The server will log to the console any HTTP request and information about messages
received on the raw port.

## Usage with Docker

The server is published on the [Docker hub](https://hub.docker.com/r/zakodium/fake-zebra-printer).

To make it run, setup the following environment variables:

- `HTTP_PORT`: Default: 80
- `RAW_PORT`: Defalut: 9100
