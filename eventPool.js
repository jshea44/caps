'use strict';

const eventEmitter = require('./hub.js');
const eventPool = new eventEmitter();

eventPool.on('any', (payload) => {
  console.log('EVENT', {
    event: payload.type,
    time: new Date(),
    payload: payload.payload,
  });
});

eventPool.on('delivered', (payload) => {
  const customerName = payload.payload.customer;

  console.log('Thank you for order', customerName);
});

module.exports = eventPool;
