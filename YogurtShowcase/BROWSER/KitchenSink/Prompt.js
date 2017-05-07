YogurtShowcase('KitchenSink').Prompt = CLASS({

	preset : () => {
		return VIEW;
	},

	init : (inner, self) => {
		
		TITLE('Yogurt Prompt.');

		let content;
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

		Yogurt.Prompt('Prompt!', (str) => {
			content.empty();
			content.append(str);
		});

		inner.on('close', () => {
			wrapper.remove();
		});
	}
});
