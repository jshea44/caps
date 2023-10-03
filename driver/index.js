'use strict';

const eventEmitter = require('../eventPool.js');
const handleDriver = require('./handler.js');

eventEmitter.on('pick-up', handleDriver);
