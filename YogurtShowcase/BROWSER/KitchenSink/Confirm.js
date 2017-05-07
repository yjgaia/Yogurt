YogurtShowcase('KitchenSink').Confirm = CLASS({

	preset : function() {
		'use strict';

		return VIEW;
	},

	init : function(inner, self) {
		'use strict';

		var
		// wrapper
		wrapper,

		// content
		content;

		TITLE('Yogurt Confirm.');

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
				title : 'Confirm'
			}),

			// content
			DIV({
				style : {
					padding : 20
				},
				c : content = P({
					c : 'Welcome to Yogurt Showcase.'
				})
			})]
		}).appendTo(BODY);

		Yogurt.Confirm('Confirm!', function() {
			content.empty();
			content.append('Yes!');
		});

		inner.on('close', function() {
			wrapper.remove();
		});
	}
});
