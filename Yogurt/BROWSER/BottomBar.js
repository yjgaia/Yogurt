Yogurt.BottomBar = CLASS(function(cls) {
	'use strict';

	var
	// z index
	zIndex = 999,

	// height
	height = 70;

	return {

		preset : function() {
			return NODE;
		},

		init : function(inner, self, params) {
			//REQUIRED: params
			//REQUIRED: params.buttons
			//OPTIONAL: params.wrapperStyle
			//OPTIONAL: params.contentStyle

			var
			// buttons
			buttons = params.buttons,

			// color
			color = BROWSER_CONFIG.Yogurt === undefined || BROWSER_CONFIG.Yogurt.BottomBarColor === undefined ? '#666' : BROWSER_CONFIG.Yogurt.BottomBarColor,

			// text color
			textColor = BROWSER_CONFIG.Yogurt === undefined || BROWSER_CONFIG.Yogurt.BottomBarTextColor === undefined ? '#fff' : BROWSER_CONFIG.Yogurt.BottomBarTextColor,

			// wrapper style
			wrapperStyle = params.wrapperStyle,

			// content style
			contentStyle = params.contentStyle,

			// wrapper
			wrapper,

			// content
			content,

			// add wrapper style.
			addWrapperStyle,

			// add content style.
			addContentStyle;

			wrapper = DIV({
				style : {
					backgroundColor : '#333',
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

			self.addWrapperStyle = addWrapperStyle = function(style) {
				//REQUIRED: style

				wrapper.addStyle(style);
			};

			if (wrapperStyle !== undefined) {
				addWrapperStyle(wrapperStyle);
			}

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
