YogurtShowcase('KitchenSink').Toolbar = CLASS({

	preset : () => {
		return VIEW;
	},

	init : (inner, self) => {
		
		TITLE('Yogurt Toolbar');

		let wrapper = Yogurt.Wrapper({
			c : [

			// toolbar
			Yogurt.Toolbar({

				// left
				left : Yogurt.BackButton({
					on : {
						tap : () => {
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
						tap : () => {
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

		inner.on('close', () => {
			wrapper.remove();
		});
	}
});
