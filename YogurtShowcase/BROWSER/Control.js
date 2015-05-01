YogurtShowcase.Control = CLASS({

	preset : function() {
		'use strict';

		return VIEW;
	},

	init : function(inner, self) {
		'use strict';

		var
		// wrapper
		wrapper;

		YogurtShowcase.GLOBAL.wrapper = wrapper = Yogurt.Wrapper({
			c : [

			// content
			YogurtShowcase.GLOBAL.content = DIV()]
		}).appendTo(BODY);

		inner.on('close', function() {
			wrapper.remove();
		});
	}
});
