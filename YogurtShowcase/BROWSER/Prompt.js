YogurtShowcase.Prompt = CLASS({

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

		TITLE('Yogurt Prompt.');

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
				title : 'Prompt'
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

		Yogurt.Prompt('Prompt!', function(str) {
			content.empty();
			content.append(str);
		});

		inner.on('close', function() {
			wrapper.remove();
		});
	}
});
