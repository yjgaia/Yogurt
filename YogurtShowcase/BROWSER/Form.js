YogurtShowcase.Form = CLASS({

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

		TITLE('Yogurt Form.');

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
				title : 'Form'
			}),

			// content
			DIV({
				style : {
					padding : 20
				},
				c : [P({
					c : ['Welcome to Form Showcase.']
				}), UUI.VALID_FORM({
					style : {
						marginTop : 15
					},
					c : [Yogurt.Input({

					})]
				})]
			})]
		}).appendTo(BODY);

		//OVERRIDE: self.close
		self.close = close = function(params) {
			wrapper.remove();
		};
	}
});
