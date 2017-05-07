YogurtShowcase.Dashboard = CLASS({

	preset : function() {
		'use strict';

		return VIEW;
	},

	init : function(inner, self) {
		'use strict';

		var
		// wrapper
		wrapper;

		TITLE('Yogurt Toolbar.');

		wrapper = Yogurt.Wrapper({
			c : 'test'
		}).appendTo(YogurtShowcase.GLOBAL.content);

		inner.on('close', function() {
			wrapper.remove();
		});
	}
});
