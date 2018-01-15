YogurtShowcase('KitchenSink').MenuLayout = CLASS({

	preset : () => {
		return VIEW;
	},

	init : (inner, self) => {

		TITLE('Yogurt Menu.');

		let menuLayout = Yogurt.MenuLayout({

			toolbar : Yogurt.Toolbar({

				contentStyle : {
					onDisplayResize : (width, height) => {

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
						onDisplayResize : (width, height) => {

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
						tap : (e) => {
							menuLayout.toggleLeftMenu();
						}
					}
				}),

				// right
				right : Yogurt.ToolbarButton({
					style : {
						onDisplayResize : (width, height) => {

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
						tap : (e) => {
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
						width : '100%',
						padding : 15,
						borderBottom : '1px solid #666',
						fontSize : 15
					},
					icon : FontAwesome.GetIcon('chevron-left'),
					spacing : 10,
					title : 'Go Home',
					on : {
						tap : () => {
							YogurtShowcase.GO('KitchenSink');
						}
					}
				})]
			}),

			rightMenu : DIV({
				c : [UUI.BUTTON_H({
					style : {
						width : '100%',
						padding : 15,
						borderBottom : '1px solid #666',
						fontSize : 15
					},
					icon : FontAwesome.GetIcon('chevron-left'),
					spacing : 10,
					title : 'Go Home',
					on : {
						tap : () => {
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

		inner.on('close', () => {
			menuLayout.remove();
		});
	}
});
