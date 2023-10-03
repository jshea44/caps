'use strict';

const eventEmitter = require('./eventPool.js');

function logger(type, payload) {
  const event = {
    event: type,
    time: new Date(),
    payload,
  };
  console.log('EVENT', event);
}

eventEmitter.on('pick-up', (payload) => logger('pick-up', payload));
eventEmitter.on('in-transit', (payload) => logger('in-transit', payload));
eventEmitter.on('delivered', (payload) => logger('delivered', payload));

require('./driver');
require('./vendor');
