var listeners = {};
var listening = false;

var change = function(e) {
  var all;

  var fire = function(listener) {
    listener(JSON.parse(e.newValue), JSON.parse(e.oldValue), e.url || e.uri);
  };

  if (!e) e = global.event;

  all = listeners[e.key];
  if (all) all.forEach(fire);
};

var listen = function() {
  if (global.addEventListener) {
    global.addEventListener('storage', change, false);
  } else if (global.attachEvent) {
    global.attachEvent('onstorage', change);
  } else {
    global.onstorage = change;
  }
};

var on = function(key, fn) {
  if (listeners[key]) {
    listeners[key].push(fn);
  } else {
    listeners[key] = [fn];
  }
  if (listening === false) listen();
};

var off = function(key, fn) {
  var ns = listeners[key];

  if (ns.length > 1) {
    ns.splice(ns.indexOf(fn), 1);
  } else {
    listeners[key] = [];
  }
};

module.exports = {
  on: on,
  off: off
};
