YogurtShowcase('KitchenSink').Calendar = CLASS({

	preset : () => {
		return VIEW;
	},

	init : (inner, self) => {

		TITLE('Yogurt Calendar.');

		let selectedDatePanel;
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
				title : 'Calendar'
			}),
			
			// content
			DIV({
				style : {
					padding : 20
				},
				c : ['Welcome to Calendar Showcase.', P({
					c : ['Selected Date: ', selectedDatePanel = SPAN({
						style : {
							fontWeight : 'bold'
						},
						c : 'None'
					})]
				})]
			})]
		}).appendTo(BODY);
		
		UUI.MODAL({
			style : {
				width : 280
			},
			c :
			// calendar
			Yogurt.Calendar({}, (cal) => {
				selectedDatePanel.empty();
				selectedDatePanel.append(cal.getYear() + '-' + cal.getMonth() + '-' + cal.getDate());
			})
		});

		inner.on('close', () => {
			wrapper.remove();
		});
	}
});
