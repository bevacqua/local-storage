'use strict';

var stub = require('./stub');
var tracking = require('./tracking');
var ls = 'localStorage' in global && global.localStorage ? global.localStorage : stub;

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

/**
 * See: https://stackoverflow.com/a/17748203/6279901
 *
 * @returns object
 */
function all() {
  var archive = {}, // Notice change here
      keys = Object.keys(ls),
      i = keys.length;

  while(i--){
      archive[keys[i]] = ls.getItem(keys[i]);
  }

  return archive;
}

accessor.set = set;
accessor.get = get;
accessor.remove = remove;
accessor.clear = clear;
accessor.all = all;
accessor.on = tracking.on;
accessor.off = tracking.off;

module.exports = accessor;
