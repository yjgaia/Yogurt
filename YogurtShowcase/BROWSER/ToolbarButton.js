YogurtShowcase.ToolbarButton = CLASS({

	preset : function() {
		'use strict';
		return VIEW;
	},

	init : function(inner, self) {
		'use strict';

		var
		//

		// wrapper
		wrapper,

		// close.
		close;

		TITLE('Yogurt Toolbar Button.');

		wrapper = Yogurt.Wrapper({
			c : [

			// toolbar
			Yogurt.Toolbar({

				// left
				left : Yogurt.ToolbarButton({
					style : {
						flt : 'left'
					},
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
				title : 'Toolbar Button',

				// right
				right : Yogurt.ToolbarButton({
					title : 'Button',
					on : {
						tap : function() {

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

		//OVERRIDE: self.close
		self.close = close = function(params) {
			wrapper.remove();
		};
	}
});
