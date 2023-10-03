'use strict';

const eventPool = require('../eventPool.js');
const Chance = require('chance');
const chance = new Chance();

function handleVendor(storeName) {
  const orderId = chance.guid();
  const customerName = chance.name();
  const address = chance.address();

  const orderPayload = {
    store: storeName,
    orderId: orderId,
    customer: customerName,
    address: address,
  };

  eventPool.emit('pickup', { type: 'pickup', payload: orderPayload });

  console.log('Pickup Event:', orderPayload);
}

module.exports = handleVendor;
