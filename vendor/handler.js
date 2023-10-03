'use strict';

// const eventPool = require('../eventPool.js');
const Chance = require('chance');
const chance = new Chance();

function handleVendor(payload) {
  console.log('Thank you for your order ' + payload.customer);
}

function createPickup(storeName) {
  const orderId = chance.guid();
  const customerName = chance.name();
  const address = chance.address();
  return {
    store: storeName,
    orderId: orderId,
    customer: customerName,
    address: address,
  };
}

module.exports = { handleVendor, createPickup };
