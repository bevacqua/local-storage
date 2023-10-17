'use strict';

var stub = require('./stub');
var tracking = require('./tracking');

var localStorageAvailable = function () {
  try {
    global.localStorage.setItem('_test-local-storage-availability_', '1');
    global.localStorage.removeItem('_test-local-storage-availability_');
    return true;
  } catch (e) {
    return false;
  }
};

var ls = localStorageAvailable() ? global.localStorage : stub;

function accessor (key, value) {
  if (arguments.length === 1) {
    return get(key);
  }
  return set(key, value);
}

function get (key) {
  return JSON.parse(ls.getItem(key));
}

function set (key, value) {
  try {
    ls.setItem(key, JSON.stringify(value));
    return true;
  } catch (e) {
    return false;
  }
}

function remove (key) {
  return ls.removeItem(key);
}

function clear () {
  return ls.clear();
}

accessor.set = set;
accessor.get = get;
accessor.remove = remove;
accessor.clear = clear;
accessor.on = tracking.on;
accessor.off = tracking.off;

module.exports = accessor;
