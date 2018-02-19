YogurtShowcase.Button = CLASS({

	preset : () => {
		return VIEW;
	},

	init : (inner, self) => {
		
		TITLE('Yogurt Button.');

		let wrapper = Yogurt.Wrapper({
			c : [

			// toolbar
			Yogurt.Toolbar({

				// left
				left : Yogurt.BackButton({
					on : {
						tap : () => {
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
						tap : () => {
							YogurtShowcase.GO('');
						}
					}
				})]
			})]
		}).appendTo(BODY);

		inner.on('close', () => {
			wrapper.remove();
		});
	}
});
