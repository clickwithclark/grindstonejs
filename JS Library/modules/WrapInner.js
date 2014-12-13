/**
 * wrapInner(structure)
 * 
 * Wraps the innerHTML of the selected element(s) with the specified structure
 *
 * Parameter:
 * -structure (new HTML structure to wrap the selected content in)
 */
	
	$.fn.wrapInner = function(structure){
		$.forEach(this.init,function(){
			if(structure){
				if (typeof structure === "string"){
					var contents = $(this).html(),
						wrap = structure;
					$(this).html(wrap + contents);
				} else {
					throw new Error("wrapInner structure must be specified as a string.");
				}
			} else {
				throw new Error("Cannot wrap the innerHTML of the selected element with null.");
			}
		});
		return this;
 	};