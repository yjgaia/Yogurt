YogurtShowcase.Alert = CLASS({

	preset : () => {
		return VIEW;
	},

	init : (inner, self) => {

		TITLE('Yogurt Alert.');

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

		Yogurt.Alert({
			msg : 'Alert'
		});

		inner.on('close', () => {
			wrapper.remove();
		});
	}
});
