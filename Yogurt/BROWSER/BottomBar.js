Yogurt.BottomBar = CLASS(function(cls) {
	'use strict';

	var
	// z index
	zIndex = 999;

	return {

		preset : function() {
			return NODE;
		},

		init : function(inner, self, params) {
			//REQUIRED: params
			//REQUIRED: params.buttons
			//OPTIONAL: params.style
			//OPTIONAL: params.contentStyle

			var
			// buttons
			buttons = params.buttons,

			// color
			color = BROWSER_CONFIG.Yogurt === undefined || BROWSER_CONFIG.Yogurt.bottomBarColor === undefined ? '#666' : BROWSER_CONFIG.Yogurt.bottomBarColor,

			// text color
			textColor = BROWSER_CONFIG.Yogurt === undefined || BROWSER_CONFIG.Yogurt.bottomBarTextColor === undefined ? '#fff' : BROWSER_CONFIG.Yogurt.bottomBarTextColor,

			// height
			height = BROWSER_CONFIG.Yogurt === undefined || BROWSER_CONFIG.Yogurt.bottomBarHeight === undefined ? 70 : BROWSER_CONFIG.Yogurt.bottomBarHeight,

			// content style
			contentStyle = params.contentStyle,

			// wrapper
			wrapper,

			// content
			content,

			// add content style.
			addContentStyle;

			wrapper = DIV({
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
						c : RUN(function() {

							var
							// array
							array = [];

							EACH(buttons, function(button) {
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

			self.addContentStyle = addContentStyle = function(style) {
				//REQUIRED: style

				content.addStyle(style);
			};

			if (contentStyle !== undefined) {
				addContentStyle(contentStyle);
			}
		}
	};
});
