'use strict';

const { handleVendor, createPickup } = require('../vendor/handler.js');

describe('handleVendor', () => {
  it('should log a thank you message with the customer name', () => {
    const payload = { customer: 'John Doe' };
    const consoleSpy = jest.spyOn(console, 'log');

    handleVendor(payload);

    expect(consoleSpy).toHaveBeenCalledWith(
      'Thank you for your order John Doe'
    );
    consoleSpy.mockRestore(); // Restore the original console.log function
  });

  // Add more test cases for handleVendor as needed
});

describe('createPickup', () => {
  it('should return an object with store, orderId, customer, and address properties', () => {
    const storeName = 'MyStore';
    const pickup = createPickup(storeName);

    expect(pickup).toHaveProperty('store', storeName);
    expect(pickup).toHaveProperty('orderId');
    expect(pickup).toHaveProperty('customer');
    expect(pickup).toHaveProperty('address');
  });

  // Add more test cases for createPickup as needed
});
