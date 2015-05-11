// Service that wraps localForage to allow storing items with an expiration
// Requires: localForage, moment.js
 
// ForageExpire.setItem('someData', 'I want to expire this in 1 day', moment().add(1, 'days))
// ForageExpire.getItem('someData', function(data){ console.log(data); })
 
angular
  .module('csForageExpire')
  .factory('csForageExpire', [
	function() {
	  return {
	    setItem: function(key, value, exp) {
	      localforage.setItem(key, { val: value, expires: exp });
	    },
	    getItem: function(key, callback) {
	      localforage.getItem(key, function(info) {
	        if (!info || moment().diff(info.expires) > 0) {
	          callback(null);
	        } else {
	          callback(info.val);
	        }
	      });
	    }
	  };
	}]);