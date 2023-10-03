'use strict';

const eventPool = require('../eventPool.js');
const handleDriver = require('../driver/handler.js');

jest.mock('../eventPool.js', () => ({
  emit: jest.fn(),
}));

// Enable fake timers
jest.useFakeTimers();

it('should emit "in-transit" event with payload', () => {
  const payload = { orderID: '123' };
  handleDriver(payload);

  // Assert that eventPool.emit was called with the expected arguments
  expect(eventPool.emit).toHaveBeenCalledWith('in-transit', payload);
});

it('should emit "delivered" event with payload after a delay', () => {
  const payload = { orderId: '456' }; // Change orderID to orderId
  handleDriver(payload);

  // Advance timers to simulate the delay
  jest.advanceTimersByTime(2000);

  // Assert that eventPool.emit was called with the expected arguments after the delay
  expect(eventPool.emit).toHaveBeenCalledWith('delivered', payload);
});
