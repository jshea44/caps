' use strict';

const eventEmitter = require('../eventPool.js');
const { handleVendor, createPickup } = require('./handler.js');

eventEmitter.on('delivered', handleVendor);
eventEmitter.emit('pick-up', createPickup('Fake Store'));
