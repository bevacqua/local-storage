'use strict';

var ls = require('./stub');
var tracking = require('./tracking');

try {
  var uid = String(new Date());
  if ('localStorage' in global && global.localStorage) {
    var storage = global.localStorage;
    var isWorking;
    storage.setItem(uid, uid);
    isWorking = storage.getItem(uid) === uid;
    storage.removeItem(uid);
    if (storage && isWorking) ls = global.localStorage;
  }
} catch (e) {}

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
