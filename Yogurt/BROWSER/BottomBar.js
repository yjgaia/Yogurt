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
			//OPTIONAL: params.style

			var
			// buttons
			buttons = params.buttons,

			// color
			color = BROWSER_CONFIG.Yogurt === undefined || BROWSER_CONFIG.Yogurt.BottomBarColor === undefined ? '#666' : BROWSER_CONFIG.Yogurt.BottomBarColor,

			// text color
			textColor = BROWSER_CONFIG.Yogurt === undefined || BROWSER_CONFIG.Yogurt.BottomBarTextColor === undefined ? '#fff' : BROWSER_CONFIG.Yogurt.BottomBarTextColor,

			// wrapper
			wrapper,

			// content
			content;

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
							padding : '14px 0 10px 0',
							color : textColor
						},
						c : EXTEND({
							origin : buttons,
							extend : [CLEAR_BOTH()]
						})
					})
				})
			});

			inner.setWrapperDom(wrapper);
			inner.setContentDom(content);
		}
	};
});
