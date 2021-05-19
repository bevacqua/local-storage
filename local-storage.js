'use strict';

var stub = require('./stub');
var tracking = require('./tracking');
var ls = stub;

try{
  if('localStorage' in window && global.localStorage && window.localStorage){
    ls =  global.localStorage ;
  }
}catch (e){
  console.error(`Access denied! Failed to read the 'localStorage' property from 'Window': Access is denied for this document`)
}

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
    ls.setItem(key, JSON.stringify(value));
}

function remove (key) {
  return ls.removeItem(key);
}

function clear () {
  return ls.clear();
}

function backend (store) {
  store && (ls = store);

  return ls;
}

accessor.set = set;
accessor.get = get;
accessor.remove = remove;
accessor.clear = clear;
accessor.backend = backend;
accessor.on = tracking.on;
accessor.off = tracking.off;

module.exports = accessor;
