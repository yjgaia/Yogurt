YogurtShowcase.BottomBar = CLASS({

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
		content,

		// close.
		close;

		TITLE('Yogurt Bottom Bar');

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
					img : IMG({
						src : YogurtShowcase.R('bottom1.png')
					}),
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
					img : IMG({
						src : YogurtShowcase.R('bottom2.png')
					}),
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
					img : IMG({
						src : YogurtShowcase.R('bottom3.png')
					}),
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
					img : IMG({
						src : YogurtShowcase.R('bottom4.png')
					}),
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
					img : IMG({
						src : YogurtShowcase.R('bottom5.png')
					}),
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

		//OVERRIDE: self.close
		self.close = close = function(params) {
			wrapper.remove();
		};
	}
});
