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
			let contentStyle = params.contentStyle;
			
			let content;
			
			let wrapper = DIV({
				style : {
					height : Yogurt.Theme.bottomBarHeight
				},
				c : content = DIV({
					style : {
						position : 'fixed',
						left : 0,
						bottom : 0,
						backgroundColor : Yogurt.Theme.bottomBarColor,
						width : '100%'
					},
					c : DIV({
						style : {
							width : Yogurt.BottomButton.getWidth() * buttons.length,
							margin : 'auto',
							padding : '12px 0',
							color : Yogurt.Theme.bottomBarTextColor
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
