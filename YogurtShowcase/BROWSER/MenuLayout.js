YogurtShowcase.MenuLayout = CLASS({

	preset : () => {
		return VIEW;
	},

	init : (inner, self) => {

		TITLE('Yogurt Menu.');

		let menuLayout = Yogurt.MenuLayout({

			toolbar : Yogurt.Toolbar({

				contentStyle : {
					onDisplayResize : (width, height) => {

						if (width > Yogurt.Theme.menuLayoutHideMenuWinWidth) {
							return {
								left : Yogurt.Theme.menuLayoutMenuWidth,
								width : BODY.getWidth() - Yogurt.Theme.menuLayoutMenuWidth * 2
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

							if (width > Yogurt.Theme.menuLayoutHideMenuWinWidth) {
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

							if (width > Yogurt.Theme.menuLayoutHideMenuWinWidth) {
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
				c : UUI.BUTTON_H({
					style : {
						padding : 15,
						borderBottom : '1px solid #666',
						fontSize : 15
					},
					icon : FontAwesome.GetIcon('chevron-left'),
					spacing : 10,
					title : 'Go Home',
					on : {
						tap : () => {
							YogurtShowcase.GO('');
						}
					}
				})
			}),

			rightMenu : DIV({
				c : UUI.BUTTON_H({
					style : {
						padding : 15,
						borderBottom : '1px solid #666',
						fontSize : 15
					},
					icon : FontAwesome.GetIcon('chevron-left'),
					spacing : 10,
					title : 'Go Home',
					on : {
						tap : () => {
							YogurtShowcase.GO('');
						}
					}
				})
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
