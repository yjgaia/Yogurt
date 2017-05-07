YogurtShowcase('KitchenSink').Alert = CLASS({

	preset : function() {
		'use strict';

		return VIEW;
	},

	init : function(inner, self) {
		'use strict';

		var
		// wrapper
		wrapper;

		TITLE('Yogurt Alert.');

		wrapper = Yogurt.Wrapper({
			c : [

			// toolbar
			Yogurt.Toolbar({

				// left
				left : Yogurt.ToolbarButton({
					icon : FontAwesome.GetIcon('chevron-left'),
					on : {
						tap : function() {
							YogurtShowcase.GO('KitchenSink');
						}
					}
				}),

				// title
				title : 'Alert'
			}),

			// content
			DIV({
				style : {
					padding : 20
				},
				c : [P({
					c : ['Welcome to Yogurt Showcase.']
				})]
			})]
		}).appendTo(BODY);

		Yogurt.Alert('Alert');

		inner.on('close', function() {
			wrapper.remove();
		});
	}
});
