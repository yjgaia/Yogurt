YogurtShowcase.Toolbar = CLASS({

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
							YogurtShowcase.GO('');
						}
					}
				}),

				// title
				title : '툴바',

				// right
				right : Yogurt.ToolbarButton({
					icon : FontAwesome.GetIcon('pencil'),
					title : '버튼',
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
