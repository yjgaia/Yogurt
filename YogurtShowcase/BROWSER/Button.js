YogurtShowcase.Button = CLASS({

	preset : function() {
		'use strict';

		return VIEW;
	},

	init : function(inner, self) {
		'use strict';

		var
		// wrapper
		wrapper,

		// close.
		close;

		TITLE('Yogurt Button.');

		wrapper = Yogurt.Wrapper({
			c : [

			// toolbar
			Yogurt.Toolbar({

				// left child
				leftChild : Yogurt.ToolbarButton({
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

		//OVERRIDE: self.close
		self.close = close = function(params) {
			wrapper.remove();
		};
	}
});
