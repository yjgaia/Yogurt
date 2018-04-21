YogurtShowcase.Confirm = CLASS({

	preset : () => {
		return VIEW;
	},

	init : (inner, self) => {
		
		TITLE('Yogurt Confirm.');

		let content;
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

		Yogurt.Confirm({
			msg : 'Confirm!'
		}, () => {
			content.empty();
			content.append('Yes!');
		});

		inner.on('close', () => {
			wrapper.remove();
		});
	}
});
