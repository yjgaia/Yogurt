YogurtShowcase.Confirm = CLASS({

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
		content,

		// close.
		close;

		TITLE('Yogurt Confirm.');

		wrapper = Yogurt.Wrapper({
			c : [

			// toolbar
			Yogurt.Toolbar({

				// left
				left : Yogurt.ToolbarButton({
					img : IMG({
						src : Yogurt.R('back.png')
					}),
					on : {
						tap : function() {
							YogurtShowcase.GO('');
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

		//OVERRIDE: self.close
		self.close = close = function(params) {
			wrapper.remove();
		};
	}
});
