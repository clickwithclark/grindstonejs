/**
 * on() / off()
 * 
 * Adding and removing event listeners
 *
 * Parameters:
 * -action (the event(s) to handle)
 * -callback (the event handler)
 */
	
	// Assign the eventListener
	//
	$.fn.on = function(_action, _callback) {
		
		var events, i;
		
		this.init(function() {
					
			events = _action.split(" ");
			
			for (i = 0; i < events.length; i++) {
				this.addEventListener(events[i], _callback, false);
			}
			
		});
		
		return this;
 	};
	
	// Drop the eventListener
	//
	$.fn.off = function(_action, _callback) {
		
		var events, i;
		
		this.init(function() {
					
			events = _action.split(" ");
			
			for (i = 0; i < events.length; i++) {
				this.removeEventListener(events[i], _callback, false);
			}
			
		});
		
		return this;
	};