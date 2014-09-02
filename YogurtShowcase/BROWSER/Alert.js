YogurtShowcase.Alert = CLASS({

	preset : function() {
		'use strict';

		return VIEW;
	},

	init : function(inner, self) {
		'use strict';

		var
		// wrapper
		wrapper,

		// alert
		alert,

		// close.
		close;

		TITLE('Yogurt Alert.');

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

		alert = Yogurt.Alert('test', function() {
			YogurtShowcase.GO('');
			alert = undefined;
		});

		//OVERRIDE: self.close
		self.close = close = function(params) {

			wrapper.remove();

			if (alert !== undefined) {
				alert.close();
			}
		};
	}
});
