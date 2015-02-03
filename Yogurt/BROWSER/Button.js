Yogurt.Button = CLASS({

	preset : function() {
		'use strict';

		return UUI.BUTTON;
	},

	params : function() {
		'use strict';

		var
		// color
		color = BROWSER_CONFIG.Yogurt === undefined || BROWSER_CONFIG.Yogurt.buttonColor === undefined ? '#333' : BROWSER_CONFIG.Yogurt.buttonColor;

		return {
			style : {
				padding : '20px 0',
				color : color,
				fontSize : 24,
				border : '1px solid ' + color,
				borderRadius : 5,
				backgroundColor : '#fff'
			},
			spacing : 5,
			on : {
				mouseover : function(e, input) {
					input.addStyle({
						color : '#fff',
						backgroundColor : color
					});
				},
				mouseout : function(e, input) {
					input.addStyle({
						color : color,
						backgroundColor : '#fff'
					});
				}
			}
		};
	}
});
