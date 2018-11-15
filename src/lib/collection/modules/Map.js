/**
 * Map each element to an array of values.
 * @method map
 * @memberof Grindstone
 * @param {function} callback return the value to be included, or null or undefined to skip
 * @returns {object} Collection object of included values returned from the callback
 * @example $(array).map(function(item, index, array){});
 */

const map = function(callback) {
	const newSet = $();
	const set = this.set;
	set.forEach((item, index, array) => {
		let ret = callback.call(item, item, index, array);
		if (ret !== undefined && ret !== null) newSet.push(ret);
	});
	return newSet;
};

$.fn.map = map;

// @if !NODE_ENV='production'
module.exports = map;
// @endif
