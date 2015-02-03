Yogurt.Submit = CLASS({

	preset : function() {
		'use strict';

		return UUI.FULL_SUBMIT;
	},

	params : function() {
		'use strict';

		var
		// color
		color = BROWSER_CONFIG.Yogurt === undefined || BROWSER_CONFIG.Yogurt.buttonColor === undefined ? '#333' : BROWSER_CONFIG.Yogurt.buttonColor;

		return {
			style : {
				display : 'block',
				textAlign : 'center',
				paddingTop : 20,
				paddingBottom : 20,
				cursor : 'pointer',
				textDecoration : 'none',
				color : color,
				fontSize : 24,
				border : '1px solid ' + color,
				borderRadius : 5,
				touchCallout : 'none',
				userSelect : 'none',
				backgroundColor : '#fff',
				width : '100%'
			},
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
