var ms = {};

var getItem = function(key) {
  return key in ms ? ms[key] : null;
};

var setItem = function(key, value) {
  ms[key] = value;
  return true;
};

var removeItem = function(key) {
  var found = key in ms;
  if (found) return delete ms[key];
  return false;
};

var clear = function() {
  ms = {};
  return true;
};

module.exports = {
  getItem: getItem,
  setItem: setItem,
  removeItem: removeItem,
  clear: clear
};
