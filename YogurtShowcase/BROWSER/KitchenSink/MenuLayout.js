YogurtShowcase('KitchenSink').MenuLayout = CLASS({

	preset : function() {
		'use strict';

		return VIEW;
	},

	init : function(inner, self) {
		'use strict';

		var
		// menu layout
		menuLayout;

		TITLE('Yogurt Menu.');

		menuLayout = Yogurt.MenuLayout({

			toolbar : Yogurt.Toolbar({

				contentStyle : {
					onDisplayResize : function(width, height) {

						if (width > Yogurt.MenuLayout.getHideMenuWinWidth()) {
							return {
								left : Yogurt.MenuLayout.getMenuWidth(),
								width : BODY.getWidth() - Yogurt.MenuLayout.getMenuWidth() * 2
							};
						} else {
							return {
								left : 0,
								width : '100%'
							};
						}
					}
				},

				// left
				left : Yogurt.ToolbarButton({
					style : {
						onDisplayResize : function(width, height) {

							if (width > Yogurt.MenuLayout.getHideMenuWinWidth()) {
								return {
									display : 'none'
								};
							} else {
								return {
									display : 'block'
								};
							}
						}
					},
					icon : FontAwesome.GetIcon('bars'),
					on : {
						tap : function(e) {
							menuLayout.toggleLeftMenu();
						}
					}
				}),

				// right
				right : Yogurt.ToolbarButton({
					style : {
						onDisplayResize : function(width, height) {

							if (width > Yogurt.MenuLayout.getHideMenuWinWidth()) {
								return {
									display : 'none'
								};
							} else {
								return {
									display : 'block'
								};
							}
						}
					},
					icon : FontAwesome.GetIcon('bars'),
					on : {
						tap : function(e) {
							menuLayout.toggleRightMenu();
						}
					}
				}),

				// title
				title : 'Menu'
			}),

			leftMenu : DIV({
				c : [UUI.BUTTON_H({
					style : {
						padding : 15,
						borderBottom : '1px solid #666',
						fontSize : 15
					},
					icon : FontAwesome.GetIcon('chevron-left'),
					spacing : 10,
					title : 'Go Home',
					on : {
						tap : function() {
							YogurtShowcase.GO('KitchenSink');
						}
					}
				})]
			}),

			rightMenu : DIV({
				c : [UUI.BUTTON_H({
					style : {
						padding : 15,
						borderBottom : '1px solid #666',
						fontSize : 15
					},
					icon : FontAwesome.GetIcon('chevron-left'),
					spacing : 10,
					title : 'Go Home',
					on : {
						tap : function() {
							YogurtShowcase.GO('KitchenSink');
						}
					}
				})]
			}),

			c : [Yogurt.Wrapper({
				c : [

				// content
				DIV({
					style : {
						padding : 20
					},
					c : [P({
						c : ['Welcome to Yogurt Showcase.']
					})]
				})]
			})]
		}).appendTo(BODY);

		inner.on('close', function() {
			menuLayout.remove();
		});
	}
});
