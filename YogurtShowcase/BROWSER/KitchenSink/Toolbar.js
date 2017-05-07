YogurtShowcase('KitchenSink').Toolbar = CLASS({

	preset : function() {
		'use strict';

		return VIEW;
	},

	init : function(inner, self) {
		'use strict';

		var
		// wrapper
		wrapper;

		TITLE('Yogurt Toolbar');

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
				title : 'Toolbar',

				// right
				right : Yogurt.ToolbarButton({
					title : 'Button',
					on : {
						tap : function() {
							Yogurt.Alert('test');
						}
					}
				})
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

		inner.on('close', function() {
			wrapper.remove();
		});
	}
});
