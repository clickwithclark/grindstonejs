	/** @namespace DoubleTap */
	
	/**
	 * Trigger a function by double-tapping or double-clicking.
	 * @method doubleTap
	 * @memberof DoubleTap
	 * @param {function} callback
	 * @returns {object} current instance of Grindstone
	 * @example $('#selector').doubleTap(function(){});
	 */

	$.fn.doubleTap = function(callback) {
		let active, interaction;
		this.each(function() {
			active = false;
			interaction = priv.createInteraction('touchend', 'click');
			$(this).on(interaction, () => {
				if (active) {
					callback();
					return active = false;
				}
				active = true;
				setTimeout(() => {
					return active = false;
				}, 350);
			});
		});
		return this;
	};
