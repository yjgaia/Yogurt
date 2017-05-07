YogurtShowcase('KitchenSink').Calendar = CLASS({

	preset : function() {
		'use strict';

		return VIEW;
	},

	init : function(inner, self) {
		'use strict';

		var
		// wrapper
		wrapper,
		
		// selected date panel
		selectedDatePanel;

		TITLE('Yogurt Calendar.');

		wrapper = Yogurt.Wrapper({
			c : [

			// toolbar
			Yogurt.Toolbar({

				// left
				left : Yogurt.ToolbarButton({
					icon : FontAwesome.GetIcon('chevron-left'),
					on : {
						tap : function() {
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
			Yogurt.Calendar({}, function(cal) {
				selectedDatePanel.empty();
				selectedDatePanel.append(cal.getYear() + '-' + cal.getMonth() + '-' + cal.getDate());
			})
		});

		inner.on('close', function() {
			wrapper.remove();
		});
	}
});
