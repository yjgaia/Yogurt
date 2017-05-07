YogurtShowcase('KitchenSink').BottomBar = CLASS({

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

		TITLE('Yogurt Bottom Bar');

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
				title : 'Bottom Bar'
			}),

			// content
			content = DIV({
				style : {
					padding : 20
				},
				c : [P({
					c : ['Welcome to Yogurt Showcase.']
				})]
			}),

			// bottom bar
			Yogurt.BottomBar({
				buttons : [Yogurt.BottomButton({
					icon : FontAwesome.GetIcon('car'),
					title : 'Car',
					on : {
						tap : function() {
							content.empty();
							content.append(IMG({
								style : {
									width : '100%',
									maxWidth : 400
								},
								src : YogurtShowcase.R('car.jpg')
							}));
						}
					}
				}), Yogurt.BottomButton({
					icon : FontAwesome.GetIcon('bus'),
					title : 'Bus',
					on : {
						tap : function() {
							content.empty();
							content.append(IMG({
								style : {
									width : '100%',
									maxWidth : 400
								},
								src : YogurtShowcase.R('bus.jpg')
							}));
						}
					}
				}), Yogurt.BottomButton({
					icon : FontAwesome.GetIcon('train'),
					title : 'Train',
					on : {
						tap : function() {
							content.empty();
							content.append(IMG({
								style : {
									width : '100%',
									maxWidth : 400
								},
								src : YogurtShowcase.R('train.jpg')
							}));
						}
					}
				}), Yogurt.BottomButton({
					icon : FontAwesome.GetIcon('ship'),
					title : 'Ship',
					on : {
						tap : function() {
							content.empty();
							content.append(IMG({
								style : {
									width : '100%',
									maxWidth : 400
								},
								src : YogurtShowcase.R('ship.jpg')
							}));
						}
					}
				}), Yogurt.BottomButton({
					icon : FontAwesome.GetIcon('plane'),
					title : 'Plane',
					on : {
						tap : function() {
							content.empty();
							content.append(IMG({
								style : {
									width : '100%',
									maxWidth : 400
								},
								src : YogurtShowcase.R('plane.jpg')
							}));
						}
					}
				})]
			})]
		}).appendTo(BODY);

		inner.on('close', function() {
			wrapper.remove();
		});
	}
});
