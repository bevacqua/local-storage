'use strict';

var ms = {};

function getItem (key) {
  return 'key' in ms ? ms[key] : null;
}

function setItem (key, value) {
  ms[key] = value;
}

function removeItem (key) {
  var found = key in ms;
  if (found) {
    return delete ms[key];
  }
  return false;
}

module.exports = {
  getItem: getItem,
  setItem: setItem,
  removeItem: removeItem
};
