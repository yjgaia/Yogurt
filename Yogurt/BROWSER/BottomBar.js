Yogurt.BottomBar = CLASS((cls) => {
	
	let zIndex = 999;

	return {

		preset : () => {
			return NODE;
		},

		init : (inner, self, params) => {
			//REQUIRED: params
			//REQUIRED: params.buttons
			//OPTIONAL: params.style
			//OPTIONAL: params.contentStyle

			let buttons = params.buttons;
			let color = BROWSER_CONFIG.Yogurt === undefined || BROWSER_CONFIG.Yogurt.bottomBarColor === undefined ? '#666' : BROWSER_CONFIG.Yogurt.bottomBarColor;
			let textColor = BROWSER_CONFIG.Yogurt === undefined || BROWSER_CONFIG.Yogurt.bottomBarTextColor === undefined ? '#fff' : BROWSER_CONFIG.Yogurt.bottomBarTextColor;
			let height = BROWSER_CONFIG.Yogurt === undefined || BROWSER_CONFIG.Yogurt.bottomBarHeight === undefined ? 70 : BROWSER_CONFIG.Yogurt.bottomBarHeight;
			let contentStyle = params.contentStyle;
			
			let content;
			
			let wrapper = DIV({
				style : {
					height : height
				},
				c : content = DIV({
					style : {
						position : 'fixed',
						left : 0,
						bottom : 0,
						backgroundColor : color,
						width : '100%'
					},
					c : DIV({
						style : {
							width : Yogurt.BottomButton.getWidth() * buttons.length,
							margin : 'auto',
							padding : '12px 0',
							color : textColor
						},
						c : RUN(() => {

							let array = [];

							EACH(buttons, (button) => {
								array.push(button);
							});

							array.push(CLEAR_BOTH());

							return array;
						})
					})
				})
			});

			inner.setWrapperDom(wrapper);
			inner.setContentDom(content);

			let addContentStyle = self.addContentStyle = (style) => {
				//REQUIRED: style

				content.addStyle(style);
			};

			if (contentStyle !== undefined) {
				addContentStyle(contentStyle);
			}
		}
	};
});
