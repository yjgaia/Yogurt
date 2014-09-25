Yogurt.BottomBar = CLASS({

	preset : function() {
		'use strict';

		return NODE;
	},

	init : function(inner, self, params) {
		'use strict';
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

		// content
		content;

		inner.setWrapperDom(DIV({
			style : {
				position : 'fixed',
				bottom : 0,
				backgroundColor : color,
				width : '100%',
				textAlign : 'center'
			},
			c : content = DIV({
				style : {
					width : Yogurt.BottomButton.getWidth() * buttons.length,
					margin : 'auto',
					padding : '15px 0 10px 0',
					color : textColor
				}
			})
		}));

		inner.setContentDom(content);

		EACH(buttons, function(button) {
			self.append(button);
		});

		self.append(CLEAR_BOTH());
	}
});
