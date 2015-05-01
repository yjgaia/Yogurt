YogurtShowcase.Button = CLASS({

	preset : function() {
		'use strict';

		return VIEW;
	},

	init : function(inner, self) {
		'use strict';

		var
		// wrapper
		wrapper;

		TITLE('Yogurt Button.');

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
				title : 'Button'
			}),

			// content
			DIV({
				style : {
					padding : 20
				},
				c : [P({
					c : ['Welcome to Button Showcase.']
				}), Yogurt.Button({
					style : {
						marginTop : 15
					},
					title : 'Go Back',
					on : {
						tap : function() {
							YogurtShowcase.GO('');
						}
					}
				})]
			})]
		}).appendTo(BODY);

		inner.on('close', function() {
			wrapper.remove();
		});
	}
});
