var ls = require('./stub');
var tracking = require('./tracking');

var uid = String(new Date());
var storage;
var isWorking;

var get;
var set;
var remove;
var clear;
var accessor;

try {
  if ('localStorage' in global && global.localStorage) {
    storage = global.localStorage;
    storage.setItem(uid, uid);
    isWorking = storage.getItem(uid) === uid;
    storage.removeItem(uid);
    if (storage && isWorking) ls = global.localStorage;
  }
} catch (e) { /* nothing to do here */ }

get = function(key) {
  return JSON.parse(ls.getItem(key));
};

set = function(key, value) {
  try {
    ls.setItem(key, JSON.stringify(value));
    return true;
  } catch (e) {
    return false;
  }
};

remove = function(key) {
  return ls.removeItem(key);
};

clear = function() {
  return ls.clear();
};

accessor = function(key, value) {
  if (arguments.length === 1) {
    return get(key);
  }
  return set(key, value);
};

accessor.set = set;
accessor.get = get;
accessor.remove = remove;
accessor.clear = clear;
accessor.on = tracking.on;
accessor.off = tracking.off;

module.exports = accessor;
